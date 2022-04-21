const leapYears = function(year) {
    var leapReturn = true;
    var divisible= 0;
    var rounded = 0;
    var divHundred = 0;
    var roundedHundred = 0;
    var divFourHundred = 0;
    var roundedFourHundred = 0;

    divisible = (year / 4)
    rounded = divisible - Math.round(divisible);
    
    divHundred = year / 100;
    roundedHundred = divHundred - Math.round(divHundred);
    divFourHundred = year / 400;
    roundedFourHundred = divFourHundred - Math.round(divFourHundred);

    if (rounded == 0 && roundedHundred!=0) 
    {
        leapReturn = true;
        if(roundedFourHundred == 0)
            leapReturn = false;
   
             
    }
    else
    {       console.log("NO LEAP");
            leapReturn = false;
    }
    
    console.log(leapReturn);
    return leapReturn;
};

// Do not edit below this line
module.exports = leapYears;
//leapYears(1600);
