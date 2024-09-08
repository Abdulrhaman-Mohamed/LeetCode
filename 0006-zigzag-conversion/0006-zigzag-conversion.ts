function convert(s: string, numRows: number): string {
    if(numRows === 1) return s
    let dir = true, round = 1;
    const newArr = new Array(numRows).fill("");
    newArr[0] = s[0]
    for (let i = 1; i < s.length; i++) {
        newArr[round] += s[i]
        if (round <= 0 || round >= numRows - 1) dir = !dir
        if (dir) round++
        if (!dir) round--
    }
    return newArr.join("")
};