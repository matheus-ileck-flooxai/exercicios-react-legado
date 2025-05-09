import React from "react";

import Filho from "./filho";

export default props => (
    <div>
        <Filho nome='Daniela' sobrenome={props.sobrenome}></Filho>
        <Filho nome='Larissa' sobrenome={props.sobrenome}></Filho>
        <Filho nome='Matheus' sobrenome={props.sobrenome}></Filho>
    </div>
)