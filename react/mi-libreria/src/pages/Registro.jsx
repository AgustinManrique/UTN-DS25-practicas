function Registro() {
  return (
    <main>
      <h2>Formulario de Registro</h2>
      <form action="#" method="post">
        <label htmlFor="nombre">Nombre:</label><br />
        <input type="text" id="nombre" name="nombre" required /><br /><br />

        <label htmlFor="apellido">Apellido:</label><br />
        <input type="text" id="apellido" name="apellido" required /><br /><br />

        <label htmlFor="fecha">Fecha de Nacimiento:</label><br />
        <input type="date" id="fecha" name="fecha" required /><br /><br />

        <label htmlFor="email">Email:</label><br />
        <input type="email" id="email" name="email" required /><br /><br />

        <label htmlFor="password">Contraseña:</label><br />
        <input type="password" id="password" name="password" required /><br /><br />

        <label>Sexo:</label><br />
        <input type="radio" id="sexoM" name="sexo" value="M" required />
        <label htmlFor="sexoM">Masculino</label><br />
        <input type="radio" id="sexoF" name="sexo" value="F" />
        <label htmlFor="sexoF">Femenino</label><br />
        <input type="radio" id="sexoO" name="sexo" value="O" />
        <label htmlFor="sexoO">Otro</label><br /><br />

        <label htmlFor="tema">Tema Favorito:</label><br />
        <select id="tema" name="tema">
          <option value="ficcion">Ficción</option>
          <option value="poesia">Poesía</option>
          <option value="historia">Historia</option>
          <option value="infantil">Infantil</option>
        </select><br /><br />

        <button type="submit">Registrarse</button>
      </form>
    </main>
  );
}
export default Registro;

// formulario de registro con los datos pedidos en el enunciado, no me parecio agregar mas nada porque no lo iba a utilizar despues en la pagina.