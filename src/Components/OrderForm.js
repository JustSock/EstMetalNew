import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({ metalType: '', quantity: '', contact: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Тип металла: ${formData.metalType}, Количество: ${formData.quantity}, Контакт: ${formData.contact}`);
  };

  return (
    <section className="order">
      <h2 className="section-title">Форма заказа</h2>
      <form onSubmit={handleSubmit} className="form">
        <select 
          onChange={(e) => setFormData({ ...formData, metalType: e.target.value })} 
          required
        >
          <option value="">Выберите тип металла</option>
          <option value="сталь">Сталь</option>
          <option value="алюминий">Алюминий</option>
        </select>
        <input 
          type="number" 
          placeholder="Количество" 
          required 
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })} 
        />
        <input 
          type="text" 
          placeholder="Ваши контактные данные" 
          required 
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })} 
        />
        <button type="submit" className='FormButton'>Заказать</button>
      </form>
    </section>
  );
};

export default OrderForm;