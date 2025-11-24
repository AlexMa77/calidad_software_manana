function maximo(arreglo){
    if(!Array.isArray(arreglo) || arreglo.length==0) 
        throw new TypeError("arreglo inválido");
    let mayor=0;
    for (let i=0; i<arreglo.length; i++){
        if(arreglo[i]>mayor || mayor==0){
            mayor=arreglo[i];
        }
    }
    return mayor;
}
module.exports={maximo} 