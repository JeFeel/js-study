//함수 정의 -- 만든다!

function happyGreeting(yourName) {
  console.log(`${yourName}님 안녕하세요! 방가방가`);
  console.log(`오늘도 즐거운 하루 되세요~`);
}

//함수 호출 -- 사용한다!
// happyGreeting();
happyGreeting(`뽀로로`);
makeLine();

//1000줄
happyGreeting(`삐리리`);
makeLine();

//~~~~~
happyGreeting(`김두한`);

function makeLine(){
  console.log('========================');
};

for (var i = 0;i < 5;i++){
  makeLine();
}
//함수는 코드의 모듈화+재사용성을 위해!

//원의 넓이를 자주 구한다. 원주율 * 반지름 ^2

function calcCircleArea(r){
  var PI =3.14159265;
  var area = PI * r**2;
  return(area);
}

var r1 = calcCircleArea(5);
var r2 = calcCircleArea(15);
var r3 = calcCircleArea(20);

console.log(r1, r2, r3);