import Cabecalho from "../../Cabecalho";
import Rodape from "../../Rodape";
import { Outlet } from "react-router-dom"

export default function PaginaBase() {
    return (
        <>
            <Cabecalho />
            <main>
                <Outlet />
            </main>
            <Rodape />
        </>
    )
}