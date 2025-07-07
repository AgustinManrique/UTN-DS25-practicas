function BookCard({ img, titulo, autor, desc }) {
  return (
    <div className="libro-detalle">
      <img src={`/img/${img}`} alt={`Portada ${titulo}`} />
      <h3>{titulo}</h3>
      <p><em>{autor}</em></p>
      <p>{desc}</p>
    </div>
  );
}

export default BookCard; 