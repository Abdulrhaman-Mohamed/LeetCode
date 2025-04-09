function longestPalindrome(s: string): string {
let start = 0, end = 0;

const expandAroundCenter = (left , right) =>{
    while(left>= 0 && right < s.length && s[left] === s[right]){
        left--;
        right++;
    }

    if((right - left - 1) > (end - start)){
        start = left + 1;
        end = right - 1;
    }
}

for(let i = 0; i < s.length; i++){
    expandAroundCenter(i, i); // odd length palindromes
    expandAroundCenter(i, i + 1); // even length palindromes
}

return s.slice(start, end + 1); // return the longest palindromic substring
};