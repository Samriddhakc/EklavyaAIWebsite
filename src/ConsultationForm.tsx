import React, { useState, ChangeEvent, FormEvent } from 'react';
import './ConsultationForm.css'

interface ConsultationFormProps {
  onClose: () => void;
}

interface FormData {
  companyName: string;
  contactPerson: string;
  email: string;
  phone: string;
  message: string;
}

export default function ConsultationForm({ onClose }: ConsultationFormProps) {
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        {!isSubmitted ? (
          <>
            <h2>Request a Consultation</h2>
            <form onSubmit={handleSubmit}>
              <label>
                Company Name:
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Contact Person:
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </label>
              <label>
                Phone:
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </label>
              <label>
                Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />
              </label>
              <div className="form-buttons">
                <button type="submit">Submit</button>
                <button type="button" onClick={onClose}>Cancel</button>
              </div>
            </form>
          </>
        ) : (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your form has been submitted successfully. We will reach out to your email shortly.</p>
            <button onClick={onClose}>Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
