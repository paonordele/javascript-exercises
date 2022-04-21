const ftoc = function(number) {
  var cels = 0;
  var rounded = 0;

  cels = ((number-32) * (5/9));
  rounded = Math.round(cels * 10)/10;
  
  console.log(rounded);
  return rounded;

};

const ctof = function(number) {
  var farh = 0;
  var rounded = 0;

  farh = ((number * (9/5)) + 32);
  rounded = Math.round(farh * 10)/10;

  console.log(rounded);
  return rounded;


};



// Do not edit below this line
module.exports = {
ftoc,
ctof
};
