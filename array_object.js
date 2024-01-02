// var arr = ["ali","saad","ahmed",45,[[25]]]
// console.log(arr[4][0][0]);

// var obj = {
//     "id" : "0123",
//     "name" : "hammad"
// }

// console.log(obj.id);
// console.log(obj.name);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));


var company = {
    smartphones : {
        samsung : {
            samsungS10 : {
                "ram" : "8gb",
                "storage" : "128gb",
                "processor" :"snapdragon654"
            },

            samsungS20 : {
                "ram" : "12gb",
                "storage" : "128gb",
                "processor" :"snapdragon794"
            },

            samsungS22 : {
                "ram" : "12gb",
                "storage" : "256gb",
                "processor" :"snapdragon999"
            },
        }
    }
}

console.log(company.smartphones.samsung.samsungS20.processor);
console.log(Object.keys(company.smartphones.samsung.samsungS20));
console.log(Object.values(company.smartphones.samsung.samsungS20));
console.log(Object.entries(company.smartphones.samsung.samsungS20));

