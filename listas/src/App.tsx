import { useState } from 'react' // Importação do 'gancho'
//import './App.css'

//Função Principal
export default function App () {
  const [input, setInput] = useState("");
  const [ tarefas, setTarefas ] = useState([
    'Estudar', 
    'Lavar Louça', 
    'Descansar'
  ])
  const [ editarTarefa , setEditarTarefa ] = useState({ 
    enabled: false,
    tarefa: ''
  })

  function registrar () {
    if (!input) {
      alert("Preencha o nome da sua tarefa!")
      return
    }
    if(editarTarefa.enabled){ //Se estiver 'true', ou seja, se ela estiver ativa
      editarTarefaSalva(); // Chma a função 'editarTarefaSalva'
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
      enabled: false,
      tarefa: ''
    })
    setInput("")
  }

  function excluir ( item: String ) {
    const excluirTarefa = tarefas.filter(tarefas => tarefas !== item) //Filtra todas as tarefas | Pega as tarefas que são != da que você selecionou
    setTarefas(excluirTarefa)
  }

  function editar ( item: String ) {
    setInput(item)
    setEditarTarefa({
      enabled: true, // Altera para true
      tarefa: item
    })
  }

  //------------------------------------------------------------------------
  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <input
        placeholder="Digite uma tarefa" 
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={registrar} >Adicionar tarefa</button>
      <hr/>
      
      {tarefas.map( (item, index) => (
        <section key={item} >
          <span>{item}</span>
          <button onClick={ () => excluir(item) } >Excluir</button>
          <button onClick={ () => editar(item) } >Editar</button>
        </section>
      ))}
    </div>
  )
}

