import { AiOutlineCheckCircle } from "react-icons/ai";

function Education(){
    return(
        <div className="contenedor-education" id="contenedor-education">
            <div className="subTitulo"><h2>Education</h2></div>
            <div className="education">
                <ul>
                    <li><AiOutlineCheckCircle/><a href="https://www.coderhouse.com/certificados/62efe126c7dac103e638e0bf" target="_blank" rel="noopener noreferrer" ><h4>Tecnico en computacion</h4><p>ESC.Tecnica Nº36 "Guillermo Brown"</p></a></li>
                    <li><AiOutlineCheckCircle/><h4> Web development course </h4><p>@ Coderhouse (finished)</p></li>
                    <li><AiOutlineCheckCircle/><h4> JavaScript course </h4><p>@ Coderhouse (finished)</p> </li>
                    <li><AiOutlineCheckCircle/><h4> React js course</h4><p>@ Coderhouse (finished)</p></li>
                    <li><AiOutlineCheckCircle/><h4> BackEnd Course</h4>@ Coderhouse (in progress)</li>
                </ul>
            </div>

        </div>
    )
    
}

export default Education