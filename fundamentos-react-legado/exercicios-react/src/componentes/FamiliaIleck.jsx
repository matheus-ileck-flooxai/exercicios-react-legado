import React from "react";
import Membro from "./Membro";

export default props =>

    <div>

        <Membro nome="Matheus " sobrenome={props.sobrenome} />
        <Membro nome="Daniela " sobrenome={props.sobrenome} />
        <Membro nome="Larissa " sobrenome={props.sobrenome} />
    </div>