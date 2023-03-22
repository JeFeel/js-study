
// 자바스크립트의 함수는 함수를 리턴할 수 있음
// function calculator(n1,n2){
  
//   function add(){
//     return n1 + n2;
//   }

//   return add; //add 함수 리턴
// }

// const calculator=(n1,n2)=> ()=> n1 + n2; //☆☆☆
//그러나 너무 줄여도 가독성을 해칠 수 있음
console.log('===============');
// function calculator(n1, n2){
//   return () => n1+n2;
// }

// const zzz = calculator(10,20);
// console.log(typeof zzz); //function

// const n = zzz();
// console.log(`n: ${n}`); 


// let count = 0; //카운팅 변수 (전역 변수)

// //카운트를 올리는 함수
// const increase = () => ++count;

// console.log(increase());  //1
// console.log(increase());  //2
// console.log(increase());  //3

// count = 999;

// console.log(increase()); //1000, 전역변수가 도중에 바뀌었기 때문에

console.log('===============');
// const increase = () => {
//   let count = 0; //지역변수
//   return ++count;
// };

// //메모리에 있던 카운트는 함수가 작동하는 동안에만 존재
// //새로 부르면 초기화된 상태
// console.log(increase()); //1
// console.log(increase()); //1
// console.log(increase()); //1 



// const increaseClosure = ()=>{
//   let count = 0; //지역변수

//   return ()=> ++count;
// };

// const increase = increaseClosure();
// console.log(increase()); //1
// console.log(increase()); //2

// count+=30;
// console.log(increase()); //3


//즉시 실행 함수 : 정의와 동시에 호출
const result = (function (n1,n2){return n1+n2;})(5,8);

console.log(result);


const increase = (function(){
    let count = 0; //지역변수
  
    return ()=> ++count;
  })();
console.log(increase()); //1
console.log(increase()); //2
console.log(increase()); //3
