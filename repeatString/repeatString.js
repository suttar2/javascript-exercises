var newString
const repeatString = function(string, degree) {
    newString = string;
    
    for(i = 0 ; i < degree - 1; i++){
        
        newString = newString + string;
    }
    
    if (degree == 0){
        newString = '';
    }

    if (degree < 0) {
        return 'ERROR';
    }

    console.log(newString)
    return newString
}

module.exports = repeatString
