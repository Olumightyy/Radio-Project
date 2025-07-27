import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Name required";
    if (!form.email) errs.email = "Email required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.message) errs.message = "Message required";
    return errs;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      // send form data to backend here
    }
  };

  if (submitted) {
    return <div className="text-green-600">Thank you for contacting us!</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="name" className="block font-medium">Name</label>
        <input
          id="name"
          type="text"
          className="w-full rounded border px-2 py-1"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
          aria-invalid={!!errors.name}
          aria-describedby="name-error"
          required
        />
        {errors.name && <span id="name-error" className="text-red-600">{errors.name}</span>}
      </div>
      <div>
        <label htmlFor="email" className="block font-medium">Email</label>
        <input
          id="email"
          type="email"
          className="w-full rounded border px-2 py-1"
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
          required
        />
        {errors.email && <span id="email-error" className="text-red-600">{errors.email}</span>}
      </div>
      <div>
        <label htmlFor="message" className="block font-medium">Message</label>
        <textarea
          id="message"
          className="w-full rounded border px-2 py-1"
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
          required
        />
        {errors.message && <span id="message-error" className="text-red-600">{errors.message}</span>}
      </div>
      <button type="submit" className="bg-primary text-white px-4 py-2 rounded">Send</button>
    </form>
  );
};

export default ContactForm;
