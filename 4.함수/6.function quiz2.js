
/*
    Q. n개의 정수를 전달하면 해당 정수들의 총합과 평균을 
    반환하는 함수 calcNumbersTotalAndAverage를 작성하세요.
*/


function calcNumbersTotalAndAverage (...num){
    var addAll = 0;
    var average = 0;

    for(var n of num){
        addAll+=n;
    };
    average=addAll/num.length;
    
    return {
        total: addAll,
        avg: average
    }
}





var result = calcNumbersTotalAndAverage(90, 80, 100, 90); //360과 90이 리턴되어야 함!
console.log(`총합: ${result.total}, 평균: ${result.avg}`);

//숫자가 늘어나거나 줄어도 작동해야됨