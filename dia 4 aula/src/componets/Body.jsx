import './Body.css'
import React from 'react'
import Aviso from './aviso'
import Demo2 from './Demo2'

function Body() {
  return (
    <div className='by'>
      <h1 className='h1By'>--Body--</h1>
      <Aviso />
      <Demo2/>
    </div>
  )
}

export default Body