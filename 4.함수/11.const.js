
const TODAY_SALE_RATE = 0.2;

//const: '상수' 값의 변경이 불가함

const PI = 3.14159265;

//PI = 5.5; //TypeError: Assignment to constant variable.

const kim ={
  name: '김철수',
  age: 25
};

kim.name = '김칠리'; //객체의 재할당은 불가능하지만 속성은 변경 가능
console.log(kim.name); //김칠리

// kim ={
//   name: '김철수',
//   age: 25
// }; //TypeError: Assignment to constant variable.

const a = 10;
const b = 20;
// b = a;
// console.log(b); //TypeError: Assignment to constant variable.

for(let i=0;i<5;i++){
  console.log(i);
}
