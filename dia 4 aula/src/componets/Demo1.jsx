import React, { useState } from 'react'
import './Demo1.css'

function Demo1() {
    const [estado, setEstado] = useState(0)

    function incremetarEstado() {
        setEstado(estado + 1)
    }
    function incrementaCornometro() {
        cornometro++
        console.log(cornometro)
    }
    function alertUsuario() {
        alert('oi isso e um alert')
    }
    return (
        <div className='dv'>
            <h1 className='h1Dv'>--Demo1--</h1>
            <button onClick={alertUsuario}> em mim </button>
            <br />
            <button onClick={() => { alert(' isso tambem e um alert kkk') }}> em mim 2</button>
            <br />
            {/* <h3>cornometro: {cornometro}</h3>
            <button onClick={incrementaCornometro}>+</button>
            <br />
            <h3>estado: {estado}</h3>
            <button onClick={incremetarEstado}>+</button> */}
        </div>
    )
}

export default Demo1