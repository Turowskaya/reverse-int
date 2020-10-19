module.exports = function reverse (n) {
    let arr = String(n).split('').reverse();

    if(arr[arr.length-1] === '-'){
        arr.pop();
    }

    return +arr.join('');

}
