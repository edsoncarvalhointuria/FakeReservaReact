import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ContextProviderCarrinho from "./context/CarrinhoContext.jsx";
import ContextProviderLogin from "./context/LoginContext.jsx";
import "./index.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <ContextProviderCarrinho>
            <ContextProviderLogin>
                <App />
            </ContextProviderLogin>
        </ContextProviderCarrinho>
    </BrowserRouter>
);
