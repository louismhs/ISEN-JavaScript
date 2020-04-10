function main(){
    
    console.log("============================================");
    console.log("Titre de la page : " + document.title);
    console.log("Type du contenu de la page : " + document.body);
    let lien = document.getElementsByTagName("a");
    console.log("La troisième bande annonce est : " + lien[2].href);
    console.log("============================================");
    console.log("Le titre GONE GIRL est de type : " + document.head);
    console.log("============================================");
    let p = document.getElementsByTagName("p").length;
    let img = document.getElementsByTagName("img").length;
    console.log("Notre page contient " + p + " et " + img +" images.");
    console.log("============================================");
    let synopsis = document.querySelectorAll(".s").length;
    console.log("Notre page contient " + synopsis + " synopsis.");
    console.log("============================================");
    let year = document.getElementsByTagName("h1");
    console.log("La première rubrique des films date de l'année " + year[0].innerHTML);
    let movieh2 = document.querySelectorAll(".movieh2").length;
    console.log("Il existe " + movieh2 + " films sous la rubrique " + year[2].innerHTML);
    console.log("============================================");
    let film = document.getElementsByClassName("title");
    console.log("Synopsis du film :" + film[1].innerHTML + ":");
    let sTuring = document.querySelector("#sTuring");
    console.log(sTuring.innerHTML);
    console.log("============================================");
}
main();