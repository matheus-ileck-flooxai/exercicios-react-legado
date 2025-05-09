import React from "react";
import ReactDOM from "react-dom"
import Familia from "./Familia";
import Filho from "./filho";

ReactDOM.render(
    <Familia sobrenome='Ileck'>
        <Filho nome="Matheus"></Filho>
        <Filho nome="Larissa"></Filho>
    </Familia>
    ,
    document.getElementById('app'))