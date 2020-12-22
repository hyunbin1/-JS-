// 유저 좌표 = COORDS
const COORDS = "coords";


function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}


// POSITION을 인자로 갖고 위치를 출력해주는 함수
function handleGeoSucces(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude, 
        // 둘이 같은 표현임
        longitude: longitude
    };
    saveCoords(coordsObj);
}   

function handleGeoError(){
    console.log("can't access geo location");
}

// navigator API 사용하기
function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}


function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null){
        askForCoords();
    } else{

    }
}

function init(){
    loadCoords();
}

init();