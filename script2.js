function getValues(c, t) //declare a function to show string in output
{
    //show the given number of candidates and target number in the console 
    console.log("Input : Candidates = [" + c + "], Target = " + t); 
}

var getCombination = function(candidate, target)
{
    getValues(candidate,target); //call function

    var finalArray = []; //container for the combination arrays
    var length = candidate.length; //get number of values within candidate array
    candidate.sort((a, b) => a - b); //sort number list in ascending order

    console.log("Output: "); //add string in console 

    //execute backtracking algorithm or recursive method
    backtrackFunction(finalArray, [], 0, length, candidate, target); 
    return finalArray; 
};

var backtrackFunction = function(array, partial, index, len, cand, t)
{
    var temp = null; 
    if(t < 0) //if target is a negative number, end function execution 
        return; 
    if(t === 0) //if target is zero, create an empty nested array
        return array.push(partial); 

    for(var i = index; i < len; i++) //loop through the candidate array
    {
        if(cand[i] > t)
            break; //breaks loop and continues executing the code after the loop
        if(i > index && cand[i] === cand[i - 1])
            continue;
        
        temp = Array.from(partial); //creates a copy of an array-like object
        temp.push(cand[i]); //adds values to array
        backtrackFunction(array, temp, i + 1, len, cand, t - cand[i]);
    }
};

console.log(getCombination([2,5,2,1,2], 5));
