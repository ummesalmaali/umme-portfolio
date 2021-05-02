import React from 'react';

const Project = ({project}) => {
    return (
        
            <div className="col-md-4 text-center">
                <img style={{height:'300px',width:'350px',borderRadius:'10px',padding:'5px'}} src={project.image} alt=""/>
                <h4>{project.name}</h4>
                
            </div>
      
    );
};

export default Project;