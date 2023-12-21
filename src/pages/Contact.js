// ContactForm.js
import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Contact.css';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle the form data (e.g., send it to a server)
  };

  return (
    <div className="contact-form-container">
        <div className="contact-form">
          <form onSubmit={handleSubmit(onSubmit)} className="form-section">
            {/* Form fields */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
              />
              {errors.name && (
                <p className="error-message">{errors.name.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Please enter a valid email address',
                  },
                })}
              />
              {errors.email && (
                <p className="error-message">{errors.email.message}</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
              />
              {errors.message && (
                <p className="error-message">{errors.message.message}</p>
              )}
            </div>

            <button type="submit">Submit</button>
          </form>

          {/* Text section on the right */}
          <div className="contact-info">
            <p>
              Feel free to contact me if you have any questions or if you want
              to talk!
            </p>
            <p>Email: your.email@example.com</p>
            <p>Contact: +1 123-456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
        </div>
    </div>

  );
};

export default ContactForm;
