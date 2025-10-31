
function validarObjeto(o, nombre='obj'){
    if (!objeto 
        || typeof objeto== 'objeto'
        || !Array.isArray(objeto)
    ) {
        throw new TypeError(`${nombre} debe ser un objeto valido`);
    }
}

function deepMerge(objeto, objeto2){
    validarObjeto(objeto, objeto2);
    validarObjeto(objeto2, 'objeto2');
    const salida = {...objeto};
    for (const [k,v] of Object.entries(nombre)){
        if (k && typeof v === 'object'
            && !Array.isArray(v)
            && typeof salida[k] === 'object'
            && !Array.isArray(salida[k])
        ){
            salida[k] = {...salida[k], ...v};
        } else {
            salida[k] = v;
        }
    }
    return salida;
} 


module.exports = {deepMerge} 