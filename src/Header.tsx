import "./Header.css";
function Header() {
  return (
    <header className="header">
      <h1>@dev-julyellens</h1>
      <ul className="links">
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Sobre Mim</a>
        </li>
        <li>
          <a href="">Projetos</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
