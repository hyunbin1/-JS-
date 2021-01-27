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





//# 3. 데이터 타입 알아보기(=Variable types - read/write 둘다 가능) -> [primitive type, object type, 그리고 function으로 이루어져 있음]
/* 
1) primitive type = single item - 더이상 작은 단위로 나누어 질 수 없는 단위
ex] number, string, boolean, null, undefined, symbol
2) object type = box container - single item들을 여러개 묶어서 한개의 단위 or 하나의 box로 관리할 수 있게 해주는 것. 
3) function, first-class function - 이 언어에서는 다른 데이터 타입처럼 변수에 할당이 가능하고
함수의 파라미터(인자)로더 전달이 되고 return 타입으로 return이 가능하다. 
*/

//! primitive type:
//? 1] number - 숫자 할당은 종류에 상관 없이 number로 여겨지기 때문에 특별히 할당해주지 않아도 된다.
// javaScript에서 사용하는 법:
let a: 12;
//type script에서는 let a: number = 12;

//! 특별한 값이 먼저 정해져 있는 경우: 무한대, -무한대, 숫자가 아닌경우(not a number - nan) (총 3가지)
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
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
console.log(type: ${ typeof greeting }');

//? 3] Boolean
// False: 0,null, undefined, NaN, ""(=비어져있는 string)
// True: 다른 모든 값들 
// ex] 
const canRead = true;
const test = 3 < 1; // false
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





/*# 4. Dynamic typing(= dynamically typed language) - 선언할  어떤 타입인지 선언하지 않고
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


/*# 5. Operator */

/*? 1. String concatenation*/
console.log('my'+' cat'); // 출력: my cat
console.log('1'+2); // 출력: 12
console.log(`string literals(``을 사용하면 ''같은 특수 문자 표기도 가능): 1 + 2 =${1+2}`); // 출력: string literals: 1 + 2 = 3 (${안에 있는 값 계산 후 출력함.})

/*? 2. Numeric operators */
console.log(1 + 1) // 출력: 2 (add)
console.log(1 - 1) // 출력: 0 (substract)
console.log(1 / 1) // 출력: 1 (divide)
console.log(1 * 1) // 출력: 1 (multiple)
console.log(5 % 2) // 출력: 1 (remainder)
console.log(2 ** 3) // 출력: 8 (exponentiation)

/*? 3. Increment & decrement operators*/
let counter = 2;
const preIncrement = ++counter; // preIncrement = 3, counter = 3
// 과정: 1. counter = counter +1 한 후 2. preIncrement = counter처럼 대입연산자를 해줌
const postIncrement = counter++; // postIncrement = 2, counter = 3
//과정: 1. postIncrement = conter - 대입부터한다. 2. counter = counter + 1
// 차이점
const preDecrement = --counter; // preDecrement = 1, counter = 1;
const postDecrement = counter--; // postDecrement = 2, counter = 1;

/*? 4. Assignment operators */
let x = 3;
let y = 6; 
x += y; // x = x + y;
x -= y; // x = x-y
x *= y; // x = x * y 
x /= y; // x = x / y

/*? 5. Conparison operators */
console.log(10<6); //
console.log(10<=6); //

/*? 6. Logical operators: || (or), && (and), ! (not)*/
const value1 = false;
const vlaue2 = 4<2;

// || (Or - 처음에 true가 나오면 뒤는 살펴보지 않는다는게 point! 따라서 인자를 여러개 넣을때에는 simple 한것 순으로 넣자. )
console.log(`Or: ${value1 || value2 || check()}`);

// && (And - 처음에 false가 나오면 뒤에는 살표보지 않음. 따라서 인자를 여러개 넣을때에는 simple 한것 순으로 넣자. ) 
// ! (Not 연산자 - 값을 반대로 바꿔준다.)

function check(){ // check = 시간을 지연하지만 True를 결국 도출한다. 
for (let i = 0; i < 10; i++){
   //wasting time
   console.log("^^");
   }
   return True;
};

/*? 7. equality */

// == loose equality, with type conversi
// ==를 사용하면 type이 달라도 내용물이 같으면 True로 출력한다. 
const StringFive = "5";
const numberFive = 5;

console.log(stringFive == numberFive); //  True
console.log(stringFive != numberFive); //  False
console.log(stringFive === numberFive); //  False
console.log(stringFive !== numberFive); //  True
// 복기 - 0, null, ""(empty string) == false
console.log(0 == false); // True - false는 boolean이다.
console.log(0 === flase); // False
console.log("" == false); // True
console.log("" === flase); // False
console.log(null == undifined); // True
console.log(null === undefined); // False



/*? 8. 조건문(Conditional operators: if) */
// if, if else, else
const name = "hyunbin";
if (name !== "hyunbin" ){
   console.log("You are amazing coder");   
} else if(name ==- "hyunbin"){
         console.log("That\'s right!");
}else{
  console.log("hi");
}


/*? 9. Ternary operation */
// 조건문 == ?, 값 비교는 :로 한다
console.log(name === "hyunbin" ? 'yes' : 'no'); // ? 전에 있는 것이 True니? True면 왼쪽 False면 오른쪽 것을 출력하렴.

/*? 10. Switch */
// case에서 true인 것만 출력한다.
const browser = "Firefox";
switch(browser){
   case "IE":
      console.log("go away!");
      breack;
   case "Firefox";
   case "Chrome";   
      console.log("Come on!")
      break
}; // 출력: Come on!
  
/*? 10. Loops 조건에 맞는 것이 나올때까지 계속 반복 */
let i = 3;
while(i > 0) {
   console.log(`while: ${i}`);
   i--;
}
//3 -> 2 -> 1
   
 /* Do while loop  - do에 할당된 블럭만큼 먼저 실행을 한 후에 while 조건문을 살펴본다. */
do{
   console.log(`do while: ${i}`);
i--;
} while(i>0);
// 출력: 3-> 2 -> 1 -> 0

/* for loops for(begin; condition; step)*/
for (i=3; i >0; i--){
   console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i-2){
// inline variable declaration (let을 사용해, 지역변수를 선언해줘서 for 안에서만 사용하기)
   console.log(`inline variable for: ${i}`);
}

/* nested loops (cpu한테 안좋음,, O(n**2)) */
for (let i = 0; i <11; i++){
   for (let j = 0; j <10; j++ ){
   console.log(`i: ${i}, j:${j}`);
   }
}

//[quiz]
// (짝수만)
for (let i = 0; i <10; i++){
   if(i % 2 === 0){
   console.log(i);
   }
}
// (8일때 break)
for( let j = 0; j <10; j++){
   if(j > 8){
break;
}
console.log(j)
}
 

//!  function : 여러번 재사용이 가능하다. 한가지의 업무나, 계사능ㄹ 하기 위해 사용한다. 
// 구성: 함수이름(파라미터 1, 파라미터2){body... return;}
// 이름 정하기 = 동사형태 - doSometing, command, verb - 하나의 함수는 하나의 업무, 동사로만 사용되야 된다.

function printHello(){
   console.log("hello");
}
printHello();

//조금 더 복잡하게

fuction log(message){
 console.log(message);
}
log("원하는 메세지 입력");
log(1234); // 정수도 가능


