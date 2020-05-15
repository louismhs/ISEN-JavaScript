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
    setInterval(updateClock, 1000)
    
}

function updateClock(){

    let hour = new Date();
    updateDigit("#hours-tens",  parseInt(hour.getHours()/10));
    updateDigit("#hours-units", parseInt(hour.getHours()%10));
    updateDigit("#minutes-tens", parseInt(hour.getMinutes()/10));
    updateDigit("#minutes-units", parseInt(hour.getMinutes()%10));
}

main();