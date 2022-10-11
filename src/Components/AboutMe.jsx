import { AiOutlineTool,AiOutlineBulb } from "react-icons/ai";
import fotoCV from "../imgs/cv_foto.png"
function AboutMe (){
    return(
        <div>
            <div className="subTitulo"> <h2>Sobre mi</h2> </div>
            <div className="aboutMe-container">
                <div className="fotoCV">
                    <img src= {fotoCV} alt="Foto CV" />
                </div>
                <div className="conocimientos">
                    <div>
                        <AiOutlineBulb size = {20}></AiOutlineBulb>
                        <h2>Tecnologias</h2>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <AiOutlineTool size = {20}></AiOutlineTool>
                        <h2>Librerias</h2>
                        <ul>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="textoAbout">
                    <p>Front end developer con conocimientos en JavaScript, React, Bootstrap con ganas de seguir aprendiendo y adquiriendo experiencia</p>
                </div>
        </div>
        </div>
    )
}

export default AboutMe