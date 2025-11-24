
function validarEmail(email) {
    if (typeof email !== 'string') throw new Error('email debe ser un string'); 
    const regex = /^[\w.-]+@[\w.-]+\.[a-z]{2,}$/i; 
    return regex.test(email);
}

module.exports = { validarEmail } 
