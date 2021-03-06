import './App.css';
import "./fixed.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Statistics from "./components/Statistics"
import Testimonial from "./components/testimonial";
import Contact from "./components/Contact";
import './bootstrap/dist/css/bootstrap.min.css';
import Particles from "react-particles-js";
/*============IMPORTING FONT AWESOME================ */


function App() {
  return (
    <>
    <Particles className = "particles-canvas"
      params ={{
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#2ca8ca"
            }
          }
        }
      }}
    />
    <Navbar/>
    <Header/>
    <About/>
    <Services/>
    <Statistics/>
    <Testimonial/>
    <Contact/>
    </>
  );
}

export default App;
