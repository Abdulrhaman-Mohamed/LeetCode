/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
   var checker = true;
    var arr =[];
    for(var i = left; i<= right ; i++)
    {
        
        if(i>9)
        {
            //debugger
            let number = i;
            while(number > 0)
            {
                mods = number%10;
                if(i%mods !== 0 )
                {
                    checker =false;
                    break;
                }
                number = Math.floor(number / 10);
            }
            if(checker)
            arr.push(i);
            else
            checker=true;
        }
        else
        arr.push(i);
    }
    return arr;
};