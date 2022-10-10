import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import pdf from "../Utils/CV.pdf"
function Presentacion () {
    return(
    <div className="presentacion">
        <div>
            <h3>Hola! soy</h3>
            <h1>Tony Frieiro </h1>
            <h2>Front-End Developer</h2>
        </div>
        <div className="botonera">
            <button className="button-botonera">
                <a href="https://www.linkedin.com/in/tony-frieiro/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin></AiFillLinkedin></a>
            </button>
            <button className="button-botonera">
                <a href={pdf} target="_blank" rel="noopener noreferrer">CV</a>
            </button>
            <button className="button-botonera">
                <a href=""><AiFillGithub></AiFillGithub></a>
            </button>
        </div>
        

    </div>)
}

export default Presentacion;