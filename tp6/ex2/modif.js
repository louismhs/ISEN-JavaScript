function main(){
    /*console.log("============================================");
   

    console.log("Titre de la page : " + document.title);
    console.log("Le nombre de lignes est : " + document.querySelectorAll("tr").length);
    console.log("Le nombre de colonnes est : " + document.querySelectorAll("th").length);
    console.log("Le nombre de semestres est : " + document.querySelectorAll(".c").length);
    console.log("La note de S5 de E1 : " + document.querySelector("#e15").innerHTML);
    console.log("La note de S5 de E2 : " + document.querySelector("#e25").innerHTML);
    let note = document.querySelector("#e15").innerHTML;
    console.log("La note + 2 points de S5 de E1 : " + (parseInt(note) + 2));*/


    let b = document.body;

    let newP = document.createElement('p');
    let newTexte = document.createTextNode('Texte écrit en JS');
    newP.textContent = 'Ceci est un test!';

    b.prepend(newP);
    b.appendChild(newTexte);


    let b_bis = document.body;
    let title = document.createElement('p');
    title.textContent = "Titre de la page : " + document.title;
    b_bis.append(title);

    let lines = document.createElement('p');
    lines.textContent = "Le nombre de lignes est : " + document.querySelectorAll("tr").length;
    b_bis.append(lines);

    let columns = document.createElement('p');
    columns.textContent = "Le nombre de colonnes est : " + document.querySelectorAll("th").length;
    b_bis.append(columns);

    let semesters = document.createElement('p');
    semesters.textContent = "Le nombre de semestres est : " + document.querySelectorAll(".c").length;
    b_bis.append(semesters);

    let S5E1 = document.createElement('p');
    S5E1.textContent = "La note de S5 de E1 : " + document.querySelector("#e15").innerHTML;
    b_bis.append(S5E1);

    let S5E2 = document.createElement('p');
    S5E2.textContent = "La note de S5 de E2 : " + document.querySelector("#e25").innerHTML;
    b_bis.append(S5E2);

    let S5E1_bis = document.createElement('p');
    let note = document.getElementById("e15").innerHTML;
    let notes = (parseInt(note) + 2);
    S5E1_bis.style.color = "#FF0000";
    S5E1_bis.style.fontSize = "1.5em";
    S5E1_bis.textContent = "La note + 2 points de S5 de E1 : " + notes;
    b_bis.append(S5E1_bis);

    let textzone = document.createElement('textarea');
    textzone.textContent = "Saisissez du texte";
    b_bis.append(textzone);
}
main();