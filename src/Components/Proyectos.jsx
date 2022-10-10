import euporieFoto from "../imgs/preview-Euporie.PNG"
import desarrolloWebFoto from "../imgs/preview-desarrolloweb.PNG"

function Proyectos() {
    return(
        <div className="proyectos-container">
            <div><h2>Proyectos</h2></div>
            <div className="proyectos-euporie">
                <div>
                    <div><img src={euporieFoto} alt="Preview Proyecto" /></div>
                </div>
                <div>
                    <h4>Simulador Ecommerce con Carrito</h4>
                </div>
                <div>
                    <button><a href="https://github.com/TonyFrieiro/ecommerce-React" target="_blank" rel="noopener noreferrer">Github</a></button>
                    <button><a href="https://euporie-react.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                </div>
            </div>
            <div className="proyectos-desarrolloWeb">
                <div>
                    <div><img src={desarrolloWebFoto} alt="Preview Proyecto" /></div>
                </div>
                <div>
                    <h4>Simulador Ecommerce (HTML Y CSS)</h4>
                </div>
                <div>
                    <button><a href="https://github.com/TonyFrieiro/ProyectoFrieiro" target="_blank" rel="noopener noreferrer">Github</a></button>
                    <button><a href="https://euporie-website.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                </div>
            </div>

        </div>
    )
}

export default Proyectos