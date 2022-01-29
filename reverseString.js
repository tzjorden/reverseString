//Method 1 

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');


//Method 2

function reverseString(str) {

  let reverseArr = [...str].reverse().join(' ')
  return reverseArr
}

//Method 3

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i > -1; --i) {
    reversed = reversed + str[i];
  }

  return reversed;
}


//Ruby Method 

// def reverse_string(str)
//   reversed_str = ""

//   str.chars.each do |char|
//     reversed_str = char + reversed_str
//   end

//   reversed_str
// end