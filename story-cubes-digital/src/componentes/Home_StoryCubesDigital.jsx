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
          padding: "9.6% 14.1%",
          transform: "scale(1)",
          transition: "1s",
          marginTop: "-244px",
          background: "#8e9dab",
          border: "1px solid blue",
          borderRadius: "8px",
          position: "absolute",
          boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <input type="text" className='inputC' placeholder='digite a' />
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
          padding: "7.5% 7.4%",
          transform: "scale(1)",
          transition: "1s",
          marginTop: "-244px",
          background: "#8e9dab",
          border: "1px solid blue",
          borderRadius: "8px",
          position: "absolute",
          boxShadow: "10px 14px 16px rgba(0, 0, 0, 0.1)"
        }}>
          <h3 className='h3Card'>como jogar story-cubes-digital</h3><br />
          <h4 className='textoCard'>Os Story Cubes (ou Cubo das Histórias) são um conjunto de dados com imagens que ajudam a criar histórias de forma criativa e divertida, É um jogo aberto, ou seja, não tem regras fixas e pode ser jogado de várias maneiras diferentes. Vou te explicar o modo básico de jogar e algumas variações:,story-cubes-digital e um jogo de emojis que os emojis que cair vai decide o que vai acontecer.</h4><br />
          <button onClick={() => setComoJogar(!comoJogar)} className='btCARD'>voltar para o menu</button>

        </div>
      )}
    </div>
  )
}

export default Home_StoryCubesDigital