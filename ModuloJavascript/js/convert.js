console.clear();

const romanNumerals = [{
    numeral: "M",
    value: 1000
}, {
    numeral: "CM",
    value: 900
}, {
    numeral: "D",
    value: 500
}, {
    numeral: "CD",
    value: 400
}, {
    numeral: "C",
    value: 100
}, {
    numeral: "XC",
    value: 90
}, {
    numeral: "L",
    value: 50
}, {
    numeral: "XL",
    value: 40
}, {
    numeral: "X",
    value: 10
}, {
    numeral: "IX",
    value: 9
}, {
    numeral: "V",
    value: 5
}, {
    numeral: "IV",
    value: 4
}, {
    numeral: "I",
    value: 1
}];

convertRomanNumber = function (r) {
    let result = 0,
        i = 0;
    for (var j = 0; j < romanNumerals.length; ++j) {
        const item = romanNumerals[j];
        for (var l = item.numeral.length; r.toUpperCase().substr(i, l) == item.numeral; i += l) {
            result += item.value;
        }
    }
    return result;
}


console.log(convertRomanNumber("I"));
console.log(convertRomanNumber("II"));
console.log(convertRomanNumber("IV"));
console.log(convertRomanNumber("v"));
console.log(convertRomanNumber("xv"));
console.log(convertRomanNumber("L"));