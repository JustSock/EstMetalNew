import React from 'react';
import cutImage from './imgs/Cut.jpg';
import delivImage from './imgs/delivery.jpg';
import manufacImage from './imgs/manufacturing.jpg';
const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className="section-title">Наши услуги</h2>
      <div className="services-cover">
        <div className="service">
          <img className='service-img' src={cutImage}/>
          <h3>Обработка металла</h3>
          <button className="service-button">Узнать больше</button>
        </div>
        <div className="service">
          <img className='service-img' src={delivImage}/>
          <h3>Доставка продукции</h3>
          <button className="service-button">Узнать больше</button>
        </div>
        <div className="service">
          <img className='service-img' src={manufacImage}/>
          <h3>Производство на заказ</h3>
          <button className="service-button">Узнать больше</button>
        </div>
      </div>
    </section>
  );
};

export default Services;