// Reversed String
function reverseString(value) {

    let reversedValue = "";

    value.split("").forEach((char) => {
        reversedValue = char + reversedValue;
    });

    return reversedValue;
}

// TESTE

console.log(reverseString("Reverse Me")); //eM esreveR