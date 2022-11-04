import { AiFillLinkedin,AiFillGithub } from "react-icons/ai";

function Footer(){
    return(
        <div className="container-footer">
            <div>
                <h5>Frieiro Tony FrontEnd developer</h5>            
            </div>
            <div className="botonera">
                <button className="button-botonera">
                    <a href="https://www.linkedin.com/in/tony-frieiro/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin></AiFillLinkedin></a>
                </button>
                <button className="button-botonera">
                    <a href="https://github.com/TonyFrieiro" target="_blank" rel="noopener noreferrer"><AiFillGithub></AiFillGithub></a>
                </button>
            </div>
            <div>
                <h6> @TonyFrieiro</h6>
            </div>
        </div>
    )
}
export default Footer