import React from 'react';

const SubscribeButton = () => {
    const handleSubscribe = () => {
        alert('Thank you for subscribing to the channel!');
    };

    return (
        <button onClick={handleSubscribe} className="subscribe-button">
            Subscribe
        </button>
    );
};

export default SubscribeButton;