import { Box, TextField, Button, Typography, Paper } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

function Contacto() {
  return (
    <main>
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="70vh">
        <Typography variant="h4" component="h2" gutterBottom textAlign="center">Contactate con nosotros</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" gap={6} width="100%" maxWidth={900} mt={2}>
          <Paper elevation={3} sx={{ p: 4, minWidth: 350, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom textAlign="center">Escribe tu situación</Typography>
            <Box component="form" noValidate autoComplete="off" width="100%">
              <TextField fullWidth margin="normal" required id="nombre" name="nombre" label="Nombre" />
              <TextField fullWidth margin="normal" required id="email" name="email" label="Email" type="email" />
              <TextField fullWidth margin="normal" required id="mensaje" name="mensaje" label="Mensaje" multiline rows={5} />
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Enviar</Button>
            </Box>
          </Paper>
          <Paper elevation={3} sx={{ p: 4, minWidth: 300, maxWidth: 350, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', bgcolor: '#1976d2' }}>
            <Typography variant="h6" gutterBottom sx={{ color: '#fff', mb: 3, mt: 1, letterSpacing: 1.5, fontWeight: 700, textTransform: 'uppercase', textAlign: 'center' }}>
              O ENCONTRANOS AQUÍ
            </Typography>
            <Box display="flex" alignItems="center" mb={2} width="100%">
              <LocationOnIcon sx={{ color: '#fff', mr: 1 }} />
              <Typography variant="body1" sx={{ color: '#fff' }}>Calle 14c 1395, City Bell</Typography>
            </Box>
            <Box display="flex" alignItems="center" mb={2} width="100%">
              <PhoneIcon sx={{ color: '#fff', mr: 1 }} />
              <Typography variant="body1" sx={{ color: '#fff' }}>+54 9 2213045065</Typography>
            </Box>
            <Box display="flex" alignItems="center" width="100%">
              <EmailIcon sx={{ color: '#fff', mr: 1 }} />
              <Typography variant="body1" sx={{ color: '#fff' }}>agustinmanriquee@gmail.com</Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </main>
  );
}

export default Contacto;

// contacto, datos personalizados de lo que pedia el enunciado.