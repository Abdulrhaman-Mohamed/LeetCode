function generateParenthesis(n: number): string[] {
    let result: string [] = [];
    function backTrack(initStr : string , open : number , close : number){
        if(initStr.length  == 2 * n){
            result.push(initStr)
            return;
        }

        if(open < n) backTrack(initStr +"(" , open +1 , close)
        if(close < open) backTrack(initStr + ")" , open , close + 1)
    }
    backTrack("",0,0)
    return result;
};