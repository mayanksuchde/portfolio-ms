import logo from './logo.svg';
import Home from './Home/Home';
import Projects from './Projects';
import Contact from './Contact';
import Skills from './Skills';
import About from './About';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className="App">
            <div className="bg">
              {/* {responsiveBg} */}
              <div className='main'>
                <Home /> 
                <About />
                <Skills />
                <Projects />
                <Contact />
              </div>
            </div>
          {/* </Parallax> */}
        </div>
    </div>
  );
}

export default App;
