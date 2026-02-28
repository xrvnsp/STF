import React from 'react';
import Logo from './Logo';
import Button from './Button';
import { ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="container nav-container">
                <a href="/" className="nav-logo">
                    <Logo w={180} h={60} />
                </a>

                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#about">About</a>
                </nav>

                <div className="nav-actions">
                    <Button icon={<ShoppingBag />}>Order Now</Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
