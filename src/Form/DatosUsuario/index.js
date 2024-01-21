import React, {useState} from "react";
import { TextField, Button, Box } from "@mui/material";
import { validarEmail, validarPassword } from "./validaciones";


const DatosUsuario = ({updateStep}) => {
  const [email, setEmail] = useState({value: "", valid: null})
  const [password, setpassword] = useState({value: "abc", valid: null})


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
          if(email.valid && password.valid){
            console.log("siguiente formúlario");
            console.log(email, password);
            updateStep(1);
          }else{
            console.log("no hacer nada");
          }
        }}
      >
        <TextField
          label="Correo electrónico"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={email.valid === false}
          helperText={email.valid === false && "Ingresa un correo electrónico válido"}
          value= {email.value}
          onChange={(input) => {
            const email = input.target.value
            const valido = validarEmail(email) 
            setEmail({value: email, valid: valido})  //se puede usar de esta forma        
          }}
       
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
          error={password.valid === false}
          helperText={password.valid === false && "Ingresa una contraseña válida, al menos 8 caracteres máximo 20"}
          value= {password.value}
          onChange={(input) => {
            const password = input.target.value           
            setpassword({ value: password, valid: validarPassword(password) }) //o de esta otra
          } }        
        />
        <Button variant="contained" type="submit">
          Siguiente
        </Button>
      </Box>
    );
  
}

export default DatosUsuario;
