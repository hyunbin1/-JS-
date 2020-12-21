const toDoForm = document.querySelector(".js-toDoForm"),
     toDoList = document.querySelector(".js-toDoList"),
     toDoInput = toDoForm.querySelector("input");

// TODO 로컬 저장소
const TODOS_LS = "toDos";


// 출력함수 만들기
function paintToDo(text) {
    //web document에 li, button, span이라는 요소를 생성하기
    const li = document.createElement("li");
    //delBtn은 js에서 사용할 이름, button은 html에 있는 태그 가져온것
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    delBtn.innerText = "❌";
    span.innerText = text;
    // li안에 span과 버튼을 넣어주기
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

// 유저의 입력값을 받기 위한 함수
function handleSubmit(event) {
    // 초기 설정 이벤트 발생 막기
    event.preventDefault();
    // 최근 유저에게 입력된 입력값 받기
    const currentValue = toDoInput.value;
    // 입력값 출력하기
    paintToDo(currentValue);
    toDoInput.value = "";
}


function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if (toDos !== null) {

    }
}


// 초기화 함수

function init(){
    // TODO를 local storage에서 불러오기
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();