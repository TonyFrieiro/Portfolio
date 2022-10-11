import './App.css';

import Presentacion from './Components/Presentacion';
import AboutMe from './Components/AboutMe';
import Education from './Components/Education';
import Proyectos from './Components/Proyectos';
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <Presentacion></Presentacion>
      <NavBar></NavBar>
      <AboutMe></AboutMe>
      <Education></Education>
      <Proyectos></Proyectos>
      <Footer></Footer>
    </div>
  );
}

export default App;
