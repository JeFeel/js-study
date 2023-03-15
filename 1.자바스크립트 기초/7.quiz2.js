//양의 정수 입력

var num = +prompt('양의 정수 입력')
var result='';
//입력된 숫자만큼 + - 반복 출력
var k = 1
while(k<=num){
  if(k%2===1){
    result+='+';
  }else if(k%2===0){
    result+='-';
  }
  k++;
}
alert(result);

//입력된 숫자만큼 반복
//홀수번째 반복에는 +
//짝수번째 반복에는 -
// ==> 조건문으로 구분

//for문

// for(var k=1; k<=num;k++){
//   if(k%2===1){
//     result+='+';
//   }else if(k%2===0){
//     result+='-';
//   }
// }
// alert(result);