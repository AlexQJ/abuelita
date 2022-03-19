

alert('La abuelita a cualquier cosa que digas te respondera gritando: \n¡¿EH?! ¡NO TE ESCUCHO, HIJO!\nSi le gritas para tratar de esucharte lo malinterpretara y te responderá: \nNO, NO DESDE 1983\nPara desperdirte de ella tienes que decir 3 veces "ADIOS TQM"');
let mensaje = prompt('Dile algo a la abuela');
let despedir = 0;

function hayMayusculas(mensaje){
    return mensaje === mensaje.toUpperCase();
}

while (despedir < 2){
    
    if(hayMayusculas(mensaje)){
        if(mensaje === 'ADIOS TQM'){
            despedir++;
        }
        mensaje = prompt('NO, NO DESDE 1983');

    }else if(hayMayusculas(mensaje) == false){
        if(mensaje === 'ADIOS TQM'){
            despedir++;
        }
        mensaje = prompt('¡¿EH?! ¡NO TE ESCUCHO, HIJO!');
    }
}