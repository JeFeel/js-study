var money=3000;

// var food = money >= 2000? '라면':'삼각김밥';
// var food;

// if (money >= 2000){
//   food ='라면';
// } else {
//   food =`삼각김밥`;
// }

var food = money >= 5000? '볶음밥': (money >= 3000 ? '라면' : '굶음');
// if (money >= 5000){
//   food ='볶음밥';
// } else if (money >= 3000{
//   food =`라면`;
// } else {
//       food =`굶음`;
// }


console.log(`선택한 음식: ${food}`);

// **분기가 여러개 생성될 경우 삼항연산자 말고 
//    if else 문을 활용하자**