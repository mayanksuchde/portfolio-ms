import Home from './Home/Home';
import Projects from './Projects';
import Contact from './Contact/Contact';
import Skills from './Skills/Skills';
import About from './About/About';
import Background from './Background';
import './App.scss';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
