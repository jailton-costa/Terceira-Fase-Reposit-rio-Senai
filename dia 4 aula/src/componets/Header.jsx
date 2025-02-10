import './Header.css'
import React, { useState } from 'react'
import BoasVindas from './BoasVindas'

function Header() {
  const [usuario , setUsuario] = useState('')
  const [mensagem , setMensagem] = useState('seja bem vindo usuario 10M')

  function Login (){
    nome = prompt('digite nome do usuario:')
    setUsuario(nome)
  }

  return (
    <div className='hr'>
        <h1>--Header--</h1>
        <h2>link1</h2>
        <h2>link2</h2>
        <h2>link3</h2>
        <h5>{usuario && <BoasVindas nome={usuario} mensagem={mensagem} />} <button onClick={Login}>Login</button></h5>
    </div>
  )
}

export default Header