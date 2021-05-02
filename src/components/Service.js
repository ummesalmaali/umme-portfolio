import React from 'react';

const Service = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img style={{height:'200px',width:'300px',borderRadius:'10px'}} src={service.image} alt=""/>
            <h4>{service.name}</h4>
        </div>
    );
};

export default Service;