/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    var counter = 1;
    if(arr.length === 1)
    {
        return arr[0];
    }
    for(var i = 1; i < arr.length ; i++)
    {
        if(arr[i] !== arr[i-1])
            counter=1;
        else
        counter++;

        if(counter > arr.length*0.25)
        return arr[i];

    }
};