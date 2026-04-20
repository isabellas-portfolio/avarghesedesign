import nodemailer from "nodemailer";

const DEFAULT_TO = "AVargheseDesign@gmail.com";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function textOrDash(v: string | null | undefined) {
  const t = (v ?? "").trim();
  return t.length ? t : "—";
}

const budgetLabels: Record<string, string> = {
  "under-50k": "Under $50,000",
  "50k-100k": "$50,000 – $100,000",
  "100k-200k": "$100,000 – $200,000",
  "200k-400k": "$200,000 – $400,000",
  "400k-plus": "$400,000+",
  discuss: "Prefer to discuss",
};

const timelineLabels: Record<string, string> = {
  asap: "As soon as possible",
  "1-3-months": "1 – 3 months",
  "3-6-months": "3 – 6 months",
  "6-12-months": "6 – 12 months",
  "12-plus": "12+ months",
  planning: "Still planning / flexible",
};

const referralLabels: Record<string, string> = {
  "friends-family": "Friends / family",
  instagram: "Instagram",
  facebook: "Facebook",
  other: "Other",
};

const MAX_FILES = 6;
const MAX_FILE_BYTES = 12 * 1024 * 1024;

export async function sendConsultationEmail(formData: FormData) {
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  if (!smtpUser || !smtpPass) {
    throw new Error(
      "Email sending is not set up yet. Add SMTP_USER and SMTP_PASS to .env.local (for Gmail, use an App Password with 2-Step Verification enabled).",
    );
  }

  const to = (process.env.CONSULTATION_EMAIL_TO ?? DEFAULT_TO).trim();
  const from =
    process.env.SMTP_FROM?.trim() ||
    `"A Varghese Design" <${smtpUser}>`;

  const firstName = String(formData.get("firstName") ?? "").trim();
  const lastName = String(formData.get("lastName") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const newsletter = formData.get("newsletter") === "yes" ? "Yes" : "No";
  const phone = String(formData.get("phone") ?? "").trim();
  const country = String(formData.get("country") ?? "").trim();
  const addressLine1 = String(formData.get("addressLine1") ?? "").trim();
  const addressLine2 = String(formData.get("addressLine2") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const state = String(formData.get("state") ?? "").trim();
  const zip = String(formData.get("zip") ?? "").trim();
  const aboutProject = String(formData.get("aboutProject") ?? "").trim();
  const scope = String(formData.get("scope") ?? "").trim();
  const team = String(formData.get("team") ?? "").trim();
  const budgetKey = String(formData.get("budget") ?? "").trim();
  const timelineKey = String(formData.get("timeline") ?? "").trim();
  const referralKey = String(formData.get("referralSource") ?? "").trim();

  const budget = budgetLabels[budgetKey] ?? textOrDash(budgetKey);
  const timeline = timelineLabels[timelineKey] ?? textOrDash(timelineKey);
  const referral = referralLabels[referralKey] ?? textOrDash(referralKey);

  const rows: [string, string][] = [
    ["First name", firstName],
    ["Last name", lastName],
    ["Email", email],
    ["News & updates", newsletter],
    ["Phone", textOrDash(phone)],
    ["Country", textOrDash(country)],
    ["Address line 1", addressLine1],
    ["Address line 2", textOrDash(addressLine2)],
    ["City", city],
    ["State", state],
    ["ZIP", zip],
    ["About project", aboutProject],
    ["Scope", scope],
    ["Team", team],
    ["Budget", budget],
    ["Timeline", timeline],
    ["How they heard about us", referral],
  ];

  const htmlRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;border:1px solid #e5ded6;font-weight:600;vertical-align:top;width:200px;">${esc(k)}</td><td style="padding:8px 12px;border:1px solid #e5ded6;white-space:pre-wrap;">${esc(v)}</td></tr>`,
    )
    .join("");

  const plain = rows.map(([k, v]) => `${k}: ${v}`).join("\n\n");

  const attachments: Array<{ filename: string; content: Buffer; contentType?: string }> = [];
  const rawFiles = formData.getAll("projectFiles");
  let fileCount = 0;

  for (const entry of rawFiles) {
    if (!(entry instanceof File) || entry.size === 0) continue;
    if (fileCount >= MAX_FILES) break;
    if (entry.size > MAX_FILE_BYTES) {
      throw new Error(
        `Each file must be under ${Math.floor(MAX_FILE_BYTES / (1024 * 1024))} MB. Please remove or compress larger files and try again.`,
      );
    }
    const buf = Buffer.from(await entry.arrayBuffer());
    const safeName = entry.name.replace(/[^\w.\-()+ ]/g, "_").slice(0, 180) || "attachment";
    attachments.push({
      filename: safeName,
      content: buf,
      contentType: entry.type || undefined,
    });
    fileCount += 1;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST?.trim() || "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT?.trim() || "587"),
    secure: process.env.SMTP_SECURE === "true",
    auth: { user: smtpUser, pass: smtpPass },
  });

  await transporter.sendMail({
    from,
    to,
    replyTo: email || undefined,
    subject: `New consultation inquiry — ${firstName} ${lastName}`.slice(0, 200),
    text: plain,
    html: `<p style="font-family:system-ui,sans-serif;font-size:15px;color:#2f2722;">New inquiry from the website consultation form.</p>
<table style="border-collapse:collapse;font-family:system-ui,sans-serif;font-size:14px;color:#2f2722;max-width:720px;">${htmlRows}</table>`,
    attachments,
  });
}
