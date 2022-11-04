import euporieFoto from "../imgs/preview-Euporie.PNG"
import desarrolloWebFoto from "../imgs/preview-desarrolloweb.PNG"

import buscadorPaisesFoto from "../imgs/preview-buscadorpaises.PNG"

function Proyectos() {
    return(
        <div className="masContainer" id="proyectos-container">
            <div><h2>Projects</h2></div>
            <div className="proyectos-container">
                <div className="proyectos-euporie">
                    <div>
                        <div><img src={euporieFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Ecommerce Simulator with Cart(React,JS,HTML,CSS,Firebase)</h4>
                    </div>
                    <div className="botonera-2">
                        <button className="button-botonera"><a href="https://github.com/TonyFrieiro/ecommerce-React" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="button-botonera"><a href="https://euporie-react.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                    </div>
                </div>
                <div className="proyectos-paises">
                    <div>
                        <div><img src={buscadorPaisesFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Country Finder (Api Countries)(React,js,Html,css,Bootstrap)</h4>
                    </div>
                    <div className="botonera-2">
                        <button className="button-botonera"><a href="https://github.com/TonyFrieiro/BuscadorPaises" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="button-botonera"><a href="https://encuentrapais.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                    </div>
                </div>
                <div className="proyectos-desarrolloWeb">
                    <div>
                        <div><img src={desarrolloWebFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Ecommerce Simulator (HTML,CSS,Bootstrap)</h4>
                    </div>
                    <div className="botonera-2">
                        <button className="button-botonera"><a href="https://github.com/TonyFrieiro/ProyectoFrieiro" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="button-botonera"><a href="https://euporie-website.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Proyectos