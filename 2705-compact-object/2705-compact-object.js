/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
        if(!obj) return null;
    if(Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
    if (typeof obj !== "object") return obj;
    const newObj = {};
    for (const key in obj) {
        let value = compactObject(obj[key]);
        if (value) newObj[key] = value;
    }
    return newObj;
};