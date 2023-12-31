"use client";

import { useForm, ValidationError } from "@formspree/react";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID || "myformid";

const ContactForm = () => {
  const [state, handleSubmit] = useForm(FORM_ID);
  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-3 grid w-full max-w-3xl gap-3"
    >
      {state.succeeded && (
        <p className="rounded-sm bg-green-200 p-2 text-sm text-green-800">
          <strong>Message Sent! 💌</strong>
          <p className="text-xs">
            Thanks for reaching out to me! 😃 Your message has made its way to
            my inbox, and I can&apos;t wait to read it.
          </p>
        </p>
      )}
      <div>
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <div>
          <input
            type="text"
            name="message"
            id="message"
            required
            placeholder="Write your message here"
            className="inputField"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-xs text-rose-600"
          />
        </div>
      </div>
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="text-xs text-rose-600"
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="email-address" className="sr-only">
          Email address
        </label>
        <input
          id="email-address"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="inputField"
          placeholder="Enter your email address"
        />
        <button
          type="submit"
          className="submitBtn items-base flex justify-center gap-2"
          disabled={state.submitting}
        >
          Send
          <PaperAirplaneIcon className="h-6 w-6 -rotate-45" />
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
