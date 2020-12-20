// html에 지정한 클래스 혹은 태그들 불러오기
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
// 시계 함수 가져와서 사용하기
function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    // html 객체 안에 가져온 시간을 넣어주기 위해서 사용
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}
// 시계를 초기화 해서 시간이 흐름에 따라 계속 바뀌게 해주기
function init(){
    getTime();
    setInterval(getTime, 1000);    
}

init();



/*
# 삼항연산자 ternary operator == mini if #

clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
위의 공식에서 우리는 초를 셀때 0~9 까지는 01, 02, 03 이런식으로 나오게 해주고 싶음
따라서

clockTitle.innerText = `${hours}:${minutes}:${seconds < 10 ? `0${seconds}` : seconds}` ;
seconds가 10 이하면(? == true로 사용)
아니면(: == false로 사용)
*/ 