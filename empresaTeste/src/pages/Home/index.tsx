import { Link } from 'react-router-dom'

export function Home () {
    return (
        <div>
            <h1>Bem vindo à página Home!</h1>
            <span>Essa é nossa primeira página com navegação</span>
            <hr/>
            <Link to="/sobre">Sobre</Link>
            <br/>
            <Link to="/contato">Contato</Link>
        </div>
    )
}