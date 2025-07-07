import BookCard from '../components/BookCard';

function Poesia() {
  return (
    <main>
      <h2>Poesía</h2>
      <div className="libros-lista">
        {[
          { img: "libro11.jpg", titulo: "Leaves of Grass", autor: "Walt Whitman", desc: "Celebrando la naturaleza." },
          { img: "libro12.jpg", titulo: "Cien sonetos de amor", autor: "Pablo Neruda", desc: "Expresión intensa de amor." },
          { img: "libro13.jpg", titulo: "La tierra baldía", autor: "T.S. Eliot", desc: "Poema moderno sobre la desolación." },
          { img: "libro14.jpg", titulo: "Poemas y antipoemas", autor: "Nicanor Parra", desc: "Poemas irreverentes y originales." },
          { img: "libro15.jpg", titulo: "El cuervo y otros poemas", autor: "Edgar Allan Poe", desc: "Poemas góticos y misteriosos." },
          { img: "libro16.jpg", titulo: "Versos sencillos", autor: "José Martí", desc: "Poesía sencilla y profunda." }
        ].map((libro, i) => (
          <BookCard key={i} {...libro} />
        ))}
      </div>
    </main>
  );
}

export default Poesia;
