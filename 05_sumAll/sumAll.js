const sumAll = function(integer1, integer2) {
    var sum = 0;
    
    if(Number.isInteger(integer1) && Number.isInteger(integer2) == true)
    {
        if(integer1>0 && integer2>0)
        {
            if (integer1<integer2)
            {
                for (var i=integer1; i<=integer2; i++)
                {
                    sum+=i;
                }
            }
            else
            {
                for (var i=integer1; i>=integer2; i--)
                {
                    sum+=i;
                }
            } 
        }
        else
        {
            sum ="ERROR";
        }    
    }    
    else
    {
        sum ="ERROR";
    }    
    
   return sum;
};

// Do not edit below this line
module.exports = sumAll;
//sumAll("hola",1);
