// FUNCTION DEFINITION(S)

// USE THIS FUNCTION TO GENERATE A RANDOM NUMBER
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function decorateClassListWithAges(classList) {
  // creates an object for each string in the input array, with an age of 10 or 11
  var classListWithAges = [];
  for (var i = 0; i < classList.length; i++){
      var person = {};
      person.name = classList[i];
      person.age = getRandomIntInclusive(10, 11);
      classListWithAges.push(person);
  }
  // returns an array of these objects
  return classListWithAges;
}

// ASSERTION FUNCTION(S) TO BE USED
//test the getRandomIntInclusive function
function assertWithinRange(low, high, actual){
    if (actual>=low && actual <= high){
        return true;
    }else{
        return false;
    }
}
//assert the output/input with 
function testStudentList(input, output){
    for (var i = 0; i<input.length; i++){
        if (input[i] !== output[i].name){
            console.log("FAILED: Incorrect name at " + input[i]);
            return;
        }
        
        if (assertWithinRange(10,11,output[i].age) === false){
            console.log("FAILED: Incorrect age at " + output[i]);
            return;
        }
    }
    console.log('passed');
    return;
}


// TESTS CASES
var classListTrue = ["Joe", "Jack", "John"];
var agesTrue = decorateClassListWithAges(classListTrue);
testStudentList(classListTrue, agesTrue);
