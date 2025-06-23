function Contacto() {
  return (
    <main>
      <h2>Contacto</h2>
      <p>Dirección: Calle 14c 1395, City Bell</p>
      <p>Teléfonos: +54 9 2213045065</p>
      <p>Email: agustinmanriquee@gmail.com</p>

      <h3>Formulario de Contacto</h3>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label><br />
        <input type="text" id="nombre" name="nombre" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="mensaje">Mensaje:</label><br />
        <textarea id="mensaje" name="mensaje" rows="5" required></textarea><br /><br />

        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}
export default Contacto;

// contacto, datos personalizados de lo que pedia el enunciado- 