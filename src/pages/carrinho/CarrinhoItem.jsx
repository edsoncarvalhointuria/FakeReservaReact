import { Link } from "react-router-dom";
import { useCarrinhoContext } from "../../context/CarrinhoContext";
import "./_carrinho.scss";

function CarrinhoItem({
    id,
    qtd,
    nome,
    tamanho,
    cores,
    cashback,
    preco,
    preco_antigo,
}) {
    const { delProduto, addProduto, subProduto } = useCarrinhoContext();
    cores = JSON.parse(cores);

    return (
        <tr>
            <td className="carrinho__td-prod">
                <div className="carrinho__prod">
                    <div className="carrinho__prod-div">
                        <Link
                            to={`/produtos/item/${id}`}
                            className="carrinho__prod-imagem"
                        >
                            <img
                                loading="lazy"
                                src={cores[0].imgs}
                                alt={"Miniatura " + nome}
                            />
                        </Link>

                        <div className="carrinho__prod-infos">
                            <Link
                                to={`/produtos/item/${id}`}
                                className="carrinho__prod-nome"
                            >
                                {nome}
                            </Link>

                            <div className="carrinho__prod-grade">
                                <div className="carrinho__prod-tamanho">
                                    TAMANHO:
                                    <span>{tamanho}</span>
                                </div>
                                <div className="carrinho__prod-cor">
                                    COR:
                                    <span>{cores[0].cor}</span>
                                </div>
                                <button
                                    className="carrinho__prod-del"
                                    onClick={() =>
                                        delProduto(id, tamanho, cores[0].cor)
                                    }
                                >
                                    Deletar
                                </button>
                            </div>

                            <div className="carrinho__prod-presente">
                                <input
                                    type="checkbox"
                                    value="presente"
                                    name="presente"
                                    id={`presente-${id}-${cores[0].cor}`}
                                />

                                <p>Embalagem para presente</p>
                                {cashback ? (
                                    <p className="carrinho__cashback">
                                        Receba{" "}
                                        <span>
                                            R${" "}
                                            {((cashback / 100) * (qtd * preco))
                                                .toFixed(2)
                                                .replace(".", ",")}
                                        </span>{" "}
                                        de cashback
                                    </p>
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </td>

            <td className="carrinho__td-carrinho">
                <div className="carrinho__entrega">a calcular</div>
            </td>

            <td className="carrinho__td-valor">
                <div className="carrinho__valor">
                    <p className="carrinho__valor-v">
                        R$ {preco_antigo.toFixed(2).replace(".", ",")}
                    </p>
                    <p className="carrinho__valor-n">
                        R$ {preco.toFixed(2).replace(".", ",")}
                    </p>
                </div>
            </td>

            <td className="carrinho__td-quantidade">
                <div className="carrinho__quantidade">
                    <button
                        className="carrinho__quantidade-menos"
                        onClick={() => subProduto(id, tamanho, cores[0].cor)}
                    >
                        -
                    </button>
                    <input
                        className="carrinho__quantidade-numero"
                        type="number"
                        name="quantidade"
                        id={`quantidade-${id}-${cores[0].cor}`}
                        value={qtd}
                        readOnly={true}
                    />
                    <button
                        className="carrinho__quantidade-mais"
                        onClick={() => addProduto(id, tamanho, cores[0].cor)}
                    >
                        +
                    </button>
                </div>
            </td>

            <td>
                <div className="carrinho__total">
                    R$ {(qtd * preco).toFixed(2).replace(".", ",")}
                </div>
            </td>
        </tr>
    );
}

export default CarrinhoItem;
