function addSegments(digitId){
    
    let app = document.querySelector(digitId);
    for(let i = 0; i < 7; i++){
        app.innerHTML = app.innerHTML + "<div class=\"segment" + i + " segment off\"></div>";
    }
}

function updateDigit(digitId, value){

    let segmentStates = [
        [1, 1, 1, 0, 1, 1, 1],     
        [0, 0, 1, 0, 0, 1, 0],     
        [1, 0, 1, 1, 1, 0, 1],     
        [1, 0, 1, 1, 0, 1, 1],     
        [0, 1, 1, 1, 0, 1, 0],     
        [1, 1, 0, 1, 0, 1, 1],     
        [1, 1, 0, 1, 1, 1, 1],     
        [1, 0, 1, 0, 0, 1, 0],     
        [1, 1, 1, 1, 1, 1, 1],      
        [1, 1, 1, 1, 0, 1, 1]
    ];

    let app = document.querySelector(digitId);
    for(let i = 0; i < 7; i++){
        app.querySelector(".segment" + i).className = (segmentStates[value][i] == 1) ? "segment segment" + i : "segment segment" + i + " off";
    }
}




function init(){
    
    addSegments("#hours-tens");
    addSegments("#hours-units");
    addSegments("#minutes-tens");
    addSegments("#minutes-units");
}



function main(){

    init();
    updateDigit("#hours-tens", 1);
    updateDigit("#hours-units", 2);
    updateDigit("#minutes-tens", 3);
    updateDigit("#minutes-units", 4);
    
}

main();