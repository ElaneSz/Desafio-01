import { Outlet } from 'react-router-dom'
import { Header } from "../Header"

export function Layout () {
    return (
        <>
            <Header/>
            <Outlet/>
            <br/>
            <footer>
                <span>Rodape da página</span>
            </footer>
        </>
    )
}