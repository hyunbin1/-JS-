const form = document.querySelector(".js-form"),
    greeting = document.querySelector(".js-greetings"),
    input = form.querySelector("input");

// 이 서비스를 사용하는 유저의 로컬 스토리지에 저장하는 방법:
const USER_LS = "currentUser",
    // showing == from css
    SHOWING_CN = "showing";


// 마지막 순서: 유저의 정보를 저장하는 함수 만들기
function saveName(text) {
    localStorage.setItem(USER_LS, text);
}



// 아래에 이름을 로드할때 if else를 사용할 것인데 else에 사람이 저장되어 있을때 넣어줄 함수를 미리 만들어 놓는것 
function paintGreeting(text){
    // form을 지운다
    form.classList.remove(SHOWING_CN);
    // 유저가 입력한 greeting(이름 등)을 리스트에 더해준다
    greeting.classList.add(SHOWING_CN);
    //내가 설정한 값을 유저에게 나타낸다.
    greeting.innerText = `Hello ${text}`
}

// 사람 이름을 입력하고 엔터를 칠 시에 페이지는 새로고침이 되며 입력한 것은 사라진다. 우리가 원하는 것은 이것을 막는것이다. 
// enter을 쳐도 아무일도 일어나지 않음
// 1단계 작업임: 기본 이벤트 발생을 막음 = 엔터를 치면 새로고침이 되는것
function handleSubmit(event){
    event.preventDefault();
    //2번째 작업: 이름 value를 받은 후 paintGreeting function을 작동하게 만들기
    const currentValue= input.value;
    paintGreeting(currentValue);
    //이름을 입력하고 엔터를 치면 내가 유저한테 보여주고 싶은 메세지가 나타난다. 
    //하지만 새로고침하면 유저의 기록이 저장되지 않는다.
    //유저가 입력한 내용 저장해준다
    saveName(currentValue);
}

// 사람 이름 물어보기(if문에 사용할 사용자가 저장되어 있지 않을때)
function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}


// 이름을 로드해서 가져오기
function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    // 이름이 저장되어 있지 않을 때:
    if(currentUser === null){
        askForName();
    }
    // 저장되어 있을 때:
    else{
        // `Hello currentUser함수`
        paintGreeting(currentUser)
    }

}



function init(){
    loadName();

}

init();