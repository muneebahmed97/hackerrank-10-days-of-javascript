function factorialWithRecursion(n){
    if (n <= 1) {
        return n
    }

    let result = (n * factorial(n - 1));
    return result
}

function factorial(n) {
    let result = n;
    while (n > 1) { 
        n--;
        result *= n;
    }
    return result
}