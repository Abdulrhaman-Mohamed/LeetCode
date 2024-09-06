/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    var obj = {};
    var arr = this;
    arr.forEach(i => {
        var key = fn(i);
        if (!obj[key]) obj[key] = [];
        obj[key].push(i)
    })
    return obj;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */