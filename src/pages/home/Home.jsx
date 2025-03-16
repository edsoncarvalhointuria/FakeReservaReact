import Hero from "./Hero";
import PorTamanho from "./PorTamanho";
import Destaques from "./Destaques";
import Banners from "./Banners";
import { useEffect } from "react";
import { useLoginContext } from "../../context/LoginContext";

function Home() {
    const { logar } = useLoginContext();
    useEffect(() => {
        logar();
    }, []);
    return (
        <main>
            <Hero />

            <PorTamanho />

            <Destaques />

            <Banners />
        </main>
    );
}

export default Home;
