import React from 'react';
import Header from './Components/Header';
import HeroSection from './Components/HeroSection';
import Services from './Components/Services';
import ProductGallery from './Components/ProductGallery';
import ContactForm from './Components/ContactForm';
import OrderForm from './Components/OrderForm';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <Services />
      <ProductGallery />
      <OrderForm />
      <ContactForm />      
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
