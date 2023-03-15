// var age = Math.random();



//1~100 난수 생성

/*
Math.floor(Math.random()*100)+1;  
1 <= ~  < 101

공식: x이상 y이하의 정수 난수
Math.floor(Math.random()* (y-x+1))+x;
*/

var age = Math.floor(Math.random()*100)+1   
//1 <= ~  < 101
//floor : 소숫점 버려줌

alert(`age: ${age}살`);


// var age = +prompt('당신의 나이는?');
// + :   age를 number로 형변환
// alert(`내 나이: ${age+1}살`);

// if (age > 19) {
//   alert('성인입니다');
//   alert('주류를 구매할 수 있습니다');
// }else if(age>=17){
//   alert('고등학생입니다');
// } else if (age>=14){
//   alert('중학생입니다');
// } else if (age>=8) {
//   alert('초등학생입니다');
// } else if (age<8){
//   alert('미취학 아동입니다');
// }