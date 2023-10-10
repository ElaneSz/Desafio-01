import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/index.tsx";
import { Sobre } from "./pages/Sobre/index.tsx";
import { Contato } from "./pages/Contato/index.tsx";
import { Produto } from "./pages/Produtos/index.tsx";
import { NotFound } from "./pages/NotFound/index.tsx";
import { Layout } from "./components/Layout";

const router = createBrowserRouter ([
    {
        element: <Layout/>,
        children: [
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/sobre",
                element:<Sobre/>
            },
            {
                path:"/contato",
                element:<Contato/>
            },
            {
                path:"/produto/:id", // Rota dinamica | A partir da rota produto, ele pega o identificador do produto.
                element:<Produto/>
            },
            {
                path:"*", // Página não encontrada. Sempre deve ser a última a ser criada.
                element:<NotFound/>
            }
        ]
    }
])

export { router };