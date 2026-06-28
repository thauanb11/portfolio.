import MinhaImagem from "../../assets/profile.jpg";
import "./Hero.css";

export function Hero() {
  return (
    <section className="hero">
      <div className="text">
        <h1 className="title">Thauan Bruno Guedes</h1>
        <p className="subtitle">Desenvolvedor de Software FullStack </p>
        <p className="tagline">
          "Construindo software com propósito, precisão e durabilidade."
        </p>

        <a href="#projects" className="cta">
          View Projects
        </a>
      </div>
      <div>
        <img src={MinhaImagem} alt="Thauan Bruno" className="photo" />
      </div>
    </section>
  );
}
