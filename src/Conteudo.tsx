import { useState } from "react";
import "./Conteudo.css";

function Conteudo() {
  const [artigo, setArtigo] = useState("");
  const imagem = "src/assets/programmer.webp";

  function clicouNoBotao() {
    setArtigo("Sou desenvolvedora de sistemas, tenho 5+ anos de experiência e sou apaixonada por tecnologia!");
  }

  return (
    <main className="conteudo">
      <section className="conteudo-texto">
        <h2 className="titulo-conteudo">Meu nome é @dev-julyellens</h2>
        <h3 className="subtitulo-conteudo"> Desenvolvedora de sistemas</h3>
        <button className="botao-saiba-mais" onClick={clicouNoBotao}>
          Saiba mais
        </button>
        <article>{artigo}</article>
      </section>
      <img className="imagem-programmer" src={imagem} alt="" />
    </main>
  );
}

export default Conteudo;
