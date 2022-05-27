const array = [
    { field: "id", operator: "eq" },
    { field: "cStatus", operator: "eq" },
    { field: "money", operator: "eq" },
];

const filterField = "money"

function removeArrayElement(filterField) {
    let myArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].field != filterField) {
            myArr.push(array[i]);
        }
    }

    return myArr;
}

console.log(`filtered array: ${removeArrayElement(filterField)}`)
