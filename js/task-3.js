const filterArray = (numbers, value) => {
    let result = [];
        result = numbers.filter((item) => {
        return item > value;
    });
    return result;
}
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

const filterArrayTwo = (numbers, value) => {
    let result = [];
    for (const item of numbers) {
        item > value ? result.push(item) : "";
    }
    return result;
}

console.log(filterArrayTwo([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArrayTwo([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArrayTwo([1, 2, 3, 4, 5], 5)); // []
console.log(filterArrayTwo([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArrayTwo([12, 24, 8, 41, 76], 20)); // [24, 41, 76]