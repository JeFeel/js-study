var a =5;
var b ='5';

//js는 등호 두개 쓰지 말기
console.log(a===b);
console.log(a!==b);

console.log('===========================');

// == 비교는 결과 예측이 어려움
// console.log('0'=='');  //false
// console.log(0 =='');   //true
// console.log('0'== 0);   //true
// console.log(false=='false');  //false
// console.log(false=='0');      //true


//문자 대소비교
console.log('===========================');
console.log('ace'<'ade'); //true
          //아스키코드
          //ace 97 99  
          //ade 97 100 

var money = 0;

if(!money) { //true
  console.log('저는 그지입니다.');
} else {
  console.log('저는 돈이 있습니다.');
}

  