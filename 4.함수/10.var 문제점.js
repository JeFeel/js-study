

//var의 문제점들
// 1. 변수의 중복선언 허용
// var x = 10;
// var x = '김철수';

let x = 10;
//  let x = '김철수';
console.log(`x: ${x}`);

//2. 블록레벨 스코프 지원x
//var i ='안녕';
let i = '안녕';

for(let i=0;i<3;i++) {
  console.log(`for문 내부 i:${i}`);
}
//내부에서는 for문에서 선언한 숫자 i가 반복

console.log(`for문 외부 i:${i}`); 
//외부에선 전역 변수로 선언한 i가 그대로 유지되어 '안녕'이 출력

//3. 변수 호이스팅 : 변수선언문을 자동으로 맨 위로 올림
// z=100;
// console.log(z);
// var z;  //100 문제없이 출력

//ReferenceError: Cannot access 'z' before initialization
// z=100;
// console.log(z);  
// let z;
