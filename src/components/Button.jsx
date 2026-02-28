import React from 'react';
import { ShoppingCart } from 'lucide-react';
import './Button.css';

const Button = ({ children, variant = 'primary', className = '', icon, onClick }) => {
    return (
        <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
            {icon && <span className="btn-icon">{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
