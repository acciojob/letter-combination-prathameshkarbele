function letterCombinations(input_digit) {
  //Complete the function
	if (!input_digit) {
        return [];
    }
    let result = [''];
    for (let i = 0; i < input_digit.length; i++) {
        let letters = maps[input_digit[i]];
        let temp = [];
        for (let j = 0; j < letters.length; j++) {
            for (let k = 0; k < result.length; k++) {
                temp.push(result[k] + letters[j]);
            }
        }
        result = temp;
    }
    return result;
}

module.exports = letterCombinations;
