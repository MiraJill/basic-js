//to reverse a string
function reverseString(string) {
    let revString = '';
    for(let char of string) {
        revString = char + revString;
    }  
    return revString;
}
console.log(reverseString('mira'));


//to camelCase
function toCamelCase(input) {  
    let result = ''
    for(let i=0; i< input.length; i++){
      if(input[i] === '_' || input[i] === '-'){
        i++;
        result += input[i].toUpperCase()
      } else {
        result+= input[i]
      }
    }
    return result;
}
console.log(toCamelCase('Yes_no_block'));