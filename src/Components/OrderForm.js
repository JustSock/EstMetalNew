import React, { useState } from 'react';

const OrderForm = () => {
  const [formData, setFormData] = useState({ metalType: '', quantity: '', contact: '' });

  const handleSubmit = (e) => {
    e.preventDefault();    
    alert(`Тип металла: ${formData.metalType}, Количество: ${formData.quantity}, Контакт: ${formData.contact}`);
    e.target.reset();
    setFormData({ metalType: '', quantity: '', contact: '' });
  };

  const checkAmount = (e)=>{
    if (+e.target.value>0 || !e.target.value){
      return true;
    }
    return false;
  }

  return (
    <section id="order" className="order">
      <div className="order-cover">
        <h2 className="section-title">Заказать металл</h2>
        <form onSubmit={handleSubmit} className="form">
          <select
            onChange={(e) => setFormData({ ...formData, metalType: e.target.value })}
            required
          >
            <option value="">Выберите тип металла</option>
            <option value="сталь">Сталь</option>
            <option value="алюминий">Алюминий</option>
            <option value="Жесть">Жесть</option>
            <option value="Цинк">Цинк</option>
          </select>
          <input
            type="number"
            placeholder="Количество, тн"
            required
            onChange={(e) => {
              if (!checkAmount(e)){
                return;
              }
              setFormData({ ...formData, quantity: e.target.value })                      
            }}
            value={formData.quantity}
          />
          <input
            type="tel"
            placeholder="Ваши контактные данные"
            required
            onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          />
          <button type="submit" className='FormButton'>Заказать</button>
        </form>
      </div>
    </section>
  );
};

export default OrderForm;