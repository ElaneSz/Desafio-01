//import { Link } from 'react-render-dom'
import { useParams } from 'react-router-dom'

export function Produto () {
    const { id } = useParams() // Pega o valor passado por parametro na url

    return (
        <div>
            <h1>Bem vindo ao produto {id}</h1>
        </div>
    )
}