import { Link, scrollSpy } from "react-scroll";
import Header from "../Header/Header.js";
import "./inicio_p1.css";

const Parte1 = () => {
    scrollSpy.update();

    return (
        <section>
            <div className="containerInicial">

                <span className={" nomePrincipal"}>
                    Sou Julia Téo
                </span>


            </div>
        </section>
    )
}

export default Parte1;