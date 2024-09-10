function reverse(x: number): number {
    let num = new String(x) ;
    if (x < 0) x = -Number(num.split("").slice(1).reverse().join(""))
    else x =Number(num.split("").reverse().join(""))
    if (x < -2147483648 || x > 2147483647) return 0;
    else return x
};