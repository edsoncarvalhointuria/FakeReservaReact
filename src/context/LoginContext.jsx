import { useState } from "react";
import { createContext, useContext } from "react";
import { verLogin } from "./api";

const context = createContext(null);

export const useLoginContext = () => useContext(context);

function ContextProviderLogin({ children }) {
    const [isLogin, setLogin] = useState(false);
    const [user, setUser] = useState("");
    const logar = () => {
        verLogin()
            .then((data) => {
                if (data.data.err) {
                    setLogin(false);
                }
                if (data.data.login) {
                    setLogin(true);
                    setUser({ nome: data.data.nome, email: data.data.email });
                }
            })
            .catch(() => setLogin(false));
    };
    return (
        <context.Provider value={{ isLogin, setLogin, logar, user, setUser }}>
            {children}
        </context.Provider>
    );
}

export default ContextProviderLogin;
