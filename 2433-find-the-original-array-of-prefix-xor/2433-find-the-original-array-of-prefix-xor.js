/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
var res=[];
    res.push(pref[0]);
    for(var i =0;i< pref.length-1;i++)
        {
            res.push(pref[i]^pref[i+1])
        }
    return res;
};