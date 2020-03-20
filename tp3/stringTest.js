function repeatTests(){
    console.log(repeat("foo", 3)); // => foofoofoo

    console.log(truncate("12345678912345", 20)); // => unchanged text
    console.log(truncate("12345678912345", 14)); // => unchanged text
    console.log(truncate("12345678912345", 10)); // => truncat...

    console.log(isPalindrome("kayak"));         // => TRUE
    console.log(isPalindrome("erlenmeyer"));    // => FALSE
    console.log(isPalindrome("coloc"));         // => TRUE

    console.log(swapCase("ErLeNmEyEr"));        // => eRlEnMeYeR
    console.log(swapCase("HELLO WORLD !"));     // => hello world !
}