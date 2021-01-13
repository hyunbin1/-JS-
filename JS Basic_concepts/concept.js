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





//# 3. 데이터 타입 알아보기(=Variable types) -> [primitive type, object type, 그리고 function으로 이루어져 있음]
/* 
1) primitive type = single item - 더이상 작은 단위로 나누어 질 수 없는 단위
ex] number, string, boolean, null, undefined, symbol
2) object type = box container - single item들을 여러개 묶어서 한개의 단위 or 하나의 box로 관리할 수 있게 해주는 것. 
3) fuction, first-class function - 이 언어에서는 다른 데이터 타입처럼 변수에 할당이 가능하고
함수의 파라미터(인자)로더 전달이 되고 return 타입으로 return이 가능하다. 
*/ 

//! primitive type:
//? 1] number - 숫자 할당은 종류에 상관 없이 number로 여겨지기 때문에 특별히 할당해주지 않아도 된다.
// javaScirpt에서 사용하는 법:
let a : 12;
//type script에서는 let a: number = 12;

//! 특별한 값이 먼저 정해져 있는 경우: 무한대, -무한대, 숫자가 아닌경우(not a number - nan) (총 3가지)
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn ='not a number'/2;
const.log(infinity);
const.log(negativeInfinity); 
const.log(nAn);

// bigInt = 기존의 숫자의 범위는 (-2*53 ~ 2*53)까지만 된다. -123151n 처럼 숫자 뒤에 n을 붙이면 bigInt로 여겨짐 - 크롬과 firefox에서만 지원이 된다.


//? 2] String(문자) - 모두 1가지 타입으로 정의됨 
//출력 ex]
const char = "c";
const brendan = "변수";
const greeting = "hello " + brendan;
const template literals = `This is string and this is ${brendan}`;

//cf) type 찾기
console.log(type: ${typeof greeting}');

            
//? 3] Boolean
// False: 0,null, undefined, NaN, ""(=비어져있는 string)
// True: 다른 모든 값들 
// ex] 
const canRead = true;
const test = 3<1; // false
console.log('value: ${test}')

// null: 텅텅 비어있어, 아무것도 없음
let nothing = null;

//undefined - 선언은 되었지만 아무 값도 지정되어 있지 않음. 따라서 텅텅 비었는지, 지정되었는지 아직 모름.
let x; // undefined ex.



//? 4] Symbol - map이나 다른 자료구조에서 고유한 식별자가 필요하거나, 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고싶을때, 정말 고유한 식별자가 필요할 때 사용함. 
/*
   간혹 식별자를 string으로 사용하는 경우도 있지만 string은 다른 모듈이나 다른 파일에서
   동일한 string을 쓸때, 동일한 식별자로 간주됨
   하지만 반대로 symbol같은 경우는 동일한 값이라도 서로 다른 것으로 간주한다. 
   
*///ex) 검사해보기
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");
console.log(symbol1 === symbol2);

// if 동일한 symbol로 만들고 싶다면, 
const symbol1 = Symbol.for("id");
const symbol2 = Symbol.for("id");
console.log(symbol1 === symbol2); //true

// sting과 함께 사용하고 싶다면 (.description을 사용해서 string으로 변형해서 사용해줘야됨.)
console.log(`value: ${symbol1.description}`)





/* 4. Dynamic typing(= dynamically typed language) - 선언할  어떤 타입인지 선언하지 않고
(run time)프로그램이 동작할 때 할당된 값에 따라 type이 변경될 수 있다는 것을 얘기한다. 
*/
// 좋은 아이디어가 있을때 빠르게 프로토 타입을 할때는 유용함.
// 하지만 big 프로젝트에는 쓰지 않는 것이 좋음. 
//ex]타입 알아보기
let text = "hello"; //string
text = 1; // number
text = "7" + 5; // 모두 string 취급 -> 출력: 75
text = '8' / '2' // 모두 int 취급  -> 출력: 4 == 8/2를 실행함 
// 이렇게 되면 text.charAt(0); 으로 문자열의 0번째 숫자를 출력하라고 명령하면 에러가 뜸
// 이러한 이유 때문에 typescript가 나온 것이다. 





