import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";
import pdf from "../Utils/CV.pdf"
function Presentacion () {
    return(
    <div className="presentacion" id="presentacion">
        <div className="presentacion-hijo">
            <h3>Hi! i'm</h3>
            <h1>Tony Frieiro </h1>
            <h2>Front-End Developer</h2>
        </div>
        <div className="botonera">
            <button className="button-botonera2">
                <a href="https://www.linkedin.com/in/tony-frieiro/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin size = {30}className="iconos-presentacion"></AiFillLinkedin></a>
            </button>
            <button className="button-botonera2"> 
                <a href={pdf} target="_blank" rel="noopener noreferrer">CV</a>
            </button>
            <button className="button-botonera2">
                <a href="https://github.com/TonyFrieiro" target="_blank" rel="noopener noreferrer" ><AiFillGithub size = {30} className="iconos-presentacion"></AiFillGithub></a>
            </button>
        </div>
        

    </div>)
}

export default Presentacion;