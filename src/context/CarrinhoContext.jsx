import { useContext, createContext, useState } from "react";
import { getPrice, getCashback } from "./api";
import { listaProdutos } from "../pages/loja/Loja";

const context = createContext(null);

export const useCarrinhoContext = () => useContext(context);

export function qtdCarrinho(carrinhoObject) {
    let qtd = 0;
    for (let key in carrinhoObject) {
        carrinhoObject[key]?.forEach((el) => (qtd += el.qtd));
    }
    return qtd;
}
export async function totalCarrinho(carrinhoObject) {
    let total = 0;
    for (let key in carrinhoObject) {
        await getPrice(key)
            .then((res) => {
                total +=
                    res.data.preco *
                    qtdCarrinho({ [key]: carrinhoObject[key] });
            })
            .catch((err) => console.log(err));
    }

    return total;
}

export async function cashbackCarrinho(carrinhoObject) {
    let cashback = 0;
    for (let key in carrinhoObject) {
        const qtd = qtdCarrinho({ [key]: carrinhoObject[key] });
        const valor = await getCashback(key, qtd);

        cashback += Number(valor.data.preco);
    }

    return cashback;
}

function ContextProviderCarrinho({ children }) {
    let carrinho;
    try {
        carrinho = JSON.parse(localStorage.getItem("carrinho")) ?? {};
    } catch {
        carrinho = {};
    }

    const [cart, setCarrinho] = useState(carrinho);

    function addProduto(id, tamanho, cor) {
        const itens = { ...cart };
        if (itens[id]) {
            let newItem = true;
            itens[id].forEach((el) => {
                if (el.tamanho === tamanho && el.cor === cor) {
                    el.qtd++;
                    newItem = false;
                }
            });
            if (newItem) itens[id].push({ tamanho, cor, qtd: 1 });
        } else {
            itens[id] = [{ tamanho, cor, qtd: 1 }];
        }

        setCarrinho(itens);
        localStorage.setItem("carrinho", JSON.stringify(itens));
    }

    function subProduto(id, tamanho, cor) {
        const itens = { ...cart };

        itens[id].forEach((el) => {
            if (el.tamanho === tamanho && el.cor === cor) {
                el.qtd--;
                if (el.qtd < 1) itens[id].splice(itens[id].indexOf(el), 1);
            }
        });

        setCarrinho(itens);
        localStorage.setItem("carrinho", JSON.stringify(itens));
    }

    function delProduto(id, tamanho, cor) {
        const itens = { ...cart };

        itens[id].forEach((el) => {
            if (el.tamanho === tamanho && el.cor === cor) {
                itens[id].splice(itens[id].indexOf(el), 1);
            }
        });

        setCarrinho(itens);
        localStorage.setItem("carrinho", JSON.stringify(itens));
    }

    return (
        <context.Provider
            value={{ cart, addProduto, subProduto, setCarrinho, delProduto }}
        >
            {children}
        </context.Provider>
    );
}

export default ContextProviderCarrinho;
