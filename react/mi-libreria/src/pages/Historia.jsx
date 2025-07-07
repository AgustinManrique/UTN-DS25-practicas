import BookCard from '../components/BookCard';

function Historia() {
  return (
    <main>
      <h2>Historia</h2>
      <div className="libros-lista">
        {[ 
          { img: "libro17.jpg", titulo: "Guns, Germs, and Steel", autor: "Jared Diamond", desc: "Factores que moldearon la historia." },
          { img: "libro18.jpg", titulo: "La Segunda Guerra Mundial", autor: "Antony Beevor", desc: "Análisis detallado del conflicto." },
          { img: "libro19.jpg", titulo: "El mundo de ayer", autor: "Stefan Zweig", desc: "Memorias del siglo XX." },
          { img: "libro20.jpg", titulo: "Historia de la Revolución Francesa", autor: "Jules Michelet", desc: "Narrativa de la revolución." },
          { img: "libro21.jpg", titulo: "La historia del siglo XX", autor: "Eric Hobsbawm", desc: "Visión global del siglo pasado." },
          { img: "libro3.jpg", titulo: "Breve historia de la humanidad", autor: "Yuval Noah Harari", desc: "Resumen histórico fascinante." }
        ].map((libro, i) => (
          <BookCard key={i} {...libro} />
        ))}
      </div>
    </main>
  );
}
export default Historia;