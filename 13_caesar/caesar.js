const caesar = function(string1, amount) {
    

    if (amount < 0) 
    {
        return caesar(string1, amount + 26);
    }
    

      var output = "";
    
     
      for (var i = 0; i < string1.length; i++) {
       
        var c = string1[i];
    
        if (c.match(/[a-z]/i)) {
         
          var code = string1.charCodeAt(i);
    
          if (code >= 65 && code <= 90) {
            c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
          }
    
         
          else if (code >= 97 && code <= 122) {
            c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
          }
        }
    
      
        output += c;
      }
    
   
      return output;
};



// Do not edit below this line
module.exports = caesar;
