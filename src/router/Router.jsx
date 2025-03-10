// src/router/Router.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/home/home";
import { Pokedex } from "../pages/Pokedex/Pokedex"; 
import { Contacto } from "../pages/Contacto/Contacto";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/contacto" element={<Contacto />} />
            </Routes>
        </BrowserRouter>
    );
};


export default Router;
