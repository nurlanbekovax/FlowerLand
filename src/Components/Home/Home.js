import React from 'react';
import { FiArrowRight } from 'react-icons/fi';
import "./Home.css";

// Use React.forwardRef to forward refs to the component
const Home = React.forwardRef((props, ref) => {
    return (
        // Attach the forwarded ref to the root element of the component
        <div className="home-container" ref={ref}> 
            <div className="home-text-section">
                <h1 className="primary-heading">
                    FlowerLand
                </h1>
                <h1 className="primary-text1">
                Flower is our a manifestation of love.
                </h1>
                <h1 className="primary-text2">
                Welcome to our world where flowers speak the language of love!
                </h1>
                <p className="primary-down-text">
                Buy flowers here and now
                </p>
                <button className="secondary-button">
                    Buy Now <FiArrowRight />
                </button>
            </div>
        </div>
    );
});

export default Home;
