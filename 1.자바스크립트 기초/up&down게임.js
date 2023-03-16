
// 1 ~ 50 사이의 랜덤한 숫자하나가 정답으로 주어진다.
// 사용자는 이 사이의 숫자를 입력할 수 있어야 한다.
// 시스템은 입력한 숫자를 판단하여 up인지 down인지 알려줘야 한다.
// 만약 정답을 맞추지 못하면 지속해서 입력을 받고 결과를 알려준다.
// 정답을 맞추면 맞췄다는 메시지와 함께 프로그램을 종료한다.

// 사용자들은 입력 기회가 n번으로 제한된다. 
// 즉, n번 안에 정답을 맞추지 못할 경우 게임이 강제종료된다.

// 사용자는 게임 시작전에 난이도를 설정할 수 있다. 
// 난이도는 상, 중, 하 난이도가 존재하며 
// 난이도별 입력 횟수제한이 다르다.

//confirm 함수
// var restart = confirm(`게임을 다시 하시겠습니까?`);

while(true) { //전체 게임을 while문으로 묶음
    var HIGH =1, MIDDLE = 2, LOW = 3;
    //사용자의 초기 입력 기회
    var INIT_COUNT;

    while(true) {
    var level = +prompt(`[난이도를 설정하세요!]\n#[1.상 (기회 3번) | 2.중 (기회 6번) | 3.하 (기회 10번)]`);

    if(level === HIGH){
      INIT_COUNT = 3;
    }else if (level === MIDDLE){
      INIT_COUNT = 6;
    } else if (level === LOW){
      INIT_COUNT = 10;
    } else{
      alert(`난이도를 숫자로 다시 입력해주세요`);
      continue;
    };
      break;
    };
    //사용자의 입력 기회
    var count = INIT_COUNT; //입력이 끝나는 시점에 카운트다운

    //실제 정답
    var num = Math.floor(Math.random()*50)+1; //1~50

    //입력 최소값, 최대값
    var maxValue = 50, minValue = 1; //반복하면서 리셋되면 안 되니까 while 밖에서

    //게임 종료 code
    var gameEnd = false;

    //game start
    while(true) {
      //사용자 입력답
      var ans = +prompt(`숫자를 입력해주세요 [${minValue}~${maxValue}]`);
      //입력이 범위 안인가? (기회 안 깎아먹음)
      if(ans<minValue || ans>maxValue){
        alert(`범위 안의 값을 입력하세요`);
        continue;
      }
      count--;

      if (num === ans) {
        alert(`정답입니다! ${INIT_COUNT-count}번만에 맞췄습니다`);
        //초기횟수 - 도전횟수
        gameEnd =true ;
        break;
      } else if (num > ans) {
        alert(`UP!!`);
        minValue = ans + 1;
      } else {
        alert(`DOWN!!`);
        maxValue = ans - 1;
      }

      //추가 게임 종료 조건
      if(count<=0){
        alert(`졌습니다. 정답은 ${num}입니다.`);
        gameEnd = true ;
        break;
      }else{
        alert(`${count}번의 기회가 남았습니다`);
      };
    }; //end each game loop
      


    if(gameEnd){
      var exit = confirm(`한 판 더?`);
      if(!exit){
        alert(`수고하셨습니다`);
        break;
      };
    };

};//end all game loop
