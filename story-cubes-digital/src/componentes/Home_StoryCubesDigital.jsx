import { useState } from 'react';
import '../componentes/Home_StoryCubesDigital.css'

function Home_StoryCubesDigital() {
  const [começarJogo, setComeçarJogo] = useState(false);
  const [ultimoJogo, setUltimoJogo] = useState(false);
  const [comoJogar, setComoJogar] = useState(false);

  return (
    <div className='homeSCD'><br />
      <h1 className='testo'>Seja bem vindo ao story-cubes-digital</h1>
      <div className='bts'>
        {/* {visivel ? "Esconder Card" : "Mostrar Card"} */}
        <button onClick={() => setComeçarJogo(!começarJogo)} className='bt'>começar o jogo</button>
        <button onClick={() => setUltimoJogo(!ultimoJogo)} className='bt'>ultimo jogo</button>
        <button onClick={() => setComoJogar(!comoJogar)} className='bt'>Como jogar story-cubes-digital</button>
      </div>

      {começarJogo && (
        <div style={{
          width: "41%",
          height: "50%",
          transform: "scale(1)",
          transition: "1s",
          marginTop: "-244px",
          background: "#8e9dab",
          border: "1px solid blue",
          borderRadius: "8px",
          position: "absolute",
          boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.2)"
        }}>
          <div className='testoCJ'>


            <input type="text" className='inputC' placeholder='como vai acontecer' />
            <div className="cardsTudo">
              <h3 className='h3IMG' >
                <img src="./img/meme.jpg" className="imgEmojis" />
              </h3>
              <h3 className='h3IMG' >
                <img src="./img/meme.jpg" className="imgEmojis" />
              </h3>
              <h3 className='h3IMG' >
                <img src="./img/meme.jpg" className="imgEmojis" />
              </h3>
            </div>
            <button onClick={() => setComeçarJogo(!começarJogo)} className='btCARD'>voltar para o menu</button>
          </div>
        </div>
      )}
      {ultimoJogo && (
        <div style={{
          padding: "9.4% 10.8%",
          transform: "scale(1)",
          transition: "1s",
          marginTop: "-244px",
          background: "#8e9dab",
          border: "1px solid blue",
          borderRadius: "8px",
          position: "absolute",
          boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <input type="text" className='inputC' />
          <h3 className='h3EG' >

          </h3>
          <h3 className='h3EG' >

          </h3>
          <h3 className='h3EG' >

          </h3>
          <button onClick={() => setUltimoJogo(!ultimoJogo)} className='btCARD'>voltar para o menu</button>

        </div>
      )}
      {comoJogar && (
        <div style={{
          width: "41%",
          height: "50%",
          transform: "scale(1)",
          transition: "1s",
          marginTop: "-244px",
          background: "#8e9dab",
          border: "1px solid blue",
          borderRadius: "8px",
          position: "absolute",
          boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <h2 className='h3Card'>Como jogar story-cubes-digital</h2><br />
          <h3 className='textoCard'>Os Story Cubes digital é um conjunto de emojis com imagens que ajudam a criar histórias de forma criativa e divertida, É um jogo aberto, ou seja, não tem regras fixas e pode ser jogado de várias maneiras diferentes.</h3><br />
          <button onClick={() => setComoJogar(!comoJogar)} className='btCARD'>voltar para o menu</button>

        </div>
      )}
    </div>
  )
}

export default Home_StoryCubesDigital