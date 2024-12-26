import React from 'react';
import product1 from './imgs/product1.jpg';
import product2 from './imgs/product2.png';
import product3 from './imgs/product3.png';
import product4 from './imgs/product4.png';
import product5 from './imgs/product5.png';
import product6 from './imgs/product6.png';

const ProductGallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Галерея продукции</h2>
      <div className="gallery-cover">
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product2}/>
        <img className="gallery-item" src={product3}/>
        <img className="gallery-item" src={product4}/>
        <img className="gallery-item" src={product5}/>
        <img className="gallery-item" src={product6}/>
      </div>
    </section>
  );
};

export default ProductGallery;