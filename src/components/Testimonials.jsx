import React from 'react';
import './Testimonials.css';

const reviews = [
    {
        id: 1,
        name: "Karthik R.",
        rating: 5,
        comment: "சுவை மிகவும் அருமையாக உள்ளது. நிஜமாகவே வீட்டில் செய்த மணம்! (Taste is very wonderful. Genuinely smells like homemade!)"
    },
    {
        id: 2,
        name: "Lakshmi S.",
        rating: 5,
        comment: "இட்லி பொடி காரம் மற்றும் சுவை பெர்பெக்ட்டாக இருக்கிறது. அடிக்கடி வாங்குவேன். (Idli podi spice and taste are perfect. I will buy frequently.)"
    },
    {
        id: 3,
        name: "Ramesh Kannan",
        rating: 5,
        comment: "சுயமான தரத்துடன், சுத்தமாகவும், சுகாதாரமாகவும் கொடுக்கிறார்கள். மிகவும் சிறப்பு! (They provide with good quality, cleanly and hygienically. Very excellent!)"
    },
    {
        id: 4,
        name: "Priya V.",
        rating: 5,
        comment: "வாழைக்காய் சிப்ஸ் மற்றும் முறுக்கு மிகவும் மொறுமொறுப்பாக இருந்தது. அனைவருக்கும் பிடித்தது. (Banana chips and murukku were very crispy. Everyone liked it.)"
    },
    {
        id: 5,
        name: "Muthu Kumar",
        rating: 5,
        comment: "கலப்படமில்லாத சுவை. உண்மையான தென்னிந்திய மணத்தோடு உள்ளது. (Unadulterated taste. With authentic South Indian aroma.)"
    },
    {
        id: 6,
        name: "Saravanan T.",
        rating: 5,
        comment: "ரிப்பன் பக்கோடா அருமை! குழந்தைகள் விரும்பி சாப்பிட்டார்கள். (Ribbon pakoda is wonderful! Kids loved eating it.)"
    },
    {
        id: 7,
        name: "Anitha M.",
        rating: 5,
        comment: "பேக்கிங் மிகவும் பாதுகாப்பாக இருந்தது. தரம் மிகச் சிறப்பு. (Packaging was very safe. Quality is very excellent.)"
    }
];

export default function Testimonials() {
    return (
        <section className="testimonials section bg-main">
            <div className="container">
                <div className="section-header text-center">
                    <span className="title-decorator">Happy Customers</span>
                    <h2>வாடிக்கையாளர் மதிப்புரைகள் (Reviews)</h2>
                    <p className="subtitle">See what our customers have to say about our authentic home-made taste.</p>
                </div>

                <div className="testimonials-container">
                    <div className="testimonials-scroll">
                        {reviews.map((review) => (
                            <div key={review.id} className="testimonial-card">
                                <div className="stars">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FFD700" width="20" height="20">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    ))}
                                </div>
                                <p className="testimonial-comment">"{review.comment}"</p>
                                <div className="testimonial-author">- {review.name}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
