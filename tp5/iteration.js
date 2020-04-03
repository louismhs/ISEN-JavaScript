function abs(numbers) {
    return abs = numbers.map(
        function(number){
            return Math.abs(number);
        }
    );
}

function evenOnly(numbers){
    return evenNumbers = numbers.filter(
        function(number){
            return number % 2 == 0;
        }
    );
}