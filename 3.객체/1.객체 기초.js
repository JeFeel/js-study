
///객체 리터럴(값)
var dog = {
  //property 작성
  name:'뽀삐',
  kind:'진돗개', 
  age:  3,
  // 'for waiting': 11,
  injection:  true,
  favorite: ['산책','간식'],
  hate: null,

};  //값이기 때문에 뒤에 세미콜론 붙여줘야됨

"hello".slice();

var cat = {
  //property 작성
  name:'콩순이',
  age:  2,
  kind: '블랙러시안',
  injection:  true,
  favorite: ['낮잠자기','방어지럽히기'],
};

console.log(typeof cat);

//객체에 저장된 데이터 참조
console.log(dog.name);
console.log(cat.age);
console.log(cat.favorite);
console.log(dog.favorite[0]); //산책

dog.favorite.push('꼬리 흔들기');
console.log(dog); 

dog.favorite.slice(1).splice(1,1);
// {
//   name: '뽀삐',
//   kind: '진돗개',
//   age: 3,
//   injection: true,
//   favorite: [ '산책', '간식', '꼬리 흔들기' ],
//   hate: null,
//   playWithChild: [Function: playWithChild]
// }

//프로퍼티 참조 2
console.log('================');
console.log(dog.injection); //true
console.log(dog['injection']); //true

//key를 변수에 저장
var fv = 'favorite';
console.log(cat[fv]); //문자열 favorite이 안에 들어가는 효과 (변수 참조)
//[ '낮잠자기', '방어지럽히기' ]  정상 출력

console.log('==============');
//프로퍼티 값 수정
dog.age = 4;
cat.favorite[1] = '실뭉치';

dog['injection'] =false;
console.log(dog);
console.log(cat);

console.log('===================');
//프로퍼티 동적 추가
cat.owner = '김철수'; //owner 새로 생성, 김철수로 저장
cat.owner = '박영희'; //owner 박영희로 수정
console.log(cat);

//프로퍼티 삭제
delete cat.owner;
console.log(cat);

console.log('===================');
//프로퍼티 존재 유무 확인
// key를 반드시 문자열로 표기!

var ageFlag = 'age' in cat; //boolean 값 저장
console.log(ageFlag); //true

//master라는 프로퍼티가 없으면 추가
var m = 'master';

if (!(m in cat)){
  cat[m]='김또또';
}
console.log(cat);

console.log('==============');

//객체를 순회하는 반복문
//of 배열 , in 객체
//key를 반복해서 추출해줌

for(var k in dog){
  // console.log(k); 문자열로 값들 출력-->''달려있는 상태
  // console.log(dog.k); undefined으로 나옴
  console.log(dog[k]);
}


//객체의 중첩구조
//예시 : 게시판

var articles = {
  totalCount: 25578,  //총 게시물 수
  admin: 'abc1234', //게시판 관리자 아이디
  page: 2558, //총 페이지 수
  articleList: [ // 게시물 목록
      {
          bno: 3, //글번호
          title: '가위바위보', //글제목
          writer: '김짱껨뽀',  //작성자
          content: '다덤벼 ^^', //글내용
          viewCount: 53, //조회수
          recomm: 10, //추천수
          regDate: '21-12-07' //작성일자
      }, 
      {
          bno: 2, //글번호
          title: '노는게', //글제목
          writer: '뽀로로',  //작성자
          content: '제일조와~~~', //글내용
          viewCount: 253, //조회수
          recomm: 11, //추천수
          regDate: '21-12-06' //작성일자
      }, 
      {
          bno: 1, //글번호
          title: '아멘', //글제목
          writer: '개신교신자',  //작성자
          content: '할렐루야', //글내용
          viewCount: 23, //조회수
          recomm: 5, //추천수
          regDate: '21-12-05' //작성일자
      }
  ]
};

console.log('======================');
console.log(articles.totalCount);
console.log(articles.articleList[1].writer); 
console.log(articles.articleList[2].regDate); 

var bbs = articles.articleList; //짧은 변수에 저장
bbs[0].writer;

var cnt = 0;
for (var x in articles.articleList[0]){ //key 갯수 7만큼 반복
  console.log(`${++cnt}!!`);
}
for (var y of bbs){ //articleList의 length는 3 -> 3번 반복
  
}