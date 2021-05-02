import React from 'react';
import Service from './components/Service';
import html from "../src/images/html.png"
import full from "../src/images/full.jpg"
import redesign from "../src/images/redesign.png"
import landing from "../src/images/landing.png"
import email from "../src/images/email.jpg"
import wordpress from "../src/images/wordpress.jpg"


const serviceData = [
    {
        name:'PSD TO HTML',
        image: html
    },
    {
        name:'Website Redesign ',
        image:redesign
    },
    {
        name:'Landing Page Redesign',
        image:landing
    },
    {
        name:'Email Template Design',
        image:email
    },
    {
        name:'Wordpress Customization',
        image:wordpress
    },
    {
        name:'Full Stack Website Development',
        image:full
    }
]
const Services = () => {


    return (
        <div className="bg-dark text-white w-100">
            <div className="text-center">
                <h4 className="mt-5" style={{color:'#14D1D2'}}>Services I Provide </h4>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 mb-5">
                    {
                        serviceData.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;