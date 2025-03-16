import { useState, useEffect } from "react";
import { getHeader } from "../../context/api";
import { Link, useLocation, useNavigate } from "react-router-dom";
import MenuItem from "./MenuItem";
import { useCarrinhoContext, qtdCarrinho } from "../../context/CarrinhoContext";
import { useLoginContext } from "../../context/LoginContext";
import header from "./header.module.scss";

const teste2 = [
    {
        Masculino: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/1da10089-87db-437e-a80a-81356004288b___7255af27362c9c489a98842831071397.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Feminino: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Infantil: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Calçados: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Prime: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Personalização: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },

        Ofertas: {
            link: "#",
            img: "https://lojausereserva.vtexassets.com/assets/vtex.file-manager-graphql/images/ee5a9c52-b4d0-4382-9dc9-e4c4ed9d655e___abcd519a75ce74a05932f6583632ce0a.jpg",
            categorias: {
                Novidade: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Roupas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    opcao10: "#",
                    "Ver Todos": "#",
                },
                Acessórios: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    "Ver Todos": "#",
                },
                Linhas: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                },
                Calçados: {
                    opcao1: "#",
                    opcao2: "#",
                    opcao3: "#",
                    opcao4: "#",
                    opcao5: "#",
                    opcao6: "#",
                    opcao7: "#",
                    opcao8: "#",
                    opcao9: "#",
                    "Ver Todos": "#",
                },
            },
        },
    },
];

