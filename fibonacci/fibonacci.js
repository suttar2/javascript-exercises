const fibonacci = function(input) {
    sequence = [ 0 , 1 ];
    if (input < 0){
        return 'OOPS';
    }
    for (i = 0; i <= input - 1; i++){
        sequence.unshift(    
           sequence[0] + sequence [1]
        );
    }
    return sequence[0];
}
console.log(fibonacci(1001));

module.exports = fibonacci