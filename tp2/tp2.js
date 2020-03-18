function celciusToFahrenheit(celcius){
    
    return (celcius*1.8)+32;
}

function limit(x, inf, sup){
    if(x>inf && x<sup){
        return x;
    }
    else if(x<inf){
        return inf;
    }
    else if(x>sup){
        return sup;
    }
}

function isPerfect(n){
    let result = 0;
    for(let i = n-1; i>1; i--){
        if (n % i == 0){
            result = result + i;
        }
    }
    result = result + 1;

    let x;
    result==n? x=true: x=false;
    return x;    
}

function toByte(x, unit){
    switch (unit) {
        case "T": 
            x = x*1024;
        case "G": 
            x = x*1024;
        case "M": 
            x = x*1024;
        case "K": 
            x = x*1024;
            break;
        default:
            break;
    }
    return x;
}

function ligne(x){
    let a="";
    for(let i=0; i<x; i++){
        a+="* ";
    }
    console.log(a);
}
function ligne_vide(x){
    let a = "";
    let i;
    for (i=0; i<x; i++){
        if(i == 0 || i == (x-1)){
            a+="* ";
        }
        else{
            a+="  ";
        }
    }
    console.log(a);
}
function carre_plein(x){
    let a="";
    for(let i=0; i<x; i++){
        ligne(x);
    }
    console.log(a);
}

function triangle_iso(x){
    let a="";
    for(let i=0; i<x; i++){
        a+="*";
        console.log(a);
    }
}

function carre_vide(x){
    let a="";
    ligne(x);
    for(let i=1; i<x-1; i++){
        ligne_vide(x);
    }
    ligne(x);
}

function triangle_vide(x){
    
}

function bank_money(money){
    let nb500;
    let nb200;
    let nb100;
    let nb50;
    let nb20;
    let nb10;
    let nb5;
    let np2;
    let np1;

    console.log("Distributeur automatique de billets");
    
    let sum = money;

    nb500 = money/500;
    money = money%500;
    nb200 = money/200;
    money = money%200;
    nb100 = money/100;
    money = money%100;
    nb50 = money/50;
    money = money%50;
    nb20 = money/20;
    money = money%20;
    nb10 = money/10;
    money = money%10;
    nb5 = money/5;
    money = money%5;
    np2 = money/2;
    money = money%2;
    np1 = money;

    console.log("Pour obtenir la somme de %d€ :", sum);
    console.log("Il faut %d billet.s de 500€.", nb500);
    console.log("Il faut %d billet.s de 200€.", nb200);
    console.log("Il faut %d billet.s de 100€.", nb100);
    console.log("Il faut %d billet.s de 50€.", nb50);
    console.log("Il faut %d billet.s de 20€.", nb20);
    console.log("Il faut %d billet.s de 10€.", nb10);
    console.log("Il faut %d billet.s de 5€.", nb5);7
    console.log("Il faut %d pièce.s de 2€.", np2);
    console.log("Il faut %d pièce.s de 1€.", np1);
}

function main(){
  /*  let result = celciusToFahrenheit(22);
    console.log(result);                    // --> 71.6

    console.log(limit(4, 3, 8));    // => 4
    console.log(limit(1, 3, 8));    // => 3
    console.log(limit(42, 3, 8));   // => 8

    console.log(isPerfect(496));    // => true
    console.log(isPerfect(6));      // => true
    console.log(isPerfect(1337));   // => false
    console.log(isPerfect(42));     // => false

    console.log(toByte(150, "K"));    // => 153 600
    console.log(toByte(400, "M"));    // => 419 430 400
    console.log(toByte(5, "G"));      // => 5 368 709 120
    console.log(toByte(2, "T"));      // => 2 199 023 255 552*/
    ligne(8);
    console.log("---------------");
    carre_plein(5);
    console.log("---------------");
    triangle_iso(5);
    console.log("---------------");
    ligne_vide(5);
    console.log("---------------");
    carre_vide(5);
    console.log("---------------");
    triangle_vide(5);
    //console.log(bank_money(12740928));
}
main();

// It's a test Git.