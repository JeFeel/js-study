function add(n1, n2){
 
  return  n1 + n2;
  //return에는 break 기능이 있다
  console.log('작동 안함');
}

//반환값: 함수 호출 이후에 함수빡으로 전달되는 값

var r1 = add(5,7);
add(r1, r1*2); //add(12,24)

//안쪽으로 쭉가서 실행, 같은레벨끼리는 왼쪽부터 실행행
var r2= add(add(2,3), add(add(3,4), add(6,2)));
console.log(`r2:${r2}`);  

//리턴이 없는 함수 (void 함수)

function multi(n1, n2){ //consumer 함수
  var result = n1*n2;
  console.log(`${n1} x ${n2} = ${result}`);
}

var r3 = multi(10,3); 
console.log(`r3: ${r3}`); //undefined
//변수에 담거나 다른 함수의 인수로 전달하면 x
//단독 호출해서 사용

multi(add(4,3), add(5,5));
var r4 = add(multi(3,2), 40); //Nan
console.log(`r4:${r4}`);


//return 탈출문
function callName(nickName){
  var prohibits = [`멍청이`, `돌아이`, `홍길동`];

  if(prohibits.includes(nickName)){
    console.log(`잘못된 닉네임은 인사를 못해줘 이놈아`);
    return;
  }
  console.log(`${nickName}님 안녕하세요!`);
}

callName(`돌아이`);

function stopLoop(){
  while(true){
    var flag = prompt('명령어를 입력하세요!');
    if(flag==='멈춰'){
      break;
      // return; 함수를 빠져나오는 더 강력한 break
    }
    alert(flag);
  
  }
  alert('수고용');
}

stopLoop();

