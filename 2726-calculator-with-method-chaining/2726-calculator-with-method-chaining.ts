class Calculator {
    private res : number;
    constructor(value: number) {
        this.res = value
    }
    
    add(value: number): Calculator {
        return new Calculator(this.res + value);
    }
    
    subtract(value: number): Calculator {
        return new Calculator(this.res - value);
    }
    
    multiply(value: number): Calculator {
        return new Calculator(this.res * value);
    }
    
    divide(value: number): Calculator {
        if(!value) throw new Error("Division by zero is not allowed")
        return new Calculator(this.res / value);
    }
    
    power(value: number): Calculator {
        return new Calculator(Math.pow(this.res,value));
    }
    
    getResult(): number {
        return this.res
    }
}