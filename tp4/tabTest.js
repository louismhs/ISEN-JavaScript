function repeatTests(){

    console.log(sum([]));               // => 0
    console.log(sum([480,150,14,23]));  // => 667
    console.log(sum2([]));              // => 0
    console.log(sum2([480,150,14,23])); // => 667
    console.log("------------------------------");
    console.log(longestWord(["lot", "of", "words", "of", "different", "sizes"]));   // => "different"
    console.log("------------------------------");
    console.log(range(3, 8, 1));      // => [3, 4, 5, 6, 7, 8]
    console.log(range(40, 90, 20));   // => [40, 60, 80]
    console.log("------------------------------");
    let text = "bar qux baz foo bar foo qux foo";
    console.log(nbOccurences(text, "foo"));     // => 3
    console.log(nbOccurences(text, "quux"));    // => 0
    console.log(nbOccurences(text, "baz"));     // => 1
    console.log("------------------------------");
    console.log(flatten2D([[1,2], [3,4], [5,6]])); // [1, 2, 3, 4, 5, 6]
    console.log(flatten2D([[1,2], [3,4,5], [6]])); // [1, 2, 3, 4, 5, 6]

}