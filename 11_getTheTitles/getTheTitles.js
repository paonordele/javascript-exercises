const getTheTitles = function(BookExt) {
    var length = BookExt.length;
    var Titles = [];

    for(var i=0; i<length ; i++){
        Titles[i] =  BookExt[i].title; 
    }

    console.log(Titles);
    return Titles;

};

// Do not edit below this line
module.exports = getTheTitles;
