import React from 'react';

import Typed from "react-typed";


const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="main-info">
                <canvas></canvas>
                <strong><h1>Web Design and Web Development </h1></strong>
                <Typed className="typed-text"
                strings={["Web Developer", "Programmer", "Banker"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                ></Typed>
                <a href="https://drive.google.com/file/d/1BJ8lqviIDiq6N-Jm8JRjZE_tGP6o2ItC/view?usp=sharing" target="_blank" className="btn-main-offer" download>Hire Me</a>
            </div>
        </div>
    );
};

export default Header;