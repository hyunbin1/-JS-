// js 공식사이트 = developer.mozilla.org - mdn 사이트
//Whole-script strict mode syntax
// type 말고 순수 js를 사용할때는 맨 첫줄에 이걸 써주는 것이 좋다. 
'use strict';

/*
자바스크립트 구동방식:
1. parsing html -> html header에서 script - js 가 나오면 parsing html을 잠시 멈추고
js 정보를 모은 후 실행한다. js 실행이 끝나면 다시 parsing html을 이어나간다. 
# 단점 = js양이 많으면 파일 실행이 느려진다.
2. body에 넣는 경우에는 
# 단점 = 만일 웹페이지가 js에 상당히 의존적이면 사용자가 의미있는 컨텐트를 
보기 전까지 js실행이 오래걸린다. 
3. head에 <scripts asyn src~></scripts>로 시작하면 병렬로 html을 파싱하면서 js의 다운을 같이 한다
그다음에 js 다운이 끝나면 js 를 실행한다 
# 단점 = js가 html parsing 보다 빨리 다운로드가 되면 위험할 수 있음
4. head에 <scripts defer src=""></scripts> = 
   ! 가장 좋은 옵션임! ->
html parsing과 fetching js를 병렬로 한 후에 html parsing이 모두 >>끝난 후에 js를 실행한다. 

*/



// html 검사에서 콘솔에서 작동확인하기 - ctrl+shift+i
console.log("Hello World!");

//# 1. 변수(변경될 수 있는 값):
// -선언- let (added in ES6) = let이 유일한 방법.
/* -원리- name이라는 변수를 정의(선언)하게 되면 name이라는 변수가 메모리(비어있는 박스들)중 
   name이 할당된 있는 위치를 가리키게(포인팅) 되게 저장한다.  */

//! var은 더이상 사용하지 않는다. 
//? 이유1. var hoisting: 변수를 선언하기 전에 변수를 사용하는 비정상적인 짓을 막지 않고 그대로 냅두기 때문에.
//? 이유2. block scope(지역변수)를 사용하지 못함.

/* ex] ( 이게 출력되면 비정상인데도 출력이 됨. => 문제 정의: var hoisting이라고 함 = 어디에 선언했는지 
상관없이 항상 제일 위로 선언을 끌어 올려주는것.)
console.log(age);
age = 4;
var age;
-> */
let name = "ellie"; 
console.log(name);
name = "hello";
console.log(name);

// Block Scope(지역변수) - {}안에 있는 변수들은 이 안에서만 사용할 수 있다. 
{
let name = "ellie"; 
console.log(name);
name = "hello";
console.log(name);
}

/*lobal Scope(전역변수) - {}사용하지 않는 것.:
  최소한으로 쓰는 것이 좋다. ex) class, 함수, if, for로만 사용하여 쓰는 것이 좋다. */



//# 2. Constants: 값을 할당한 이후 변경할 수 없음. (변수와의 차이점)
/* favor immutable data type always for a few reasons:
1. 보안
2. 프로세스 안에서의 흐름의 안전성(=thread safety) (thread = 프로그램 or 프로세스 내에서 실행되는 흐름의 단위)
3. 실수 방지 (reduce human mistakes)
*/
const dayInWeek = 7;
const maxNumber = 5;






