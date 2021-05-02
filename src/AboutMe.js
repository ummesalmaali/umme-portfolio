import React from 'react';
import second from "../src/images/second.jpg"
const AboutMe = () => {
    return (
        <div className="bg-dark text-white row">
            <div className="col-md-6">
            <h1 >About Me</h1>
            <h3>Myself Umme Salma Ali, a front end web-developer. I am Technology lover. I like to explore new technologies</h3>
            </div>
            <div className="col-md-5 mr-5">
                <img src={second} alt=""/>
            </div>
        </div>
    );
};

export default AboutMe;