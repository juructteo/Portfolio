import React from "react";
import Header from "../Components/Header/Header";
import Parte1 from "../Components/inicio_p1/inicio_p1"
const LeadingPage = () => {
    return (
        <body >
            <div >
                <div className="bg">
                    <Header />

                    <Parte1 />
                </div>

                {/*  <Parte2_Sobre />
            <Parte3_AreaDeInteresse />

            <Parte4_Projetos />
            <Parte5_EntreEmContato />
            <div name="finalDaPagina" id="finalDaPagina">
                to aqui embaixo
            </div>

            <div style={{ textAlign: "center" }}>
                <img src={Maintenance} atl="Manutenção" />
                Está página está em manutenção
                <img src={Maintenance} atl="Manutenção" />
            </div> 
            <Footer />*/}


            </div>
        </body>
    );
};

export default LeadingPage;
