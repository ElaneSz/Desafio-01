import { Link } from 'react-router-dom'

export function Contato () {
    return (
        <div>
            <h1>Bem vindo  à página de contato</h1>
            <h3>Telefone: (xx) xxxxx-xxxx</h3>
            <hr/>
            <Link to="/">Ir para Home</Link>
            <br/>
            <Link to="/sobre">Ir para Sobre</Link>
        </div>
    )
}