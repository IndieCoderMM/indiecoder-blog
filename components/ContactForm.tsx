const ContactForm = () => {
  return (
    <div>
      <div>
        <label htmlFor="message-input" className="sr-only">
          Message
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="message-input"
            id="message-input"
            required
            placeholder="Write your message here..."
            className="inputField"
          />
        </div>
      </div>
      <div className="mt-3 flex flex-col md:flex-row gap-3">
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
        <button type="submit" className="primaryBtn">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
