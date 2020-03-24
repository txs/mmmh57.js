function add(a, b) {
    console.log(arguments);
    // console.log(this.name);
    // console.log('a:'+a);
    // console.log('b:'+b);
    
    return a + b;
}
//function add1(b){
//     return 1+b
// }
let andy = {name: 'Andy', lastName: "Tseng"}
var add1 = add.bind(null, 1);
var add1_2 = add1.bind(null,2)
console.log(add1_2());

// console.log(add1(2));                           // 3
// console.log(add1(4));                           // 5