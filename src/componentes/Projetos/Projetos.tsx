import "./Projetos.css";

function Projetos(props: { projetos: any[] }) {
    return (
        <section className="secao-projetos">
            <h2>Projetos</h2>
            <ul className="lista-projetos">
                {props.projetos.map((projeto) => (
                    <li className="item-projeto">
                        <a href={projeto.link} target="_blank">
                            {projeto.nome}
                        </a>
                        <img src={projeto.imagem} alt={projeto.nome} />
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Projetos;
