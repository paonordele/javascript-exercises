const removeFromArray = function(array1, delItem1, delitem2, delitem3, delitem4) 
{
        var arraydeleted = array1.splice(delItem1-1,1);
        if (delitem2>0)
        {   
        if(delitem2 == 3)
            arraydeleted = array1.splice(delitem2-2,1);
        else     
            arraydeleted = array1.splice(delitem2-1,1);

        if (delitem3>0)
        {
            arraydeleted = array1.splice(delitem3-3,1);
            if (delitem4>0)
            {
                arraydeleted = array1.splice(delitem4-4,1);
            }
        }
    }

    console.log("El elemento eliminado es :" , arraydeleted);       
    console.log("El arreglo con elemento eliminado es :" , array1); 
    return array1;   
};

//Do not edit below this line
module.exports = removeFromArray;

//removeFromArray(["hey", 2, 3, "ho"], "hey", 3);
