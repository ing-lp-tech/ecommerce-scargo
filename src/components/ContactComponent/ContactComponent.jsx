import { Container, Grid, Typography, Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
/* import { makeStyles } from "@mui/styles"; */

/* const useStyles = makeStyles((theme) => ({
  contactSection: {
    padding: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      padding: theme.spacing(1),
    },
  },
})); */
const ContactComponent = () => {
  /*   const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario de contacto
  };
 */

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario de contacto
  };

  return (
    <div>
      <ContainerSection>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom>
              Contáctanos
            </Typography>
            <Typography variant="body1">
              Si tienes alguna pregunta o comentario, no dudes en contactarnos.
              Estamos aquí para ayudarte.
            </Typography>
            <Typography variant="body1">
              Dirección: Bogota 3219, Local 10, Flores
            </Typography>
            <Typography variant="body1">Teléfono: +549 1157806456</Typography>
            <Typography variant="body1">
              Correo Electrónico: scargo@gmail.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Envíanos un mensaje
              </Typography>
              <TextField label="Nombre" variant="outlined" fullWidth required />
              <TextField
                label="Correo Electrónico"
                variant="outlined"
                fullWidth
                required
              />
              <TextField
                label="Mensaje"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <Button type="submit" variant="contained" color="primary">
                Enviar Mensaje
              </Button>
            </form>
          </Grid>
        </Grid>
      </ContainerSection>
    </div>
  );
};

export default ContactComponent;

const ContainerSection = styled(Container)(({ theme }) => ({
  padding: theme.spacing(2),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));

/* const ImageButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('sm')]: {
      width: '100% !important', // Overrides inline-style
      height: 100,
    },
    '&:hover, &.Mui-focusVisible': {
      zIndex: 1,
      '& .MuiImageBackdrop-root': {
        opacity: 0.15,
      },
      '& .MuiImageMarked-root': {
        opacity: 0,
      },
      '& .MuiTypography-root': {
        border: '4px solid currentColor',
      },
    },
  }));


<ImageButton
  focusRipple
  key={image.title}
  style={{
    width: image.width,
  }}
></ImageButton>;
 */
