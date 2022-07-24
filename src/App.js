import Home from './Home/Home';
import Projects from './Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import About from './About/About';
import Background from './Background';
import './App.scss';
import {WindowContextProvider} from './context/WindowSize';
function App() {
  return (
    <div className="App">
      <WindowContextProvider>
        <div className='main'>
            <Home /> 
            <About />
            <Skills />
            <Projects />
            <Contact />
        </div>
        <div className="bg">
          {/* {responsiveBg} */}
          <Background />
        </div>      
      </WindowContextProvider>
    </div>
  );
}

export default App;
