"use client";

import type { ReactNode } from "react";
import { useActionState, useEffect, useRef } from "react";
import Link from "next/link";
import { submitConsultation, type ConsultationFormState } from "./actions";

const field =
  "w-full rounded-xl border border-[var(--line)] bg-[var(--bg)] px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--accent)] disabled:opacity-60";

const labelBase = "mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--ink-soft)]";

function Req({ children }: { children: ReactNode }) {
  return (
    <>
      {children}{" "}
      <span className="text-[10px] font-normal normal-case tracking-normal text-[var(--accent)]">(required)</span>
    </>
  );
}

const US_STATES = [
  "AL",
  "AK",
  "AZ",
  "AR",
  "CA",
  "CO",
  "CT",
  "DE",
  "FL",
  "GA",
  "HI",
  "ID",
  "IL",
  "IN",
  "IA",
  "KS",
  "KY",
  "LA",
  "ME",
  "MD",
  "MA",
  "MI",
  "MN",
  "MS",
  "MO",
  "MT",
  "NE",
  "NV",
  "NH",
  "NJ",
  "NM",
  "NY",
  "NC",
  "ND",
  "OH",
  "OK",
  "OR",
  "PA",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VT",
  "VA",
  "WA",
  "WV",
  "WI",
  "WY",
  "DC",
] as const;

const emptyState: ConsultationFormState = { ok: false, message: "" };

