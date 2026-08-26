import Header from "./componentes/Header/Header";
import Conteudo from "./componentes/Conteudo/Conteudo";
import Projetos from "./componentes/Projetos/Projetos";
import "./App.css";
import { useState } from "react";

function App() {
    const [projetos, setProjetos] = useState([
        {
            link: "https://github.com/dev-julyellens/projeto-1",
            nome: "Projeto 1",
            imagem: "src/assets/facebook.png"
        },
        {
            link: "https://github.com/dev-julyellens/projeto-2",
            nome: "Projeto 2",
            imagem: "src/assets/tesla.png"
        },
        {
            link: "https://github.com/dev-julyellens/projeto-3",
            nome: "Projeto 3",
            imagem: "src/assets/vite.png"
        }
    ]);
    return (
        <div className="conteudo-principal">
            <Header />
            <Conteudo />
            <Projetos projetos={projetos}/>
            <footer className="footer">
                <p>Feito por @dev-julyellens</p>
            </footer>
        </div>
    );
}

export default App;
