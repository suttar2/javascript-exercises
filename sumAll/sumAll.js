const sumAll = function(valueA, valueB) {
    var grandTotal = 0;

    if (valueA < 0 || valueB < 0) {return 'ERROR'}
    if (typeof(valueA) != 'number'|| typeof(valueB) != 'number') {return'ERROR'}

    if (valueA > valueB) {
        loopee = valueA;
        looper = valueB;
    }
    else if
    
    (valueA < valueB){
        loopee = valueB;
        looper = valueA;
    }
    

    for ( i = looper; i <= loopee; i++ ){
        grandTotal = i + grandTotal;

    }
    return grandTotal;
}
module.exports = sumAll
