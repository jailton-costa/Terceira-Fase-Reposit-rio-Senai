import '../componentes/Home_StoryCubesDigital.css'
import React from 'react'
import OjogoComeçar from './OjogoComeçar'
import UltimoJogo from './UltimoJogo'
import ComoJogar from './ComoJogar'

function Home_StoryCubesDigital() {

  return (
    <div className='homeSCD'>
      <h1>Seja bem vindo ao story-cubes-digital </h1>
      <div className='bts'>

        <button >começar o jogo</button>
        <button >ultimo jogo</button>
        <button >Como jogar story-cubes-digital</button>

      </div>
    </div>
  )
}

export default Home_StoryCubesDigital