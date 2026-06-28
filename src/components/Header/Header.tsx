import "./Header.css";
export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span className="logoText">TB</span>
      </div>
      <nav className="nav">
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contatos</a>
        <a href="#curriculum" className=".curriculum">
          Curriculum
        </a>
      </nav>
    </header>
  );
}
