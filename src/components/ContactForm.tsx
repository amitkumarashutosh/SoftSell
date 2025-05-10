import React, { useState, type ChangeEvent, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  company: string;
  license: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    company: "",
    license: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Form submitted! (frontend only)");
  };

  return (
    <section className="py-16 text-center bg-blue-50 px-4 md:px-8 dark:bg-gray-600">
      <h2 className="text-3xl font-bold mb-10 dark:text-white">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 ">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-white"
          required
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-white"
          required
        />
        <input
          name="company"
          type="text"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-white"
        />
        <select
          name="license"
          value={form.license}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-white"
          required
        >
          <option value="">Select License Type</option>
          <option>Windows</option>
          <option>Office</option>
          <option>Adobe</option>
          <option>Others</option>
        </select>
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-white"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
