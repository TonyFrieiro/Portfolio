import { AiOutlineTool,AiOutlineBulb,AiOutlineArrowDown } from "react-icons/ai";
import fotoCV from "../imgs/cv_foto.png"
function AboutMe (){
    return(
        <div id="aboutMe-container">
            <div className="subTitulo"> <h2>About me</h2> </div>
            <div className="aboutMe-container">
                <div className="conocimientos">
                    <div>
                        <AiOutlineBulb size = {20}></AiOutlineBulb>
                        <h2>Technologies</h2>
                        <ul>
                            <li>React</li>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    </div>
                    <div id="fotoCV2">
                        <img src= {fotoCV} alt="Foto CV" />
                    </div>
                    <div>
                        <AiOutlineTool size = {20}></AiOutlineTool>
                        <h2>libraries</h2>
                        <ul>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="textoAbout">
                    <p>Front end developer with knowledge in JavaScript, React, Bootstrap with the desire to continue learning and gaining experience</p>
                    <div><AiOutlineArrowDown size = {50}></AiOutlineArrowDown></div>
                </div>
        </div>
        </div>
    )
}

export default AboutMe