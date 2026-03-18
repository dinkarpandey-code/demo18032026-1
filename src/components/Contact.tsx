import { useState, FormEvent } from 'react';
import { ContactInfo, ContactFormData } from '../types';
import './Contact.css';

interface ContactProps {
  contactInfo: ContactInfo;
}

function Contact({ contactInfo }: ContactProps) {
  const [form, setForm] = useState<ContactFormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Partial<ContactFormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<ContactFormData> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Invalid email format';
    if (!form.subject.trim()) newErrors.subject = 'Subject is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="contact">
        <h2 className="section-title">Contact</h2>
        <div className="success-message" role="alert">
          <p>Thank you for your message! I'll get back to you soon.</p>
          <button onClick={() => setSubmitted(false)}>Send another message</button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-links">
        <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={contactInfo.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
      <form onSubmit={handleSubmit} className="contact-form" noValidate>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-invalid={!!errors.name} />
          {errors.name && <span className="error" role="alert">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-invalid={!!errors.email} />
          {errors.email && <span className="error" role="alert">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} aria-invalid={!!errors.subject} />
          {errors.subject && <span className="error" role="alert">{errors.subject}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} aria-invalid={!!errors.message} />
          {errors.message && <span className="error" role="alert">{errors.message}</span>}
        </div>
        <button type="submit" className="submit-btn">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
