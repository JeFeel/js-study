
/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
    반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/


function calcNumbersTotalAndAverage (...num){
    //전달받은 숫자들은 num이라는 이름의 배열에 저장됨
    var total = 0;

    for(var n of num){
        total+=n;
    };
    var avg=total/num.length;
    
    return {
        total,
        avg
    }
}

//ES6에서 key와 property의 이름이 동일할 경우 하나로 줄여도 됨



var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

//숫자가 늘어나거나 줄어도 작동해야됨