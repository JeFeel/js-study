
var x =10; //전역 변수 : 프로그램 전체 영역에서 사용가능

//함수의 매개변수도 지역스코프를 가짐
function foo(z){
  console.log(`지역변수 x  선언전:${x}`);
  var y = 20+x; //지역 변수 y : 해당 함수 안에서만 사용가능
  console.log(y-z); 

  var x = '홍길동'; //var를 써버려서 x가 다시 선언됨
  console.log(`지역변수 x 선언후: ${x}`);
}

// console.log(y); //참조에러: y가 정의되지 않음
//함수 안에서 만든 y는 밖에서 사용 불가
foo(50);

console.log(`함수호출 후 x의값: ${x}`);

console.log('====================');
//중첩 함수 : 함수안에 함수를 정의

function outer (m)  {
  var n = 'outer local n';
  var v = 'outer local v';
  console.log(m);
  console.log(n);
  console.log(v);

  //헬퍼 함수 : 호출이 함수 내부로 제한됨
  function inner(){
    console.log(n); //outer의 안에 있기 때문에
    var m ='inner local m';
    var v = 'inner local v';

    console.log(m);
    console.log(v);
  }
  inner();
}
var m = 'global m';

outer('outer param m');

