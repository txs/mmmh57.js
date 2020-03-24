let author  = { favoriteNumber: 1}
let andy    = { favoriteNumber: 666}
// console.log(author.favoriteNumber);


function doubleFavoriteNumber() {
    return this.favoriteNumber * 2;
}

var a = doubleFavoriteNumber.call(author);
let twoNum = doubleFavoriteNumber.call(andy)

console.log(a);
console.log(twoNum);

