function sumarr(a, n) {
    if (n <= 0) {
        return 0;
    }
    return sumarr(a, n - 1) + a[n - 1];
}

function sumAll(arr) {
    return sumarr(arr, arr.length)
}

console.log(sumAll([1, 3, 5, 4]));