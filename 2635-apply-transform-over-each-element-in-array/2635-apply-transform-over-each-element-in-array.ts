function map(arr: number[], fn: (n: number, i: number) => number): number[] {
    // return arr.map((n,i)=>fn(n,i))
    const newArr = [];
    for (let i = 0; i < arr.length; i++) 
            newArr.push(fn(arr[i],i))
    
    return newArr;
};