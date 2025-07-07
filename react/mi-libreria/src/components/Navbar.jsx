import { AppBar, Toolbar, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <AppBar position="static" sx={{ bgcolor: '#1976d2' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', gap: 2, flex: 1 }}>
          <Button color="inherit" component={Link} to="/ficcion">Ficción</Button>
          <Button color="inherit" component={Link} to="/poesia">Poesía</Button>
          <Button color="inherit" component={Link} to="/historia">Historia</Button>
          <Button color="inherit" component={Link} to="/infantil">Infantil</Button>
        </Box>
        <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Button
            component={Link}
            to="/"
            variant="outlined"
            sx={{
              borderColor: '#1976d2',
              color: '#1976d2',
              background: '#fff',
              fontWeight: 600,
              '&:hover': {
                borderColor: '#1976d2',
                color: '#fff',
                background: '#1976d2',
              },
            }}
          >
            Inicio
          </Button>
        </Box>
        <Box sx={{ display: 'flex', gap: 2, flex: 1, justifyContent: 'flex-end' }}>
          <Button color="inherit" component={Link} to="/contacto">Contacto</Button>
          <Button
            component={Link}
            to="/registro"
            variant="contained"
            sx={{ bgcolor: '#ffb300', color: '#fff', fontWeight: 600, borderRadius: 3, boxShadow: 2, '&:hover': { bgcolor: '#ff9800' } }}
          >
            Registrarse
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
// mi nav bar con links, probando como funcan las cosas con react router, que es lo que me permite navegar entre las diferentes paginas de la aplicacion, sin recargar cada pagina.
// me interesa la idea de que cada pagina sea un componente, y que al hacer click en un link, se muestre el componente correspondiente sin recargar la pagina.
// no lo implemente nunca en ninguna aplicacion, pero me parece que es una buena forma de hacerlo, y ademas es lo que se usa en react actualmente segun compañeros avanzados en la carrera-