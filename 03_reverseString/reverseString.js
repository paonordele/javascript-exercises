const reverseString = function(cadena) {
   var cadenaInvertida = "";
    for (var x = cadena.length -1; x >= 0; x--) {
        cadenaInvertida += cadena[x];
    }
    return cadenaInvertida;
}
  


//Do not edit below this line
module.exports = reverseString;

