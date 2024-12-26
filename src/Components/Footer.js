import React from 'react';
import tg from './imgs/tg.png';
import vk from './imgs/vk.png';

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <div>
        <p>Контактная информация</p>
        <p><a style={{color: '#4DA1A9'}} href="mailto:andrei.usynin@urfu.ru">andrei.usynin@urfu.ru</a></p>
      </div>
      <div>
        <p>Социальные сети</p>
        <div className='footer-logo-cover'>
          <a href="https://google.com"><img className="footer-logo" src={tg}/></a>
          <a href="https://google.com"><img className="footer-logo" src={vk}/></a>
        </div>
      </div>      
    </footer>
  );
};

export default Footer;