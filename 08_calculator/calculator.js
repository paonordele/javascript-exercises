const add = function(number1,number2) {
	var sum = 0;

  sum = number1 + number2;

  console.log(sum);
  return sum;

};

const subtract = function(number1, number2) {
  var subs = 0;

  subs = number1 - number2;

  console.log(subs);
  return subs;

	
};

const sum = function(array1) 
{
   var sum1 = 0;
   var length = array1.length;

        
   for(var i=0; i < length ; i++)
   {
     sum1 += array1[i];
   }
  
   return sum1;
};

const multiply = function(array2) 
{
  var mult = 1;
  var length = array2.length;

  for(var j=0; j < length ; j++){
    mult= mult * array2[j];
  }

  return mult;
};

const power = function(number1,power) {

  var x = Math.pow(number1, power);

  return x;
	
};

const factorial = function(number1) {
  var total = 1; 

	for (i=1; i<=number1; i++) {
		total = total * i; 
	}
	return total; 
};
	


  
//Do not edit below this line
module.exports = {
add,
subtract,
sum,
multiply,
power,
factorial
};
