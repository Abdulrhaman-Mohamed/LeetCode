type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
    const cach = {}
    return function (...args) {
        var numCached:string = `${args[0]}`;
        if (args.length > 1) numCached = `${args[0]},${args[1]}`;
        if (cach[numCached]!==undefined) return cach[numCached]
        cach[numCached] = fn(...args)
        return cach[numCached]
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */