function repeat(s, n) {
    return s.repeat(n);
}

function truncate(s, n){
    if (s.length <= n) {
        return s
    }
    return s.slice(0, n) + '...'
}

function isPalindrome(x){
    let y = (x.length);
    let z = 0;
    for (let i = 0; i < y / 2; i++) {
        if (x[i] == x[y - i - 1]) {
            z = z + 1;
        } else {
            return false;
        }
    }
    return true;
}

function swapCase(x){
    let y = (x.length);
    let z = "";
    for (let i = 0; i < y; i++) {
        if (x[i].charAt() <= 'Z' && x[i].charAt() >= 'A') {
            z += x[i].toLowerCase();
        } else {
            z += x[i].toUpperCase();
        }
    }
    return z;
}