import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import Carousel from './components/Carousel';
import Testimonials from './components/Testimonials';
import { ChefHat, Leaf, ShieldCheck, Heart } from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section id="home" className="hero section animate-fade-in">
          <div className="container hero-container">
            <div className="hero-content">
              <span className="title-decorator">Pure Homemade</span>
              <h1>Authentic South Indian Taste & Aroma</h1>
              <p>Experience the traditional flavors of our famously crafted Sharmi Idli Podi and other homemade specialties.</p>

              <div className="hero-actions">
                <Button variant="primary">Shop Products</Button>
                <Button variant="secondary">Contact on WhatsApp</Button>
              </div>
            </div>

            <div className="hero-carousel-wrapper animate-fade-in delay-1">
              <Carousel />
            </div>
          </div>
        </section>

        {/* Feature Highlights */}
        <section className="features section bg-white">
          <div className="container features-grid">
            <div className="feature-card animate-fade-in delay-1">
              <ShieldCheck className="feature-icon" color="#4AA96C" size={32} />
              <h3>FSSAI Approved</h3>
              <p>Certified hygiene and quality for your safety.</p>
            </div>
            <div className="feature-card animate-fade-in delay-2">
              <Heart className="feature-icon" color="#CC2936" size={32} />
              <h3>Handcrafted</h3>
              <p>Made with love in a traditional cottage industry setting.</p>
            </div>
            <div className="feature-card animate-fade-in delay-3">
              <Leaf className="feature-icon" color="#4AA96C" size={32} />
              <h3>Pure Ingredients</h3>
              <p>Perfect spice and aroma from fresh, authentic ingredients.</p>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section id="products" className="products section">
          <div className="container">
            <div className="section-header text-center">
              <span className="title-decorator">Our Flagship Product</span>
              <h2>Sharmi Idli Podi</h2>
              <p className="subtitle">This spicy, aromatic powder is the perfect accompaniment for your Idli and Dosa.</p>
            </div>

            <div className="product-details">
              <div className="product-box">
                <div className="product-mockup">
                  {/* CSS-based graphical placeholder for the product container jar */}
                  <div className="jar-mockup">
                    <div className="jar-cap"></div>
                    <div className="jar-body">
                      <div className="jar-label">
                        <div className="label-logo">❤ S</div>
                        <div className="label-text">இட்லி பொடி</div>
                      </div>
                      <div className="jar-powder"></div>
                    </div>
                  </div>
                </div>
                <div className="product-info">
                  <h3>Idli Podi (இட்லி பொடி)</h3>
                  <ul className="product-benefits">
                    <li><ShieldCheck size={18} color="#4AA96C" /> Authentic homemade with perfect spice & aroma 🌶️</li>
                    <li><ShieldCheck size={18} color="#4AA96C" /> FSSAI Approved (22425127000027)</li>
                    <li><ShieldCheck size={18} color="#4AA96C" /> Hygienically prepared</li>
                    <li><ShieldCheck size={18} color="#4AA96C" /> Traditional cottage industry (குடிசைத் தொழில்)</li>
                  </ul>
                  <Button variant="primary" className="mt-md" onClick={() => window.open('https://wa.me/919884866985', '_blank')}>
                    Order on WhatsApp: 9884866985
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />
    </div>
  );
}

export default App;
