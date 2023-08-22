import { useState, FormEvent } from 'react'
import gasolinaLogo from './assets/bomba-de-gasolina.png'
import './App.css'

/*
Calculo: alcool/gasolina
Se resultado menor 0.7 compensa Alcoll
*/

interface resultadoP { // Mostra os valores depois em uma interface
  titulo: string;
  gasolina: string | number; // Pode ser dos dois tipos
  alcool: string | number;
}

function App() {
  const [gasolinaInput, setGasolinaInput] = useState(0)
  const [alcoolInput, setAlcoolInput] = useState(0)
  const [resultad, setResultado] = useSet <resultadoP>()
  
  function calculo(event: FormEvent) {
    event.preventDefault();
    let conta = (alcoolInput/gasolinaInput)
    if (conta <= 0.7) {
      setResultado({
        titulo:"Compensa usar Alcool",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      })
    } else {
      setResultado({
        titulo:"Compensa usar Gasolina",
        gasolina: formataMoeda(gasolinaInput),
        alcool: formataMoeda(alcoolInput)
      })
    }
  }

  function formataMoeda (valor:number) {
    let valorFormatado = valor.toLocaleString("pt-br", 
    {
      style: "currency",
      currency: "BRL"
    })
    return valorFormatado;
  }

  return (
    <div>
      <main className="container" >
        <img className="gasolinaLogo" src={gasolinaLogo} alt="Logo de Combustivel"></img>
        <h1 className="titulo" >Qual a melhor opção?</h1>
        <form className="form" onSubmit={calculo} >
          <label>Álcool (preço por litro): </label>
          <input className="input"
            type="number"
            placeholder="4.90"
            min='1'
            step="0.01"
            required
            value={alcoolInput}
            onChange={ (e) => setAlcoolInput(Number(e.target.value))}
          />

          <label>Gasolina (preço por litro): </label>
          <input className="input"
            type="number"
            placeholder="4.90"
            min='1'
            step="0.01"
            required
            value={gasolinaInput}
            onChange={ (e) => setGasolinaInput(Number(e.target.value))}
          />
        <input className="button" type="submit" value="calcular" />
        </form>

        {resultado && Object.keys(resultado).length > 0 &&(
          <section className="resultado" >
            <h2 className="titulo-resultado"> {resultado.titulo} </h2>
            <span>Álcool: {resultado.alcool}</span>
            <span>Gasolina: {resultado.gasolina}</span>
          </section>  
        )}

      </main>
    </div>
  )
}

export default App
