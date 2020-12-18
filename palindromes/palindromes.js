const palindromes = function(str) {
    processedString = str.toLowerCase().replace(/[^A-Za-z]/g, "");

    return processedString
        .split("")
        .reverse()
        .join("") === processedString    


};

console.log(palindromes("was it a rat i saw?"));


module.exports = palindromes
