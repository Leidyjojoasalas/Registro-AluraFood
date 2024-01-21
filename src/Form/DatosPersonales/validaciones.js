export const validarNombre = (nombre) => {
console.log(nombre);
const length = nombre.length;

return (length > 1 && length < 30) ? true : false 
};

export const validarApellidos = (apellidos) => {
    console.log(apellidos);
    const length = apellidos.length;

return (length > 1 && length < 50) ? true : false 
};

export const validarTelefono = (apellidos) => {
    console.log(apellidos);
    const length = apellidos.length;

return (length > 8 && length < 14) ? true : false 
};