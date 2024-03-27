import React from "react";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
    return (
    <div className="nome-container">
        <Navbar />
            <div className="home-text-section">
                <h1 className="primary-heading">
                    FlowerLand
                </h1>
                <h1 className="primary-text1">
                Flower is our a manifestation of love!
                </h1>
                <h1 className="primary-text2">
                Welcome to our world where flowers speak the language of love!
                </h1>
                <p className="primary-down-text">
                Buy flowers here and now
                </p>
                <button className="secondary-button">
                    Buy Now <FiArrowRight />{" "}
                </button>
            </div>
    </div>
    );
};

export default Home;