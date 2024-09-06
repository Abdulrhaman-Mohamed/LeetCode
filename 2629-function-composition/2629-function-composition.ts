type F = (x: number) => number;

function compose(functions: F[]): F {
    
    return function(x) {
        var num = x;
        for(let i = functions.length - 1 ; i >=0;i-- ){
            num = functions[i](num)
        }
        return num
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */