import "./Projetos.css";

function Projetos() {
    return (
        <section className="secao-projetos">
            <h2>Projetos</h2>
            <ul className="lista-projetos">
                <li className="item-projeto">
                    <a href="https://github.com/dev-julyellens/projeto-1">Projeto 1</a>
                    <img src="src/assets/facebook.png" alt="Projeto 1" />
                </li>
                <li className="item-projeto">
                    <a href="https://github.com/dev-julyellens/projeto-2">Projeto 2</a>
                    <img src="src/assets/tesla.png" alt="Projeto 2" />
                </li>
                <li className="item-projeto">
                    <a href="https://github.com/dev-julyellens/projeto-3">Projeto 3</a>
                    <img src="src/assets/vite.png" alt="Projeto 3" />
                </li>
            </ul>
        </section>
    );
}

export default Projetos;
