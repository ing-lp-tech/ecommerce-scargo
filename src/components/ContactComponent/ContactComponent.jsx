import {
  Container,
  Grid,
  Typography,
  Button,
  TextField,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import "../../styles/contact/contact.css";
const ContactComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para procesar el formulario de contacto
  };

  return (
    <div>
      <div className="titleContac">
        <h2>Contactanos</h2>
      </div>
      <ContainerSection>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" gutterBottom style={{ fontSize: "14px" }}>
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
            <form className="form" onSubmit={handleSubmit}>
              <Typography
                variant="h6"
                gutterBottom
                style={{ fontSize: "14px" }}
              >
                Envíanos un mensaje
              </Typography>
              {/* <div className="datos">
                <TextField
                  label="Nombre"
                  variant="outlined"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                  fullWidth
                  required
                />

                <TextField
                  label="Correo Electrónico"
                  id="outlined-size-small"
                  defaultValue="Small"
                  size="small"
                  fullWidth
                  variant="outlined"
                  required
                />
              </div> */}
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  {/* El primer TextField ocupará 4 columnas de las 12, es decir, 1/3 del ancho total */}
                  <TextField
                    label="Nombre"
                    variant="outlined"
                    id="outlined-size-small"
                    /*  defaultValue="Nombre" */
                    size="small"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={8}>
                  {/* El segundo TextField ocupará 8 columnas de las 12, es decir, 2/3 del ancho total */}
                  <TextField
                    label="Correo Electrónico"
                    id="outlined-size-small"
                    /* defaultValue="Correo Electrónico" */
                    size="small"
                    fullWidth
                    variant="outlined"
                    required
                  />
                </Grid>
              </Grid>
              <TextField
                label="Mensaje"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                required
              />
              <Box sx={{ width: 200, display: "flex", marginX: "auto" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="small"
                >
                  Enviar Mensaje
                </Button>
              </Box>
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
  marginBottom: theme.spacing(10),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(1),
  },
}));
