import "./Header.css";

function Header() {
    let links = [
        { nome: "Home", href: "/home" },
        { nome: "Sobre Mim", href: "/sobre-mim" },
        { nome: "Projetos", href: "/projetos" },
        { nome: "Contato", href: "/contato" },
    ];

    return (
        <header className="header">
            <h1>@dev-julyellens</h1>
            <ul className="links">
                {links.map((link) => {
                    return (
                        <li>
                            <a href={link.href}> {link.nome} </a>
                        </li>
                    );
                })}
            </ul>
        </header>
    );
}

export default Header;
