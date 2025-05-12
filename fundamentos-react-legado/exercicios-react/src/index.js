import ReactDOM from 'react-dom'
import React from 'react'
import Familia from './componentes/Familia'
import Membro from './componentes/Membro'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <Familia sobrenome="ileck">
            <Membro nome="Matheus "></Membro>
        </Familia>
    </div>, elemento)