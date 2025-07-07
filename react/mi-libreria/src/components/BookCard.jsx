import { Card, CardMedia, CardContent, Typography, Box } from '@mui/material';

function BookCard({ img, titulo, autor, desc }) {
  return (
    <Card sx={{ width: 220, borderRadius: 3, boxShadow: 3, transition: 'transform 0.18s, box-shadow 0.18s', '&:hover': { transform: 'translateY(-7px) scale(1.03)', boxShadow: 6, background: '#fffbe6' } }}>
      <CardMedia
        component="img"
        height="180"
        image={`/img/${img}`}
        alt={`Portada ${titulo}`}
        sx={{ objectFit: 'cover', borderRadius: 2, mt: 2, mx: 'auto', width: 120 }}
      />
      <CardContent sx={{ textAlign: 'center', p: 2 }}>
        <Typography variant="h6" component="div" sx={{ fontSize: '1.1rem', mb: 1, color: '#1976d2' }}>
          {titulo}
        </Typography>
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 1 }}>
          {autor}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BookCard; 