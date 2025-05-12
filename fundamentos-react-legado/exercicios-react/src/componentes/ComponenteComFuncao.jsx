import React from "react";

const aprovados = ['Paula', 'Matheus', 'Gustavo']

export default props => {
    const gerarItems = itens =>{
        return itens.map(item => <li>{item}</li>)
    }

    return (
        <ul>
            {gerarItems(aprovados)}
        </ul>
    )
}