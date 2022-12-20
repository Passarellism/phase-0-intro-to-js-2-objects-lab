const employee = {
    name: "Steve",
    address: "1732 Daisy Court",
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;

    return obj;
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const newObj = { ...obj };
    newObj[key] = value;

    return newObj;
}

// trouble below this line
//nondestructive 
function deleteFromEmployeeByKey(obj, key){
    const newObj = { ...obj };
    delete newObj[key];

    return newObj;
}
//destructive
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];

    return obj
}