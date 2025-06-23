function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Librería Lectura Viva</p>
      <p><a href="#">Términos y condiciones</a></p>
      <div className="redes">
        <a href="#">Facebook</a> | <a href="#">Instagram</a> | <a href="#">Twitter</a>
      </div>
    </footer>
  );
}

export default Footer;
// El footer como lo defini antes, todavia no entiendo por que el ampersand copy inserta un logo de copyright, pero bueno, es lo que hay.
// el footer es un componente que se va a mostrar en todas las paginas, por eso lo importamos en el App.jsx y lo ponemos al final,
//  para que se muestre siempre al final de la pagina.
