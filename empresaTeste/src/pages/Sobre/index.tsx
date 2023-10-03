import { Link } from 'react-router-dom'

export function Sobre () {
    return (
        <div>
            <h1>Bem vindo à página Sobre!</h1>
            <hr/>
            <Link to="/">Ir para Home</Link>
            <br/>
            <Link to="/contato">Contato</Link>
        </div>
    )
}