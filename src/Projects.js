import React from 'react';
import one from "../src/images/one.png"
import two from "../src/images/two.png"
import three from "../src/images/three.png"
import four from "../src/images/four.png"
import five from "../src/images/five.png"
import six from "../src/images/six.png"
import Project from './Project';


const projectData =[
    {
        name:"Hungry Monsters",
        image:one,

    },
    {
        name:"Volunteer Network",
        image:two,

    },
    {
        name:"The Spinning Wheels",
        image:three,

    },
    {
        name:"Budget Foods",
        image:four,

    },
    {
        name:"Legal Litigation",
        image:five,

    },
    {
        name:"Fancy Floss",
        image:six,

    },
]

const Projects = () => {
    return (
        
         <div className="bg-dark text-white w-100">
         <div className="text-center">
             <h3  style={{color:'#14D1D2'}}>My Recent Projects </h3>
         </div>
         <div className="d-flex justify-content-center">
             <div className="w-75 row mb-5">
             {
                    projectData.map(project => <Project project={project}></Project>)
                }
             </div>
         </div>
     </div>
    );
};

export default Projects;