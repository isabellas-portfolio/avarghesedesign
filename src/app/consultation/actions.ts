"use server";

import { sendConsultationEmail } from "@/lib/send-consultation-email";

export type ConsultationFormState = {
  ok: boolean;
  message: string;
};

export async function submitConsultation(
  _prevState: ConsultationFormState,
  formData: FormData,
): Promise<ConsultationFormState> {
  try {
    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();

    if (!firstName || !lastName || !email) {
      return { ok: false, message: "Please fill in first name, last name, and email." };
    }

    await sendConsultationEmail(formData);

    return {
      ok: true,
      message: "Thank you — your inquiry was sent. We will be in touch soon.",
    };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Something went wrong. Please try again or email us directly.";
    return { ok: false, message };
  }
}
