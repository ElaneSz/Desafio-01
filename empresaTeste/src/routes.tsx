import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home/index.tsx";
import { Sobre } from "./pages/Sobre/index.tsx";
import { Contato } from "./pages/Contato/index.tsx";
import { Produto } from "./pages/Produtos/index.tsx";

const router = createBrowserRouter ([
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
        path:"/produto",
        element:<Produto/>
    }
])

export { router };