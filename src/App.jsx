import './App.css';

import Presentacion from './Components/Presentacion';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Proyectos from './Components/Proyectos';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Presentacion></Presentacion>
      <AboutMe></AboutMe>
      <Education></Education>
      <Proyectos></Proyectos>
      <Footer></Footer>
    </div>
  );
}

export default App;
