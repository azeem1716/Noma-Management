import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    zip: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Additional submission logic here
  };

  return (
    <div>
 <div className="form-container">
      <form onSubmit={handleSubmit} className="custom-form">
        <div className="input-wrapper">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Your Name</label>
        </div>

        <div className="input-wrapper">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Email Address</label>
        </div>

        <div className="input-wrapper">
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Phone Number</label>
        </div>

        <div className="input-wrapper">
          <textarea
            name="zip"
            value={formData.zip}
            onChange={handleChange}
            required
            placeholder=" "
          />
          <label>Zip Code</label>
        </div>

        <button type="submit" className="form-button">Schedule Service</button>
      </form>
    </div>
    </div>
   
  );
};

export default Form;
