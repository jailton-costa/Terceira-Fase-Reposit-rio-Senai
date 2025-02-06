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
            <h1>Demo1</h1>
            <button onClick={alertUsuario}>clima em mim </button>
            <br />
            <button onClick={() => { alert(' isso tambem e um alert / bla-bla-bla') }}>clima em mim 2</button>
            <br />
            <div>
                <p>
                    cornometro: {cornometro}
                    <button onClick={incrementaCornometro}>+</button>
                </p>
            </div>
            <div>
                <p>
                    estado: {estado}
                    <button onClick={incremetarEstado}>+</button>
                </p>
            </div>
        </div>
    )
}

export default Demo1