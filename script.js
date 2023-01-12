function letterCombinations(digits) {
  //Complete the function
	if (!digits) {
        return [];
    }
    let result = [''];
    for (let i = 0; i < digits.length; i++) {
        let letters = map[digits[i]];
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
