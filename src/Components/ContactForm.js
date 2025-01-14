import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Имя: ${formData.name}, Email: ${formData.email}, Сообщение: ${formData.message}`);
    e.target.reset();
  };

  return (
    <section id="feedback" className="contact">
      <div className="contact-cover">
        <h2 className="section-title">Оставить отзыв</h2>
        <form onSubmit={handleSubmit} className="form">
          <input 
            type="text" 
            placeholder="Ваше имя" 
            required 
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          />
          <input 
            type="email" 
            placeholder="Ваш email" 
            required          
            onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          />
          <textarea 
            placeholder="Ваше сообщение" 
            required 
            onChange={(e) => setFormData({ ...formData, message: e.target.value })} 
          />
          <button type="submit" className='FormButton'>Отправить</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
