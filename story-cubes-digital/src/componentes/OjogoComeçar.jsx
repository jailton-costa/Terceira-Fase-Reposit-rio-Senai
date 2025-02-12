import React, { useState } from 'react'
import '../componentes/OjogoComeçar.css'

function OjogoComeçar() {
    const [figurinha1, setFigurinha1] = useState()
    const [figurinha2, setFigurinha2] = useState()
    const [figurinha3, setFigurinha3] = useState()


    return (
        <div>
            <h4 className='h4F'>
                {figurinha1}
            </h4>
            <h4 className='h4F'>
                {figurinha2}
            </h4>
            <h4 className='h4F'>
                {figurinha3}
            </h4>
        </div>
    )
}

export default OjogoComeçar