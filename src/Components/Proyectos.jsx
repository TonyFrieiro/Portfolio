import euporieFoto from "../imgs/preview-Euporie.PNG"
import desarrolloWebFoto from "../imgs/preview-desarrolloweb.PNG"
import portfolioFoto from "../imgs/preview-portfolio.PNG"

function Proyectos() {
    return(
        <div className="masContainer">
            <div><h2>Proyectos</h2></div>
            <div className="proyectos-container">
                <div className="proyectos-euporie">
                    <div>
                        <div><img src={euporieFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Simulador Ecommerce con Carrito</h4>
                    </div>
                    <div className="botonera-2">
                        <button className="button-botonera"><a href="https://github.com/TonyFrieiro/ecommerce-React" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="button-botonera"><a href="https://euporie-react.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                    </div>
                </div>
                <div className="proyectos-portfolio">
                    <div>
                        <div><img src={portfolioFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Portfolio Firieiro Tony</h4>
                    </div>
                    <div className="botonera-2">
                        <button className="button-botonera"><a href="https://github.com/TonyFrieiro/Portfolio" target="_blank" rel="noopener noreferrer">Github</a></button>
                        <button className="button-botonera"><a href="https://portfolio-frieiro-tony.netlify.app/" target="_blank" rel="noopener noreferrer">Pagina</a></button>
                    </div>
                </div>
                <div className="proyectos-desarrolloWeb">
                    <div>
                        <div><img src={desarrolloWebFoto} alt="Preview Proyecto" /></div>
                    </div>
                    <div>
                        <h4>Simulador Ecommerce (HTML Y CSS)</h4>
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