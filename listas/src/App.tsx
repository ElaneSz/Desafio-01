import React, { useState, useEffect, useRef } from 'react' // Importação do 'gancho'
//import './App.css'

//Função Principal
export default function App () {
  const [input, setInput] = useState("");
  const [ tarefas, setTarefas ] = useState<String[]>([]) // Por padrão deixa vazio
  const [ editarTarefa, setEditarTarefa ] = useState({ 
    enabled: false,
    tarefa: ''
  })
  const inputRef = useRef  <HTMLInputElement>(null);
  const primeiraR = useRef(true)

  useEffect(() => {
    const tarefaSalva = localStorage.getItem("@cursoreact")
    if (tarefaSalva) { // Verifica as tarefas que ainda estão salvas, para retornar na tela
      setTarefas(JSON.parse(tarefaSalva));
    }
  }, [])

  useEffect( () => {
    if (primeiraR.current) { // Verifica se é a primeira renderização
      primeiraR.current=false;
      return;
    }
    localStorage.setItem("@cursoreact", JSON.stringify ( tarefas ))
    console.log("useEffect chamado!!")
  }, [tarefas])

  function registrar () {
    if (!input) {
      alert("Preencha o nome da sua tarefa!")
      return
    }
    if(editarTarefa.enabled){ //Se estiver 'true', ou seja, se ela estiver ativa
      editarTarefaSalva(); // Chama a função 'editarTarefaSalva'
      return
    }

    setTarefas(tarefas => [...tarefas,input])
    setInput("");
  }

  function editarTarefaSalva () { // Função para editar uma tarefa selecionada
    const findIndexTarefa = tarefas.findIndex(tarefas => tarefas === editarTarefa.tarefa) /*Procura o 
    index daquela tarefa | Se a tarefa que eu quero editar, for uma da lista*/
    // =====================================================================
    const todasTarefas = [...tarefas];
    todasTarefas[findIndexTarefa] = input // Procura a que deve ser alterada e altera dentro do 'input'
    setTarefas(todasTarefas); // Mostra todas as tarefas
    setEditarTarefa ({ // Deixa inativo
      enabled: false, // Seta para falso, para não editar a mesma tarefa
      tarefa: ''
    })
    setInput("")
  }

  function excluir ( item: String ) {
    const excluirTarefa = tarefas.filter(tarefas => tarefas !== item) //Filtra todas as tarefas | Pega as tarefas que são != da que você selecionou
    setTarefas(excluirTarefa)

  }

  function editar ( item: String ) {
    inputRef.current?.focus(); // Quando clicar em editar, ele já vai com o cursor para dentro do input
    setInput(item)
    setEditarTarefa({
      enabled: true, // Altera para true, para poder editar
      tarefa: item
    })
  }

  //------------------------------------------------------------------------
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        placeholder="Digite uma tarefa" 
        value={ input }
        onChange={(e) => setInput(e.target.value)}
        ref={ inputRef }
      />
      <button className='bt-confirmar' onClick={ registrar } > { editarTarefa.enabled /*enabled | Se estiver ativo*/ ? "Atualizar tarefa" : /*Caso contrario*/ "Adicionar tarefa"}</button>
      <hr/>
      
      {tarefas.map( (item, index) => ( // Para inserir as tarefas uma à baixo da outra
        <section key={item} >
          <div>
            <span>{item}</span>
            <button onClick={ () => excluir(item) } >Excluir</button>
            <button onClick={ () => editar(item) } >Editar</button>
          </div>
        </section>
      ))}
    </div>
  )
}

