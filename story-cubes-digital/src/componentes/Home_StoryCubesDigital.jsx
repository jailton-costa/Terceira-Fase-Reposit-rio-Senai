import { useState } from 'react';
import '../componentes/Home_StoryCubesDigital.css';

function Home_StoryCubesDigital() {
  const [começarJogo, setComeçarJogo] = useState(false);
  const [ultimoJogo, setUltimoJogo] = useState(false);
  const [comoJogar, setComoJogar] = useState(false);
  const [emojis, setEmojis] = useState(["❓", "❓", "❓"]); // Emojis iniciais
  const [ultimoEmojis, setUltimoEmojis] = useState([]); // Últimos emojis usados
  const [historiaInput, setHistoriaInput] = useState(""); // Texto digitado no input
  const [ultimaHistoria, setUltimaHistoria] = useState(""); // Última história salva

  const listaEmojis = [
    "😀", "😂", "😍", "🤔", "😎", "🙄", "🥳", "😴", "😤", "😭", "😡", "🤯", "😜", "🤩", "😇",
    "👻", "💀", "🤖", "👽", "👾", "🐉", "🦄", "🐙", "🦖", "🐺", "🐵",
    "🚀", "⏳", "⚡", "💡", "🔑", "🛸", "🎩", "📜", "💰", "🧩",
    "🌲", "🔥", "🌊", "🌪", "🏔", "🌞", "🌕", "🌠", "🍀", "🪲",
    "🍎", "🍕", "🍔", "🍩", "🍉", "🍫", "🧀", "🍗", "🥑", "🍇",
    "🚗", "🚲", "✈️", "🚂", "🚁", "🚢", "🛶", "🏎", "🛵", "🛻",
    "🧙‍♂️", "🧛‍♂️", "🧞‍♂️", "🧜‍♀️", "🦹‍♂️", "🦸‍♀️", "👑", "🦄", "🔮", "📖"
  ];

  // Função para gerar novos emojis aleatórios
  const gerarEmojis = () => {
    const novosEmojis = Array.from({ length: 3 }, () =>
      listaEmojis[Math.floor(Math.random() * listaEmojis.length)]
    );
    setEmojis(novosEmojis);
    setUltimoEmojis(novosEmojis); // Salvar os últimos emojis gerados
    setUltimaHistoria(historiaInput); // Salvar o texto do input
  };

  return (
    <div className='homeSCD'><br />
      <h1 className='testo'>Seja bem-vindo ao Story Cubes Digital</h1>
      <div className='bts'>
        <button onClick={() => setComeçarJogo(!começarJogo)} className='bt'>Começar o jogo</button>
        <button onClick={() => setUltimoJogo(!ultimoJogo)} className='bt'>Último jogo</button>
        <button onClick={() => setComoJogar(!comoJogar)} className='bt'>Como jogar</button>
      </div>

      {começarJogo && (
        <div className='tudoComeçarJogo'>
          <div className='modal'>
            <div className='textoCJ'>
              <input
                type="text"
                className='inputC'
                placeholder='Como vai acontecer?'
                value={historiaInput}
                onChange={(e) => setHistoriaInput(e.target.value)}
              />
              <div className="cardsTudo">
                {emojis.map((emoji, index) => (
                  <h1 key={index} className='h1IMG'>{emoji}</h1>
                ))}
              </div>
              <button onClick={gerarEmojis} className='btCARD'>Criar história</button>
              <button onClick={() => setComeçarJogo(false)} className='btCARD'>Voltar ao menu</button>
            </div>
          </div>
        </div>
      )}

      {ultimoJogo && (
        <div className="tudoUltimoJogo">
          <div className='modal'>
            <h2 className='h3Card'>Último Jogo</h2>
            <h3 className='textoCard'>Texto digitado: {ultimaHistoria || "Nenhuma história criada ainda."}</h3>
            <div className="cardsTudo">
              {ultimoEmojis.length > 0 ? (
                ultimoEmojis.map((emoji, index) => (
                  <h3 key={index} className='h3IMG'>{emoji}</h3>
                ))
              ) : (
                <p className="textoCard">Nenhum emoji gerado ainda.</p>
              )}
            </div>
            <button onClick={() => setUltimoJogo(false)} className='btCARD'>Voltar ao menu</button>
          </div>
        </div>
      )}

      {comoJogar && (
        <div className="tudoComoJogar">
          <div className='modal'>
            <h2 className='h3Card'>Como jogar Story Cubes Digital</h2><br />
            <h3 className='textoCard'>
              Os Story Cubes digitais são um conjunto de emojis que ajudam a criar histórias de forma criativa e divertida. O jogo não tem regras fixas e pode ser jogado de diversas maneiras.
            </h3><br />
            <button onClick={() => setComoJogar(false)} className='btCARD'>Voltar ao menu</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home_StoryCubesDigital;
