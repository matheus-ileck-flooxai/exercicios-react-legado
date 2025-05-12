import ReactDOM from 'react-dom'
import React from 'react'

import ComponenteClasse from './componentes/ComponenteClasse'
const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        <ComponenteClasse valor="Sou um componente de Classe"/>
    </div>, elemento)