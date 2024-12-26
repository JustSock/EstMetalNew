import React from 'react';
import product1 from './imgs/product1.jpg';

const ProductGallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2 className="section-title">Галерея продукции</h2>
      <div className="gallery-cover">
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product1}/>
        <img className="gallery-item" src={product1}/>
      </div>
    </section>
  );
};

export default ProductGallery;