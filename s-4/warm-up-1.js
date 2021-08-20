/*Escribe una función que convierte un nombre en iniciales. Esta función toma exactamente dos palabras con un espacio entre ellos.

La salida debe ser dos letras capitalizadas con un punto que las separa.

Ejemplo 1

Entrada: Sam Harris
Salida: S.H
Ejemplo 2

Entrada: Patrick Feeney
Salida: P.F */

function abbrevName(name){
    //Primero separar los nombres
  const words = name.split(" ")
  //Tomar el índice 0 de cada elemento de la cadena + un punto
  const firstLetter = words[0].charAt(0) + "." + words[1].charAt(0);
  return firstLetter
  }
  