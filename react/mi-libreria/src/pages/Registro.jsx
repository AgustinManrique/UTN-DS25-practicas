import { Box, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Select, MenuItem, InputLabel, Typography, Paper } from '@mui/material';
import { useState } from 'react';

function Registro() {
  const [sexo, setSexo] = useState('');
  const [tema, setTema] = useState('ficcion');

  return (
    <main>
      <Typography variant="h4" component="h2" gutterBottom>¡Registrate aquí!</Typography>
      <Box display="flex" justifyContent="center" alignItems="stretch" gap={4}>
        <Paper elevation={3} sx={{ p: 4, minWidth: 350, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Box component="form" noValidate autoComplete="off">
            <TextField fullWidth margin="normal" required id="nombre" name="nombre" label="Nombre" />
            <TextField fullWidth margin="normal" required id="apellido" name="apellido" label="Apellido" />
            <TextField fullWidth margin="normal" required id="fecha" name="fecha" label="Fecha de Nacimiento" type="date" InputLabelProps={{ shrink: true }} />
            <TextField fullWidth margin="normal" required id="email" name="email" label="Email" type="email" />
            <TextField fullWidth margin="normal" required id="password" name="password" label="Contraseña" type="password" />
            <FormControl component="fieldset" margin="normal" fullWidth>
              <FormLabel component="legend">Sexo</FormLabel>
              <RadioGroup row name="sexo" value={sexo} onChange={e => setSexo(e.target.value)}>
                <FormControlLabel value="M" control={<Radio />} label="Masculino" />
                <FormControlLabel value="F" control={<Radio />} label="Femenino" />
                <FormControlLabel value="O" control={<Radio />} label="Otro" />
              </RadioGroup>
            </FormControl>
            <FormControl fullWidth margin="normal">
              <InputLabel id="tema-label">Tema Favorito</InputLabel>
              <Select labelId="tema-label" id="tema" name="tema" value={tema} label="Tema Favorito" onChange={e => setTema(e.target.value)}>
                <MenuItem value="ficcion">Ficción</MenuItem>
                <MenuItem value="poesia">Poesía</MenuItem>
                <MenuItem value="historia">Historia</MenuItem>
                <MenuItem value="infantil">Infantil</MenuItem>
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>Registrarse</Button>
          </Box>
        </Paper>
      </Box>
    </main>
  );
}

export default Registro;

// formulario de registro con los datos pedidos en el enunciado, no me parecio agregar mas nada porque no lo iba a utilizar despues en la pagina.