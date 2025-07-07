import { Box, ButtonBase, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const destacados = [
  {
    genero: 'Ficción',
    link: '/ficcion',
    img: '/img/libro1.jpg',
    titulo: 'La Sombra del Viento',
    autor: 'Carlos Ruiz Zafón',
  },
  {
    genero: 'Poesía',
    link: '/poesia',
    img: '/img/libro2.jpg',
    titulo: 'Veinte poemas de amor',
    autor: 'Pablo Neruda',
  },
  {
    genero: 'Historia',
    link: '/historia',
    img: '/img/libro3.jpg',
    titulo: 'Sapiens',
    autor: 'Yuval Noah Harari',
  },
  {
    genero: 'Infantil',
    link: '/infantil',
    img: '/img/libro4.jpg',
    titulo: 'El Principito',
    autor: 'Antoine de Saint-Exupéry',
  },
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 220,
  width: 170,
  margin: theme.spacing(1.5),
  borderRadius: 16,
  overflow: 'hidden',
  boxShadow: theme.shadows[3],
  transition: theme.transitions.create(['box-shadow', 'transform']),
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    boxShadow: theme.shadows[6],
    transform: 'scale(1.04)',
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiTypography-root': {
      border: '3px solid #fff',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));

function Home() {
  return (
    <main>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 700, mt: 2 }}>
          Bienvenido
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
        {destacados.map((libro, i) => (
          <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mx: 2 }}>
            <ImageButton
              focusRipple
              component={Link}
              to={libro.link}
            >
              <ImageSrc style={{ backgroundImage: `url(${libro.img})` }} />
              <ImageBackdrop className="MuiImageBackdrop-root" />
              <Image>
                <Typography
                  component="span"
                  variant="h6"
                  color="inherit"
                  sx={{
                    position: 'relative',
                    p: 2,
                    fontWeight: 700,
                    letterSpacing: 1.2,
                    textShadow: '1px 1px 8px #000a',
                  }}
                >
                  {libro.genero}
                </Typography>
              </Image>
            </ImageButton>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mt: 1, textAlign: 'center' }}>
              {libro.titulo}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', textAlign: 'center' }}>
              {libro.autor}
            </Typography>
          </Box>
        ))}
      </Box>
    </main>
  );
}

export default Home;

// inicio  de la app, la idea son libros destacados con algun datito , con un link a la pagina de cada genero 
// asi si generase interes ese libro, poder ir a libros de ese tipo.