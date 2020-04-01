function sum(numbers){
    let sum = 0;

    for (let number in numbers){
        sum += numbers[number];
    }
    return sum;
}

function sum2(numbers){
    let sum = 0;
    let size = numbers.length;
    
    for (let i = 0; i < size; i++){
        sum += numbers[i];
    }
    return sum;
}

function longestWord(words){
    let lword;
    let longest = 0;
    let size = words.length;

    for (let i = 0; i < size; i++){
        if (words[i].length > longest){
            lword = words[i];
            longest = words[i].length
        }
    }
    return lword;
}

function range(min, max, step){
    let result = [];
    let i = 0;
    let j = 0;
    while (i <= max){
        if (min + step*j <= max){
            result.push(min + step*j);
        }
        i = min + step*j;
        j++;
    }
    return result;
}

function nbOccurences(wordList, word){
    let tab = wordList.split(" ");
    let size = wordList.length;
    let occur = 0;
    for (let i = 0; i < size; i++){
        if (tab[i] == word){
            occur++;
        }
    }
    return occur;
}

function flatten2D(array){
    let tab = [];
    let size = array.length;

    for (let i = 0; i < size; i++){

        for (let j = 0; j <  array[i].length; j++){
            tab.push(array[i][j]);
        }
    }
    return tab;
}