function Header() {
    const redirect = useNavigate();
    const [isOpen, setMenu] = useState(false);
    const [menu, setItens] = useState([]);
    const { cart } = useCarrinhoContext();
    const { isLogin, user } = useLoginContext();
    const local = useLocation();

    useEffect(() => {
        getHeader()
            .then((message) => {
                setItens(message.data);
            })
            .catch((e) => console.log(e));
    }, []);

    return (
        <>
            <header
                className={`${header["header"]} ${
                    local.pathname === "/carrinho" ||
                    local.pathname === "/checkout"
                        ? header["header--checkout"]
                        : ""
                }`}
            >
                <div className={header["header__container"]}>
                    <div
                        className={`${header["header__menu-hamburguer"]} ${
                            isOpen && header["abrir"]
                        }`}
                        onClick={() => setMenu(!isOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="none"
                            className={header["header__menu-hamburguer-img"]}
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="#000000"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div className={header["header__div-logo"]}>
                        <Link to="/">
                            <img
                                loading="lazy"
                                src="https://lojausereserva.vtexassets.com/arquivos/new_logo_header.svg"
                                alt="Logo Reserva"
                                className={header["header__logo"]}
                            />
                        </Link>
                    </div>

                    <nav className={header["nav"]}>
                        <ul
                            className={`${header["nav__links-lista"]} ${
                                isOpen && header["abrir"]
                            }`}
                        >
                            {menu.map((v, i) => (
                                <MenuItem
                                    nomeItem={v.colecao}
                                    linkItem={`loja/${v.colecao_slug}`}
                                    linkImg={`loja/${v.banner_link}`}
                                    alt={v.banner}
                                    img={v.img}
                                    categorias={JSON.parse(v.categorias)}
                                    key={i}
                                />
                            ))}
                        </ul>

                        <div
                            className={`${header["nav__outros"]} ${
                                isLogin ? header["logado"] : ""
                            }`}
                        >
                            <form
                                className={header["nav__form"]}
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    const form = new FormData(e.target)
                                        .get("pesquisa")
                                        .trim()
                                        .split(" ")
                                        .join("+");
                                    redirect(`/loja/pesquisa?pesquisa=${form}`);
                                }}
                            >
                                <input
                                    className={header["nav__form-input"]}
                                    type="text"
                                    name="pesquisa"
                                    id="pesquisa"
                                    placeholder="O que você procura?"
                                />
                                <button
                                    type="submit"
                                    className={header["nav__form-botao"]}
                                >
                                    <img
                                        loading="lazy"
                                        src="https://lojausereserva.vteximg.com.br/arquivos/search_header1.svg"
                                        alt="Icone Pesquisa"
                                    />
                                </button>
                            </form>
                            <Link
                                to={"/login"}
                                className={header["nav__usuario"]}
                            >
                                <img
                                    loading="lazy"
                                    src="data:image/svg+xml;charset=utf-8,%3Csvg width='16' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M8 1.333a3.332 3.332 0 100 6.662 3.332 3.332 0 100-6.662zM3.334 4.664A4.665 4.665 0 018 0a4.665 4.665 0 110 9.328 4.665 4.665 0 01-4.666-4.664zm2 8.662A3.333 3.333 0 002 16.657v1.996h12v-1.996a3.333 3.333 0 00-3.333-3.333H5.334zM.667 16.657a4.666 4.666 0 014.667-4.666h5.333a4.666 4.666 0 014.667 4.666v3.33H.667v-3.33z' fill='%23000'/%3E%3C/svg%3E"
                                    alt="Icone Usuário"
                                    className={header["nav__usuario"]}
                                />
                            </Link>

                            <div
                                className={header["nav__usuario-logado"]}
                                onClick={(e) =>
                                    e.currentTarget.classList.toggle(
                                        header["nav__usuario-logado--menu"]
                                    )
                                }
                            >
                                <img
                                    loading="lazy"
                                    width="24"
                                    height="21"
                                    src="https://www.svgrepo.com/show/343494/profile-user-account.svg"
                                    className={header["nav__carrinho"]}
                                />
                                <div
                                    className={
                                        header["nav__usuario-logado-opcoes"]
                                    }
                                >
                                    <p>
                                        Olá, <span>{user.nome}!</span>
                                    </p>
                                    <Link to="/minha-conta">Minha Conta</Link>
                                    <Link to="/meus-pedidos">Meus Pedidos</Link>
                                    <hr />
                                    <a href="#">Sair</a>
                                </div>
                            </div>

                            <Link
                                to="/carrinho"
                                className={header["nav__div-carrinho"]}
                            >
                                <img
                                    loading="lazy"
                                    src="data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='21' viewBox='0 0 20 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.692 18c-.447 0-.828-.157-1.143-.472a1.557 1.557 0 01-.472-1.143V5.615c0-.447.157-.828.472-1.143A1.557 1.557 0 011.692 4h2.385c0-1.114.388-2.06 1.164-2.836C6.018.388 6.963 0 8.077 0c1.114 0 2.06.388 2.835 1.164.777.777 1.165 1.722 1.165 2.836h2.384c.448 0 .83.157 1.144.472.314.315.472.696.472 1.143v10.77c0 .447-.158.828-.472 1.143A1.557 1.557 0 0114.46 18H1.692zm0-1h12.77a.588.588 0 00.423-.192.588.588 0 00.192-.423V5.615a.588.588 0 00-.192-.423A.588.588 0 0014.46 5H1.692a.588.588 0 00-.423.192.588.588 0 00-.192.423v10.77c0 .153.064.294.192.423.128.128.27.192.423.192zm6.385-7c1.114 0 2.06-.388 2.835-1.164.777-.777 1.165-1.722 1.165-2.836h-1c0 .833-.292 1.542-.875 2.125A2.893 2.893 0 018.077 9a2.893 2.893 0 01-2.125-.875A2.893 2.893 0 015.077 6h-1c0 1.114.388 2.06 1.164 2.836C6.018 9.612 6.963 10 8.077 10zm-3-6h6c0-.833-.292-1.542-.875-2.125A2.893 2.893 0 008.077 1c-.833 0-1.542.292-2.125.875A2.893 2.893 0 005.077 4z' fill='%23000'/%3E%3C/svg%3E"
                                    alt="Icone Carrinho"
                                    className={header["nav__carrinho"]}
                                />

                                <div
                                    className={`${header["nav__items-carrinho"]} ${header["nav__items-carrinho--visivel"]}`}
                                >
                                    {qtdCarrinho(cart)}
                                </div>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;
