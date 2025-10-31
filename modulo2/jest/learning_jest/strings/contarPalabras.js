function contarPalabras(texto) {
    if (!texto || typeof texto !== 'string') {
        throw new TypeError("frase inválida");
    }
    const textoTrimmed= texto.trim();
    if (textoTrimmed==='')
        throw new TypeError("frase inválida");
    return textoTrimmed.split(/\s+/).length;
}
module.exports = {contarPalabras};
