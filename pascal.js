
function pascal(number) {
    if(number<=0){
        console.log("Ingrese un valor mayor que 0. Si ingresa un número decimal, se le aplicará función piso.");
    }
    else{
        var wholeTr = [[1],[1,1]]; //Vector del triángulo completo
        for(i=1; i<number; i++){
           var byRows = [1]; //Inicializo primera posición en 1. (Se usa para llevar de a fila completa al triángulo)
            for (j = 1; j<wholeTr.length; j++){
                byRows[j]= wholeTr[i][j-1] + wholeTr[i][j]; //Sumo valores
            }
            byRows.push(1); // último 1 de cada fila
            wholeTr.push(byRows); //Ingreso la fila al fondo del triángulo.
            //console.log(wholeTr[0]);
        }    
    }
    return wholeTr;
}

function printP(arr){
    for (i=0; i<arr.length; i++){
        console.log(arr[i].join(" - "));
    }
}

/*Correr esto para probar el código
var holi = pascal(6);
printP(holi);
*/
