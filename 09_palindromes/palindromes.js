const palindromes = function (string1) {
    var palindrome = [];
    var len = (string1.length)-1;
    var IsPalindrome = true;

    for(var i=len; i>=0; i--){
        var lenpal = (len-i)
        palindrome[lenpal] = string1[i];
    }
    for(var j=len; j>=0; j--){
        var lenpal = (len-i)
        if (string1[i] != palindrome[lenpal]){
            IsPalindrome = false;
        }    
    }
        
    return IsPalindrome;
       
};


// Do not edit below this line
module.exports = palindromes;
