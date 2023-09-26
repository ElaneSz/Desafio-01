import { useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [ textoFrase, setTextoFrase ] = useState("")
  const [ categoriaSelecionada, setCategoriaSelecionada ] = useState(0)
  const todasFrases = [
    {
      id: 1,
      nome: "Motivacional",
      frases: [
        'É em meio a dificuldade que se encontra a oportunidade.',
        'O êxito é ir de frustração a frustração sem perder a animação.',
        'Mesmo que algo pareça difícil, nunca desista antes de tentar.',
        'Você é o único que entende as suas dificuldades, por isso motive se a prosseguir.',
        'Não é uma vida ruim, é apenas um dia ruim, lembre-se disso.',
        'A maior prova de que você pode fazer o impossível, é superar circunstâncias difíceis.',
        'Que os dias bons se tornem rotina, e os ruins se tornem raros.'
      ]
    },
    {
      id: 2,
      nome: "Bom dia",
      frases: [
        'Hoje você tem duas opções: ser feliz ou ser mais feliz ainda. Bom dia!',
        'Bom dia! Que seu dia seja leve e regado de boas energias.',
        'Desejo um lindo dia com muita felicidade!',
        'Sorria, desejo à você um excelente dia. Muita paz, muita alegria e um dia super feliz!',
        'Bom dia! Que a cada manhã você renove sua vontade de lutar e ser feliz.',
        'Sabe aquele dia lindo cheio de coisas boas? É este que vim te desejar!',
        'Bom dia! Que o seu dia seja tão especial quanto você é em minha vida.'
      ]
    },
    {
      id: 3,
      nome: "Boa noite",
      frases: [
        'Boa noite! Que seu sono seja doce!',
        'Desejo uma noite repleta de amor, assim sendo, boa noite!',
        'Que as estrelas, similarmente a pequenas luzes no céu, guiem seus sonhos nesta noite.',
        'Quero desejar-lhe uma boa noite, meu amor, e que esta noite seja um tempo sagrado de descanso e renovação.',
        'Boa noite! Te desejo uma noite abençoada e serena.',
        'Boa noite! Desejo que durma com tranquilidade e serenidade e que a paz te acompanhe.',
        'Família querida, é hora de apagar as luzes e relaxar. Que o descanso traga renovação e prepare todos para um novo dia cheio de amor. Boa noite!'
      ]
    }
  ]

  function categoriaEscolhida (index: number) {
    setCategoriaSelecionada(index); // Passa o número referente a categoria selecianada
  }

  function gerarFrase () {
    let numeroAleatorio = Math.floor(Math.random() * todasFrases [categoriaSelecionada].frases.length) /* Escolhe 
    um valor (inteiro), dentro da categoria que foi selecionada | 'length' é o tamanho do array*/
    setTextoFrase(`"${todasFrases[categoriaSelecionada].frases[numeroAleatorio]}"`)
  }

  return (
    <>
        <div className="container">
          <img
            alt="Logo frases"
            src={logo}
            className="logo"
          />
        <h2 className="titulo" >Categorias</h2>
        <section className="area-categoria" >
          { todasFrases.map( (item,index) => (
            <button  key={item.id} className="botao-categoria" 
            style={{borderWidth: item.nome === todasFrases[categoriaSelecionada].nome? 2: 0, borderColor: 'blue'}} 
            onClick={() => categoriaEscolhida(index)}
            >{item.nome}</button>
          )) }
        </section>
        <button className="botao-frase" onClick={ gerarFrase } >Gerar frases</button>
        { textoFrase !== '' && <p className="texto-frase" >{ textoFrase }</p> /* Renderização por condição */ }
      </div>
    </>
  )
}

export default App
