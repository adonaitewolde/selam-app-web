"use client";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xzzjoqoz");
  if (state.succeeded) {
    return (
      <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm font-medium text-white/80 shadow-lg backdrop-blur">
        <p className="text-lg font-semibold text-[#ffcc00]">
          Thanks, we&apos;ll reach out soon!
        </p>
        <p className="mt-2">
          You&apos;re on the waitlist and will hear from us as soon as selam is
          available.
        </p>
      </div>
    );
  }
  return (
    <div className="mx-auto mt-10 max-w-xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-orange-500/10 backdrop-blur sm:flex-row sm:items-center sm:p-7"
      >
        <div className="flex-1">
          <label
            htmlFor="email"
            className="block text-xs font-semibold uppercase tracking-[0.2em] text-white/70"
          >
            Your email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="name@example.com"
            className="mt-2 w-full rounded-full border border-white/10 bg-black/40 px-5 py-3 text-base text-white placeholder:text-white/40 outline-none transition focus:border-transparent focus:ring-2 focus:ring-[#ff9500]/80 sm:py-3.5"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="mt-2 text-sm text-[#ff3b30]"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#ff3b30] via-[#ff9500] to-[#ffcc00] px-8 py-3 text-base font-semibold text-black transition hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff9500]/80 disabled:cursor-not-allowed disabled:opacity-60 sm:self-end sm:px-9 sm:py-3.5"
        >
          {state.submitting ? "Sending..." : "Join the waitlist"}
        </button>
      </form>
    </div>
  );
}
