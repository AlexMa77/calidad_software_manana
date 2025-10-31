function enMayusculas(texto) {
    if (!texto || typeof texto !== 'string') {
        throw new TypeError("texto inválido");
    }
    return texto.toUpperCase();
}

module.exports = { enMayusculas };
