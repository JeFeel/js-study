
//multi parameter: 매개변수가 n개인 경우

//집합 자료구조를 매개변수로 사용
// [배열, 객체]

//n개의 정수를 전달하면 해당 정수의 총합을 구해주는 함수

//스프레드 (ES6)  ...
function addAll(...numbers){ //대괄호로 묶어줌
  var total = 0;

  for (var n of numbers) {
    total +=n;
  }
  return total;
}

var r1 = addAll(1,3,5,10,20); //대괄호 입력할 필요 없음
console.log(`r1: ${r1}`);

function foo(arr1, arr2){

}

foo([10,20], [500,1000, 1500]);

//배열 2개일 땐 사용 불가

// function bar(...arr1, ...arr2){

// }

// bar(10,20,500,1000, 1500);

console.log('=======================');

//함수의 리턴값은 always one
//2개의 정수를 전달하면 덧셈, 뺄셈, 곱셈, 나눗셈의 결과를 리턴받고 싶을때
//4개의 결과를 집합 자료구조에 담아서 리턴

function operateAll(n1, n2){

  return {
    plus: addAll(n1 , n2),
    minus: n1 - n2,
    multiply: n1 * n2,
    divide: n1 / n2
  };  //배열보다는 객체를 활용해 순서가 바뀔 경우를 대비
}

var result = operateAll(10, 5);
console.log(`덧셈결과: ${result.plus}`);
console.log(`뺄셈결과: ${result.minus}`);
console.log(`곱셈결과: ${result.multiply}`);
console.log(`나눗셈결과: ${result.divide}`);

// var r2 = operateAll(100, 4)[1];  
// console.log(`r2: ${r2}`);

// for (var n of operateAll(100, 4)) {

// }