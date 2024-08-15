import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    openWhatsApp = () => {
        const phoneNumber = '9810314220'; // WhatsApp number in international format without '+' or spaces
        const message = encodeURIComponent('Hello, I am interested in your product.');
        const url = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(url, '_blank');
    };

    render() {
        const { image, rating, description, deliveryTime, originalPrice, discountedPrice, dis } = this.props;
        return (
            <div className="card">
                <div className="card-image">
                    <img src={image} alt={description} />
                </div>
                <div className="card-details">
                    <h3>{description}</h3>
                    {/* <div className="rating">
                        <span className="star">★</span> <p>{rating}</p>
                    </div> */}
                    <p>⚡ {deliveryTime}</p>
                    <div className="price">
                        <span>
                            <span className="original-price">₹ {originalPrice}</span><br />
                            <span className="discounted-price">₹ {discountedPrice}</span>
                        </span>
                        <div>
                            <button className="shop-now-button" onClick={this.openWhatsApp}>SHOP NOW</button>
                        </div>

                    </div>
                    <span>{dis}</span>

                </div>
            </div>
        );
    }
}
