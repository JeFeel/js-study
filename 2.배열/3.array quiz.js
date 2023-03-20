/*
- Quiz. 
아래 요구사항에 맞는 코드를 작성하고 
브라우저에서 실행하여 테스트하세요.
- 요구사항
1. prompt 창을 띄워 사용자에게 숫자를 입력해 달라고 요청한 후, 
  입력받은 값들을 배열에 순차적으로 저장합니다.
  
2. '그만'이라고 입력하면 질문을 멈추고
  입력했던 숫자배열과 숫자의 총합(배열 요소의 합)을 계산하여 출력하세요.
*/

var arr = [];
var sum = 0;
while(true){
  var num = prompt(`숫자를 입력하세요.\n그만두려면 '그만'이라고 입력하세요!`);
  
  if(num==="그만"){
    // arr.pop();   push를 if문 밑에 적으면서 불필요한 과정 삭제
    // for(var i=0;i<arr.length;i++){
      //     sum+=parseInt(arr[i]);
      // };
      
      for(var element of arr){
        sum+=parseInt(element);
      };
      alert(`입력한 숫자 목록 [${arr}]\n입력한 숫자 통합: ${sum}`);
      break;
    };
    
    arr.push(num); //위에 적게 되면 '그만'메세지를 pop해야됨
    //arr.push(+num);

};