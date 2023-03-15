// var num1 = +prompt('첫번째 숫자를 입력!');
// var num2 = +prompt('두번째 숫자를 입력!');
// var total = 0;
// var n=num1;

// if(num1>num2){
//   n=num1;
//   num1=num2;
//   num2=n;
// }


// while (n<=num2){
//   total+=n;
//   n++;
// };

// alert(`${num1} ~ ${num2}까지의 누적합: ${total}`);


// x ~ y까지의 누적합
var x = +prompt('첫번째 숫자를 입력!');
var y = +prompt('두번째 숫자를 입력!');
if(x>y){
  //swap
  var t;
  t=x;
  x=y; 
  y=t;
}
var total = 0;
var n = x;

while (n <= y) {
    // 반복 코드
    total += n;

    n++;
}
alert(`${x} ~ ${y}까지의 누적합: ${total}`);