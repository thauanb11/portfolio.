export function Header() {
  return (
    <header>
      <h1 className="flex flex-row items-center justify-between bg-amber-950">
        Thauan Bruno
      </h1>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contatos</a>
        <button>Curriculum</button>
      </nav>
    </header>
  );
}
