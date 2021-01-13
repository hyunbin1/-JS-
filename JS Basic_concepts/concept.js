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