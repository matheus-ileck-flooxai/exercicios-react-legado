import ReactDOM from 'react-dom'
import React from 'react'
import PrimeiroComponente from './componentes/PrimeiroComponente'
import { CompA, CompB } from './componentes/DoisComponentes'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <PrimeiroComponente valor="Bom dia" />
        <CompA valor="Matheus"/>
        <CompB valor="Daniela"/>
    </div>, elemento)