


let author  = { favoriteNumber: 1}

function doubleFavoriteNumber(n) {
    return this.favoriteNumber * n;
}

var a = doubleFavoriteNumber.call(author, 2);// this: author, n:2

console.log(a);

