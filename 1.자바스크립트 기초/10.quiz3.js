
var n = +prompt(`정사각형을 그립니다. \n높이는 얼마입니까?`)
// var n = 3;
var star =``;
for (var i=0;i<n ;i++){
  for(var j=0;j<n;j++){
  star +=`* `;
  };
  star +=`\n`;
};

alert(star);
// console.log(star);

//풀이코드
