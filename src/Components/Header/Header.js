
import { Link, scrollSpy } from "react-scroll";

const Header = () => {
    return (
        <>
            <header>
                <div className="insideCabecalho">
                    <Link to="sobre" smooth spy={true} hashSpy={true} offset={-40}>
                        Sobre
                    </Link>
                </div>
                <div className="insideCabecalho">
                    <Link to="habilidades" smooth spy={true} hashSpy={true} offset={-200}>
                        Habilidades
                    </Link>
                </div>
                <div className="insideCabecalho">
                    <Link to="projetos" smooth spy={true} hashSpy={true} offset={0}>
                        Projetos
                    </Link>
                </div>
                <div className="insideCabecalho">
                    <Link to="entreEmContato" smooth spy={true} hashSpy={true}>
                        Entre em contato
                    </Link>
                </div>
                <div className="insideCabecalho">
                    <Link to="finalDaPagina" smooth spy={true} hashSpy={true}>
                        Final da página
                    </Link>
                </div>

            </header>
        </>
    )
}

export default Header