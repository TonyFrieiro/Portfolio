import { AiOutlineCheckCircle } from "react-icons/ai";

function Education(){
    return(
        <div className="contenedor-education" id="contenedor-education">
            <div className="subTitulo"><h2>Educacion</h2></div>
            <div className="education">
                <ul>
                    <li><AiOutlineCheckCircle/><a href="https://www.coderhouse.com/certificados/62efe126c7dac103e638e0bf" target="_blank" rel="noopener noreferrer" ><h4>Tecnico en computacion</h4><p>ESC.Tecnica Nº36 "Guillermo Brown"</p></a></li>
                    <li><AiOutlineCheckCircle/><h4> Curso Desarrollo web </h4><p>@ Coderhouse (Finalizado)</p></li>
                    <li><AiOutlineCheckCircle/><h4> Curso JavaScript </h4><p>@ Coderhouse (Finalizado)</p> </li>
                    <li><AiOutlineCheckCircle/><h4> Curso React js</h4><p>@ Coderhouse (Finalizado)</p></li>
                    <li><AiOutlineCheckCircle/><h4> Curso Back-End</h4>@ Coderhouse (Cursando)</li>
                </ul>
            </div>

        </div>
    )
    
}

export default Education