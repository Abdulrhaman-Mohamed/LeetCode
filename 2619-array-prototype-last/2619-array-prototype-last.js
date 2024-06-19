/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function(ref) {
    const len = this.length;
    if(len === 0) return -1;
    return JSON.stringify(this[len-1])? this[len-1]:-1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */