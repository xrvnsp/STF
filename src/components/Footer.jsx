import React from 'react';
import Logo from './Logo';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <Logo w={150} h={50} />
                    <p className="footer-desc">
                        Authentic homemade South Indian taste. FSSAI Approved & Hygienically prepared.
                    </p>
                    <div className="social-links">
                        <a href="#" className="social-link"><Instagram size={20} /></a>
                        <a href="#" className="social-link"><Facebook size={20} /></a>
                        <a href="#" className="social-link"><MessageCircle size={20} /></a>
                    </div>
                </div>

                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="#about">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <ul>
                        <li>WhatsApp: <strong>9884866985</strong></li>
                        <li>FSSAI NO: <strong>22425127000027</strong></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Sharmi Tasty Foods. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
