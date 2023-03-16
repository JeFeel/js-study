//구구단 출력

// var line = 1;
// var level = 2; //단수

//9번 반복
// while (line<=9){
//   console.log(`${level} x ${line} = ${level*line}`);
//   line++;
// }
//이하 for문 형태
// for(var line =1; line<=9;line++){
//   console.log(`${level} x ${line} = ${level*line}`);
// }

//중첩문
for (var level = 2;level<=9;level++){
  for(var line = 1; line<=9;line++){
    console.log(`${level} x ${line} = ${level*line}`);
  }
  console.log(`====================================`);
}



