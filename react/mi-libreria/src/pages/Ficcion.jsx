import BookCard from '../components/BookCard';

function Ficcion() {
  return (
    <main>
      <h2>Ficción</h2>
      <div className="libros-lista">
        {[
          { img: "libro5.jpg", titulo: "El nombre del viento", autor: "Patrick Rothfuss", desc: "La historia de Kvothe, un joven prodigio." },
          { img: "libro6.jpg", titulo: "1984", autor: "George Orwell", desc: "Novela distópica sobre vigilancia y control." },
          { img: "libro7.jpg", titulo: "Dune", autor: "Frank Herbert", desc: "Epopeya de ciencia ficción en un planeta desértico." },
          { img: "libro8.jpg", titulo: "Crónica del pájaro que da cuerda al mundo", autor: "Haruki Murakami", desc: "Una historia surrealista y misteriosa." },
          { img: "libro9.jpg", titulo: "Fahrenheit 451", autor: "Ray Bradbury", desc: "Sociedad donde los libros están prohibidos." },
          { img: "libro10.jpg", titulo: "Neuromante", autor: "William Gibson", desc: "Pionero del cyberpunk." }
        ].map((libro, i) => (
          <BookCard key={i} {...libro} />
        ))}
      </div>
    </main>
  );
}

export default Ficcion;
