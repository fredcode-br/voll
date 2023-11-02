import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import PaginaBase from "./components/pages/PaginaBase";
import PaginaBaseFormulario from "./components/pages/PaginaBaseFormulario";
import Dashboard from "./components/pages/Dashboad";
import Cadastro from "./components/pages/Cadastro";
import RotaPrivada from "./utils/RotaPrivada";
import PaginaInicial from "./components/pages/PaginaInicial";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PaginaBase />}>
                    <Route index element={<PaginaInicial />} />
                    <Route element={<RotaPrivada />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                    </Route>
                </Route>
                <Route path="/" element={<PaginaBaseFormulario />} >
                    <Route path="/login" element={<Login />} />
                    <Route path="/cadastro" element={<Cadastro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes