function actualizarEdad(persona, edad){
    if(!persona || !typeof persona == 'object'){
        throw new TypeError ("persona inválida");
    }
    if (!Number.isInteger(edad) || edad <0){
        throw new TypeError ("edad inválida");
    }
    persona.edad = edad;
    return persona;
}
module.exports={actualizarEdad}