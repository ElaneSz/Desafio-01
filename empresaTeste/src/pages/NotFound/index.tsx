import { Link } from 'react-router-dom'

export function NotFound () {
    return (
        <div>
            <h1>Desculpe, essa página não foi encontrada!</h1>
            <Link  to="/">Acessar página Home.</Link>
        </div>
    )
}