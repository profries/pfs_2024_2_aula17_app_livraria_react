import { Route, Routes } from "react-router-dom"
import App from "./App"
import FormEditLivros from "./components/FormEditLivros"
import FormLivros from "./components/FormLivros"
import Home from "./components/Home"
import ListCardLivros from "./components/ListCardLivros"

export default function Router() {
    return (
        <Routes>
            <Route path='/' element={<App></App>}>
                <Route index element={<Home />}></Route>
                <Route path="/lista" element={<ListCardLivros />}></Route>
                <Route path="/cadastro" element={<FormLivros />}></Route>
                <Route path='/edit/:id' element={<FormEditLivros />}></Route>

            </Route>            
        </Routes>
    )
}