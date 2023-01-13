const mapping = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
};

function letterCombinations(digits) {
    if (!digits) {
        return [];
    }
    let result = [""];
    for (let digit of digits) {
        let temp = [];
        for (let letter of mapping[digit]) {
            for (let combination of result) {
                temp.push(combination + letter);
            }
        }
        result = temp;
    }
    return result.sort();
}
console.log(letterCombinations("23"))

module.exports = letterCombinations;
