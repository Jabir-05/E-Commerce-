import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text">Sign up for latest updates and offers</span>
                <div className="form">
                    <input type="email" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <div className="text">
                    Will be used in accordance with our Privacy Policy
                </div>
                <div className="social-icons">
                    <div className="icons">
                        <FaFacebookF size={14} />
                    </div>
                    <div className="icons">
                        <FaTwitter size={14} />
                    </div>
                    <div className="icons">
                        <FaInstagram size={14} />
                    </div>
                    <div className="icons">
                        <FaLinkedinIn size={14} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
