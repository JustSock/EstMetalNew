import React from 'react';
import review1 from './imgs/review1.png';
import review2 from './imgs/review2.png';
import review3 from './imgs/review3.png';

const Testimonials = () => {
  return (
    <section id="reviews" className="testimonials">
      <h2 className="section-title">Отзывы клиентов</h2>
      <div className="testimonial-cover">
        <div className="testimonial">
          <img className="testimonial-img" src={review1}/>
          <div className="testimonial-review">
            <h4 className="testimonial-header">Петров василий</h4>        
            <p className="testimonial-text">Обработка металла — это ключевой процесс в производстве, который требует высокой точности и профессионализма. Отличная работа, качественная обработка и соблюдение сроков. Рекомендую!</p>
          </div>
        </div>
        <div className="testimonial">
          <img className="testimonial-img" src={review2}/>
          <div className="testimonial-review">
            <h4 className="testimonial-header">Ершов Евгений</h4>        
            <p className="testimonial-text">Обратился в компанию для заказа металла на индивидуальные требования. Профессиональный подход, отличное качество материалов и соблюдение сроков. Рекомендую для серьёзных проектов!</p>
          </div>
        </div>
        <div className="testimonial">
          <img className="testimonial-img" src={review3}/>
          <div className="testimonial-review">
            <h4 className="testimonial-header">Спицын Кирилл</h4>        
            <p className="testimonial-text">Отличная работа, качественная обработка и соблюдение сроков. Всё понравилось, обязательно обращусь ещё раз! Рекомендую!</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;