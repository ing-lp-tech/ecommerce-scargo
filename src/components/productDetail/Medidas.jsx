import Avatar from "@mui/material/Avatar";

import Stack from "@mui/material/Stack";
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const Medidas = ({ talles }) => {
  return (
    <Stack direction="row" spacing={2} justifyContent={"center"}>
      {talles.map((talla, index) => (
        <>
          <Avatar key={index} sx={{ bgcolor: "#a5a2a2" }} variant="rounded">
            <span className="talla-value">{talla}</span>
          </Avatar>
        </>
      ))}
    </Stack>
  );
};

export default Medidas;
