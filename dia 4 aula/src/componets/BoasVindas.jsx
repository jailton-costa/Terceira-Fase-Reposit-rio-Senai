import React from 'react'

function BoasVindas(props) {
  return (
    <div>
        <h1>seja bem vindo: {nome} / "{mensagem}"</h1>
        
        <button onClick={() => console.log(props)}>log</button>
    </div>
  )
}

export default BoasVindas