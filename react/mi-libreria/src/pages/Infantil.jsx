import BookCard from '../components/BookCard';

function Infantil() {
  return (
    <main>
      <h2>Infantil</h2>
      <div className="libros-lista">
        {[
          { img: "libro22.jpg", titulo: "Donde viven los monstruos", autor: "Maurice Sendak", desc: "Aventuras imaginarias para niños." },
          { img: "libro23.jpg", titulo: "Matilda", autor: "Roald Dahl", desc: "Niña con poderes especiales." },
          { img: "libro24.jpg", titulo: "Charlie y la fábrica de chocolate", autor: "Roald Dahl", desc: "Fábrica mágica y aventuras." },
          { img: "libro25.jpg", titulo: "El gato con botas", autor: "Charles Perrault", desc: "Cuento clásico de un gato astuto." },
          { img: "libro26.jpg", titulo: "La telaraña de Carlota", autor: "E.B. White", desc: "Amistad entre un cerdito y una araña." },
          { img: "libro4.jpg", titulo: "El principito", autor: "Antoine de Saint-Exupéry", desc: "Historia poética y filosófica." },
        ].map((libro, i) => (
          <BookCard key={i} {...libro} />
        ))}
      </div>
    </main>
  );
}
export default Infantil;