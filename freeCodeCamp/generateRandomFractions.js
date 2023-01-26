function randomFraction() {
    // Only change code below this line
    let isZero = true;
    let random;

    while (isZero) {
        random = Math.random();
        if (random !== 0) {
            isZero = false;
        }
    }
    return random;

    // Only change code above this line
}

console.log(randomFraction());