export function ConsultationForm() {
  const [state, formAction, isPending] = useActionState(submitConsultation, emptyState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.ok) {
      formRef.current?.reset();
    }
  }, [state.ok]);

  return (
    <form
      ref={formRef}
      action={formAction}
      encType="multipart/form-data"
      className="space-y-6"
    >
      {state.message ? (
        <p
          role="status"
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.ok
              ? "border-[var(--evergreen)]/40 bg-[var(--evergreen)]/10 text-[var(--evergreen)]"
              : "border-[var(--accent)]/40 bg-[var(--accent)]/10 text-[var(--accent)]"
          }`}
        >
          {state.message}
        </p>
      ) : null}

      <fieldset className="space-y-4 border-0 p-0">
        <legend className={`${labelBase} mb-4`}>Name</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className={labelBase}>
              <Req>First Name</Req>
            </span>
            <input name="firstName" type="text" autoComplete="given-name" required className={field} disabled={isPending} />
          </label>
          <label className="block">
            <span className={labelBase}>
              <Req>Last Name</Req>
            </span>
            <input name="lastName" type="text" autoComplete="family-name" required className={field} disabled={isPending} />
          </label>
        </div>
      </fieldset>

      <label className="block">
        <span className={labelBase}>
          <Req>Email</Req>
        </span>
        <input name="email" type="email" autoComplete="email" required className={field} disabled={isPending} />
      </label>

      <label className="flex cursor-pointer items-start gap-3 pt-1">
        <input
          name="newsletter"
          type="checkbox"
          value="yes"
          className="mt-1 size-4 rounded border-[var(--line)] text-[var(--accent)] focus:ring-[var(--accent)]"
          disabled={isPending}
        />
        <span className="text-sm leading-snug text-[var(--ink)]">Sign up for news and updates</span>
      </label>

      <label className="block">
        <span className={labelBase}>Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} disabled={isPending} />
      </label>

      <fieldset className="space-y-4 border-0 border-t border-[var(--line)] pt-8">
        <legend className={`${labelBase} mb-2 text-[var(--ink)]`}>Project Address</legend>

        <label className="block">
          <span className={labelBase}>Country</span>
          <select name="country" autoComplete="country-name" className={field} disabled={isPending}>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="Other">Other</option>
          </select>
        </label>

        <label className="block">
          <span className={labelBase}>
            <Req>Address Line 1</Req>
          </span>
          <input name="addressLine1" type="text" autoComplete="address-line1" required className={field} disabled={isPending} />
        </label>

        <label className="block">
          <span className={labelBase}>Address Line 2</span>
          <input name="addressLine2" type="text" autoComplete="address-line2" className={field} disabled={isPending} />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block sm:col-span-2">
            <span className={labelBase}>
              <Req>City</Req>
            </span>
            <input name="city" type="text" autoComplete="address-level2" required className={field} disabled={isPending} />
          </label>
          <label className="block">
            <span className={labelBase}>
              <Req>State</Req>
            </span>
            <select name="state" autoComplete="address-level1" required className={field} disabled={isPending}>
              <option value="">Select state</option>
              {US_STATES.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </label>
          <label className="block">
            <span className={labelBase}>
              <Req>ZIP Code</Req>
            </span>
            <input
              name="zip"
              type="text"
              inputMode="numeric"
              autoComplete="postal-code"
              required
              className={field}
              pattern="[0-9]{5}(-[0-9]{4})?"
              title="ZIP code (e.g. 02118 or 02118-1234)"
              disabled={isPending}
            />
          </label>
        </div>
      </fieldset>

      <label className="block">
        <span className={labelBase}>
          <Req>Tell Me About Your Project</Req>
        </span>
        <textarea name="aboutProject" rows={5} required className={field} disabled={isPending} />
      </label>

      <label className="block">
        <span className={labelBase}>
          <Req>Scope</Req>
        </span>
        <textarea
          name="scope"
          rows={3}
          required
          className={field}
          placeholder="Square footage, new build, or renovation/addition"
          disabled={isPending}
        />
      </label>

      <label className="block">
        <span className={labelBase}>
          <Req>Team</Req>
        </span>
        <input name="team" type="text" required className={field} placeholder="Architect, Builder" disabled={isPending} />
      </label>

      <label className="block">
        <span className={labelBase}>
          <Req>Budget</Req>
        </span>
        <select name="budget" required className={field} disabled={isPending}>
          <option value="">Select a range</option>
          <option value="under-50k">Under $50,000</option>
          <option value="50k-100k">$50,000 – $100,000</option>
          <option value="100k-200k">$100,000 – $200,000</option>
          <option value="200k-400k">$200,000 – $400,000</option>
          <option value="400k-plus">$400,000+</option>
          <option value="discuss">Prefer to discuss</option>
        </select>
      </label>

      <label className="block">
        <span className={labelBase}>
          <Req>Timeline</Req>
        </span>
        <select name="timeline" required className={field} disabled={isPending}>
          <option value="">Select timeline</option>
          <option value="asap">As soon as possible</option>
          <option value="1-3-months">1 – 3 months</option>
          <option value="3-6-months">3 – 6 months</option>
          <option value="6-12-months">6 – 12 months</option>
          <option value="12-plus">12+ months</option>
          <option value="planning">Still planning / flexible</option>
        </select>
      </label>

      <div className="space-y-3">
        <div>
          <span className={labelBase}>Project Files</span>
          <p className="text-sm text-[var(--ink-soft)]">Floor plans, photos of the space, etc</p>
        </div>
        <label className="inline-flex cursor-pointer items-center justify-center rounded-full border border-[var(--line-strong)] bg-[var(--bg)] px-5 py-2.5 text-xs uppercase tracking-[0.16em] text-[var(--ink)] transition-colors hover:bg-[var(--evergreen)] hover:text-[var(--bg)] has-[:disabled]:pointer-events-none has-[:disabled]:opacity-50">
          <span>Add a File</span>
          <input name="projectFiles" type="file" multiple accept="image/*,.pdf,.dwg" className="sr-only" disabled={isPending} />
        </label>
        <p className="text-xs text-[var(--ink-soft)]">Up to 6 files, 12 MB each. PDF, images, or drawings.</p>
      </div>

      <label className="block">
        <span className={labelBase}>How did you hear about us?</span>
        <select name="referralSource" className={field} disabled={isPending}>
          <option value="">Select an option</option>
          <option value="friends-family">Friends / family</option>
          <option value="instagram">Instagram</option>
          <option value="facebook">Facebook</option>
          <option value="other">Other</option>
        </select>
      </label>

      <button
        type="submit"
        disabled={isPending}
        className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-xs uppercase tracking-[0.15em] text-[var(--bg)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#6b1a18] disabled:translate-y-0 disabled:opacity-60"
      >
        {isPending ? "Sending…" : "Submit"}
      </button>

      <p className="text-xs text-[var(--ink-soft)]">
        Prefer email? Reach us directly at{" "}
        <Link href="mailto:AVargheseDesign@gmail.com" className="text-[var(--accent)]">
          AVargheseDesign@gmail.com
        </Link>
      </p>
    </form>
  );
}
