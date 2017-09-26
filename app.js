/*calcular la cantidad de
digitos de un número, por ej: 1986, deberá retornar 4
*/

function numberOfDigits(number){
  var counter = 0;
  var digits = number.toString(); //"1986"
  for(var i = 0; i < digits.length; i++){
      counter++;
  }
  return counter;
}

//i+=2 --> i = i + 2
//i++ ---> i = i + 1
