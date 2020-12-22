const toDoForm = document.querySelector(".js-toDoForm"),
     toDoList = document.querySelector(".js-toDoList"),
     toDoInput = toDoForm.querySelector("input");

// TODO 로컬 저장소
const TODOS_LS = "toDos";



//# 입력된 모든 todo 저장해주기
const toDos = [];

//# 저장함수
function saveToDos(){
    // js의 객체를 모두 string으로 변환 시켜줘야됨.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

//# 출력함수 만들기
function paintToDo(text) {
    //web document에 li, button, span이라는 요소를 생성하기
    const li = document.createElement("li");
    //delBtn은 js에서 사용할 이름, button은 html에 있는 태그 가져온것
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length +1
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);
    span.innerText = text;
    // li안에 span과 버튼을 넣어주기
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
    //# 입력했을때의 리스트에 넣기
    li.id - newId;
    const toDoObj = {
        text: text,
        id: newId
        // id값은 첫번째 입력한 값이 1이 되도록 하기 위해서 +1을 해준다.
    };
    // 입력받은 값()
    toDos.push(toDoObj);
    saveToDos();
}

//# 유저의 입력값을 받기 위한 함수
function handleSubmit(event) {
    // 초기 설정 이벤트 발생 막기
    event.preventDefault();
    // 최근 유저에게 입력된 입력값 받기
    const currentValue = toDoInput.value;
    // 입력값 출력하기
    paintToDo(currentValue);
    toDoInput.value = "";
}

//# 로컬 저장소에서 로드해오기
function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if (loadedToDos !== null) {
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDO){
            paintToDo(toDo.text);
        });
    }
}


//# 초기화 함수

function init(){
    // TODO를 local storage에서 불러오기
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();