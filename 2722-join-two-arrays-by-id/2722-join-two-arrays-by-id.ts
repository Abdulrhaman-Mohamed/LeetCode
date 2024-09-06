type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
        let items = arr1.concat(arr2);

    let result = {};

    for(const obj of items) {
        if(!result[obj.id]) {
            result[obj.id] = obj;
            continue;
        } 

        result[obj.id] = {...result[obj.id], ...obj};
    }

    return Object.values(result);
};