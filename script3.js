var numberOfCandy = function(rating) //declare function 
{
    console.log("Input rating : [" + rating + "]"); //show given integer array ratings
    if(rating.length === 0) //if there are no values in the array
        return 0;

    var candyArray = []; //create new array
    for(var i = 0; i < rating.length; i++) //loop through ratings list
        candyArray.push(1); //assign 1 candy to each child by default

    var bool = true; 
    while(bool) //will keep looping as long as specified condition is true
    {
        for(var i = 0; i < rating.length; i++) //loop through the array ratings
        {
            if(i != rating.length - 1 && rating[i] > rating[i + 1] && candyArray[i] <= candyArray[i + 1])
            {
                candyArray[i] = candyArray[i + 1] + 1; //amount of candy to be given will change if condition is met
                bool = true;
            }

            if(i > 0 && rating[i] > rating[i - 1] && candyArray[i] <= candyArray[i - 1])
            {
                candyArray[i] = candyArray[i - 1] + 1; //amount of candy to be given will change if condition is met
                bool = true;
            }
        }
        bool = false; 
    }

    var sum = 0;
    for(var i = 0; i < candyArray.length; i++) //loop through the list of assigned number of candies
    {
        sum += candyArray[i]; //add all values
    }
    return "Minimum number of candies to be distributed : " + sum; //show sum
};

console.log(numberOfCandy([1,0,2]));