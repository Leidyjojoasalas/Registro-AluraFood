import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarinput } from "./validaciones";

const DatosEntrega = ({updateStep}) => {

  const [address, setAddress] = useState({value:"", valid:null})
  const [city, setCity] = useState({value:"", valid:null})
  const [province, setProvince] = useState({value:"", valid:null})

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
         updateStep(3);     
         console.log(address, city, province )  
      }}

    >
      <TextField
        label="Dirección"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarinput(value)
          setAddress({value, valid})
          console.log(value, valid)
        }
        }
        error={address.valid === false}
        helperText={address.valid === false && "ingresa al menos 5 caracteres"}
      />
      <TextField
        label="Ciudad"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarinput(value)
          setCity({value, valid})
          console.log(value, valid)
        }
        }
        error={city.valid === false}
        helperText={city.valid === false && "ingresa al menos 5 caracteres"}
      />
      <TextField
        label="Estado/Provincia"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={province.value}
        onChange={(input) => {
          const value = input.target.value
          const valid = validarinput(value)
          setProvince({value, valid})
          console.log(value, valid)
        }
        }
        error={province.valid === false}
        helperText={province.valid === false && "ingresa al menos 5 caracteres"}  
      />
      <Button variant="contained" type="submit">
        Crear cuenta
      </Button>
    </Box>
  );
};

export default DatosEntrega;
