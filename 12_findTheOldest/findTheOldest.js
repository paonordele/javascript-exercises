const findTheOldest = function(OldestExt)
{
    var length = OldestExt.length;
    var Ages = [{name:"",age: 0},{name:"",age: 0},{name:"",age: 0}];
    var Older = [{name:"",age: 0}];
    var oldest = 0;


    for(var i=0 ; i<length ; i++)
    {
        Ages[i].name = OldestExt[i].name;
        Ages[i].age =  OldestExt[i].yearOfDeath - OldestExt[i].yearOfBirth;
        
    }
    //console.log(Ages);
    //console.log(Older);
    
    for(var j=0; j<length;j++)
    {
       
        if( Ages[j].age > oldest)
        {
           oldest = Ages[j].age;
           Older.age = Ages[j];
           Older.name = Ages[j].name;
           //console.log(Older);
      
        }
              
    }
    console.log(Older.name);
    return Older.name;
    
};

/*findTheOldest([
    {
   name: "Carly",
   yearOfBirth: 1942,
         yearOfDeath: 1970,
   },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
);
*/

// Do not edit below this line
module.exports = findTheOldest;
