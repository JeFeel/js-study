
//함수 선언문 방식
// function multi(n1, n2){
//   return n1*n2;
// }

//함수 표현식
// const multi = function(n1, n2){
//   return n1*n2;
// };

//화살표 함수
const multi = (n1, n2)=> n1*n2;

const r1 = multi(10,3);
console.log(`r1: ${r1}`);

console.log('==================');

// function sayHello(){
//   console.log('안녕하세요!');
// }

// const sayHello = function(){
//   console.log('안녕하세요!');
// }

const sayHello = () => console.log('안녕하세요!');

sayHello();

const kim = {
  name: '김철수', 
  age: 30,
  greeting: sayHello,
  dance: () => console.log('춤을 신나게 춥니다')
};
kim.dance();
kim.greeting();

//정수 1개를 전달하면 해당 정수의 제곱값을 리턴하는
//화살표함수 pow 작성해보세요.

const pow = n => console.log(`${n}의 제곱: ${n**2}`);
pow(3);

console.log('======================');
//함수 선언문과 함수 표현식(화살표함수 포함)의 차이

function sub(n1,n2) {
  return n1 - n2;
}
const r2 = sub(20, 10); //함수 호출이 선언문 위/밑이든 상관x
console.log(`r2: ${r2}`);



// const r3 =divide(30, 6); //함수 호출을 먼저 해버리면 안 됨
//ReferenceError: Cannot access 'divide' before initialization 
const divide = (n1, n2) => n1 / n2;
const r3 =divide(30, 6);
console.log(`r3: ${r3}`);