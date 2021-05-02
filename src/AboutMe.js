import React from 'react';
import second from "../src/images/second.jpg"
const AboutMe = () => {
    return (
        <div className="bg-dark text-white row">
            <div className="col-md-6">
            <h1 >About Me</h1>
            <h3>Hey, I'm Umme Salma Ali</h3>
            <h4>I am a web developer Specializing in Front End Development. Experienced with different approaches to the development of dynamic web projects. Well-versed in numerous programming languages and libraries including HTML5, CSS, JavaScript, ReactJS, NodeJS, MongoDB, etc. Strong background in project management and customer relations</h4>
              <div className="mt-5">
              <a href="https://drive.google.com/file/d/1BJ8lqviIDiq6N-Jm8JRjZE_tGP6o2ItC/view?usp=sharing" target="_blank" className="btn-main-offer" download>Download CV</a>

              </div>
            </div>
            <div className="col-md-6">
                <img style={{width:"300px"}} className="ml-5" src={second} alt=""/>
            </div>
        </div>
    );
};

export default AboutMe;