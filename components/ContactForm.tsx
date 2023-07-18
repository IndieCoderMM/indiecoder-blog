'use client';

import { useForm, ValidationError } from '@formspree/react';

const FORM_ID = process.env.NEXT_PUBLIC_FORM_ID || 'myformid';

const ContactForm = () => {
  const [state, handleSubmit] = useForm(FORM_ID);
  return (
    <form onSubmit={handleSubmit} className="grid gap-3 mt-3">
      {state.succeeded && (
        <p className="text-sm bg-green-200 text-green-800 rounded-sm p-2">
          <strong>Message Sent! 💌</strong>
          <p className="text-xs">
            Thanks for reaching out to me! 😃 Your message has made its way to
            my inbox, and I can't wait to read it.
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
            placeholder="Write your message here..."
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
      <div className="flex flex-col md:flex-row gap-3">
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
          placeholder="Enter your email"
        />
        <button
          type="submit"
          className="primaryBtn"
          disabled={state.submitting}
        >
          Send Message
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
