function Home() {
  return (
    <main>
      <div className="libros-lista">
        <div className="libro-detalle">
          <h2><a href="/ficcion">Ficción</a></h2>
          <img src="/img/libro1.jpg" alt="Libro 1" />
          <h3>La Sombra del Viento</h3>
          <p><em>Carlos Ruiz Zafón</em></p>
        </div>
        <div className="libro-detalle">
          <h2><a href="/poesia">Poesía</a></h2>
          <img src="/img/libro2.jpg" alt="Libro 2" />
          <h3>Veinte poemas de amor</h3>
          <p><em>Pablo Neruda</em></p>
        </div>
        <div className="libro-detalle">
          <h2><a href="/historia">Historia</a></h2>
          <img src="/img/libro3.jpg" alt="Libro 3" />
          <h3>Sapiens</h3>
          <p><em>Yuval Noah Harari</em></p>
        </div>
        <div className="libro-detalle">
          <h2><a href="/infantil">Infantil</a></h2>
          <img src="/img/libro4.jpg" alt="Libro 4" />
          <h3>El Principito</h3>
          <p><em>Antoine de Saint-Exupéry</em></p>
        </div>
      </div>
    </main>
  );
}

export default Home;

// inicio  de la app, la idea son libros destacados con algun datito , con un link a la pagina de cada genero 
// asi si generase interes ese libro, poder ir a libros de ese tipo.