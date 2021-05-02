import React from 'react';

import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <h1>Web Development and Website Promotions </h1>
                <Typed className="typed-text"
                strings={["Web Developer", "Programmer", "Banker", "Digital Marketer"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                ></Typed>
                <a href="#" className="btn-main-offer">Contact Me</a>
            </div>
        </div>
    );
};

export default Header;