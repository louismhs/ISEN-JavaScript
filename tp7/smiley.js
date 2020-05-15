function canvasApp(smiley){

    let canvas = document.getElementById("smiley");
	let context = canvas.getContext("2d");
    
    context.beginPath();                            // Cercle tête
    context.lineWidth = 3;
    context.fillStyle = "yellow";
    context.arc(100, 100, 75, Math.PI, Math.PI*3);
    context.closePath();
    context.stroke();
    context.fill();

    context.beginPath();                            // Cercle oeil1
    context.fillStyle = "black";
    context.arc(65, 70, 10, Math.PI, Math.PI*3);
    context.closePath();
    context.fill();

    context.beginPath();                            // Cercle oeil2
    context.fillStyle = "black";
    context.arc(135, 70, 10, Math.PI, Math.PI*3);
    context.closePath();
    context.fill();

    context.beginPath();                            // Demi-cercle bouche
    context.lineWidth = 6;
    context.arc(99, 120, 35, Math.PI*2, Math.PI);
    context.stroke();
    context.closePath();
    
    context.textBaseline = "middle";                // Zone de texte
    context.textAlign = "center";
    context.font = "italic bold 20px sans-serif";
    context.fillText("Hello Canvas!", 100, 200);
}

function displayDateTime(){

    let date = document.getElementById("date");
    let hour = document.getElementById("heure");
    const options = {weekday: "long", year: "numeric", month: "long", day: "numeric"};
    let current = new Date();
    date.innerText = current.toLocaleDateString('fr-FR', options);
    hour.innerText = current.toLocaleTimeString('fr-FR');
}

function displayDecrementSeconds(timer){
    let text = document.getElementById("decrement");
    if(timer == 0){
        text.innerHTML = "Le dessin est affiché ci-dessous";
        canvasApp("smiley");
    }
    else{
        text.innerHTML = "Le dessin va s'afficher dans <b>" + timer + "</b>s";
        setTimeout(displayDecrementSeconds, 1000, timer-1);
    }
}

function main(){
    setInterval(displayDateTime, 1000);
    displayDecrementSeconds(30);
}

main(); 