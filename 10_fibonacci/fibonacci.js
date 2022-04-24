const fibonacci = function(number1) 
{
    var fibonacci = [];
    var IntNumber1 = Math.sign(number1);

    fibonacci[0] = 0;
    fibonacci[1] = 1;
    
    
    if(IntNumber1 == -1)
    {
        return "OOPS";
        //break;
    }
    
    for (var i = 2; i <=number1; i++) 
    {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }


    console.log(fibonacci);
    console.log(fibonacci[number1]);
    return fibonacci[number1];

};


// Do not edit below this line
module.exports = fibonacci;
