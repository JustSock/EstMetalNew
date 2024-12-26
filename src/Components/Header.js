import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">Естьметалл</h1>
      <nav>
        <ul className="nav-list">
          <li><a href="#services">Услуги</a></li>
          <li><a href="#gallery">Продукция</a></li>
          <li><a href="#order">Заказ</a></li>
          <li><a href="#feedback">Обратная связь</a></li>          
          <li><a href="#reviews">Отзывы</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;