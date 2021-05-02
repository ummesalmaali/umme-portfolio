import './App.css';
import Particles from "react-particles-js"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from './components/NavBar';
import Header from './Header';
import AboutMe from './AboutMe';
import Contact from './Contact';
import Services from './Services';
import Blogs from './components/Blogs';
import Projects from './Projects';

function App() {
  return (
    <div>
       <Particles
      className="particles-canvas"
      params={{
        particles:{
          number:{
            value:30,
            density:{
              enable:true,
              value_area:900
            }
          },
          shape:{
            type:"star",
            stroke:{
              width:6,
              color:"#f9ab00"
            }
          }
        }
      }}
      />
     <NavBar></NavBar>
     <Header></Header>
     <AboutMe></AboutMe>
     <Services></Services>
     <Blogs></Blogs>
     <Projects></Projects>
     <Contact></Contact>
    </div>
  );
}

export default App;
