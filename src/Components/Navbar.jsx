import { BsPersonLinesFill,BsTools,BsBookFill,BsLightbulbFill } from "react-icons/bs";
import { Link } from "react-scroll";

function NavBar () {
    return(
        <div className="container-navbar">
            <Link
                activeClass="active"
                to="presentacion"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><BsPersonLinesFill size={20}/></Link>
            <Link
                activeClass="active"
                to="aboutMe-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><BsTools size={20}/></Link>
            <Link
                activeClass="active"
                to="contenedor-education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><BsBookFill size={20}/></Link>
            <Link
                activeClass="active"
                to="proyectos-container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            ><BsLightbulbFill size={20}/></Link>
        </div>
    )
}

export default NavBar