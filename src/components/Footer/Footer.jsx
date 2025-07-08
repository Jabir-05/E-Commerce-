import React from "react";
import "./Footer.scss";
import {FaLocationArrow,FaMobileAlt,FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
    return <footer className="footer">
        <div className="footer-content">
            <div className="col">
                <div className="title">About</div>
                <div className="text">Voluptatem accusantium doloreque laudantium, totam rem aperiam, eque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo eaque ipsa quae ab illo</div>
            </div>
            <div className="col"><div className="title">Contact</div>
            <div className="c-item">
                <FaLocationArrow/>
                <div className="text">
                    Amity University Greater Noida ,119876
                </div>
            </div>
            <div className="c-item">
                <FaMobileAlt/>
                <div className="text">
                    Phone No:- 125 416 729 38
                </div>
            </div>
            <div className="c-item">
                <FaEnvelope/>
                <div className="text">
                    Email :- jnhbh@gmail.com
                </div>
            </div>
            </div>
            <div className="col"><div className="title">Categories</div>
     <span className="text">Headphones</span>
     <span className="text">Smart Watches</span>
     <span className="text"> Bluetooth Speakers</span>
     <span className="text">Wireless Earbuds</span>
     <span className="text">Home Threatre</span>
     <span className="text">Projectors</span>
     
            </div>
            <div className="col"><div className="title">Pages</div>
             <span className="text">Home</span>
             <span className="text">About</span>
             <span className="text">Privacy</span>
             <span className="text">Returns</span>
             <span className="text">Terms & Conditions</span>
             <span className="text">Contact Us</span>
            </div>
        </div>
        <div className="bottom-bar">
            <div className="bottom-bar-content">
                <div className="text">
                    MyZenmart 2025 CREATED BY JABIR IMTEYAZ 
                </div>
                <img src={Payment} alt="" />
            </div>
        </div>
    </footer>
};

export default Footer;
