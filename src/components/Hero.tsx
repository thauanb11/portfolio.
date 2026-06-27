import MinhaImagem from "../assets/profile.jpg";

export function Hero() {
  return (
    <section>
      <h1>Thauan Bruno Guedes</h1>
      <h2>Full Stack Software Developer </h2>
      <h3>Building software that stands the test of time.</h3>
      <h3>Crafting reliable, scalable anda meaningful digital experience.</h3>
      <img src={MinhaImagem} alt="" />
      <button>View Projects</button>
    </section>
  );
}
