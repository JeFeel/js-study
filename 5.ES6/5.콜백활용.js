console.log('====================userList예제');

const userList = [
  {
      account:'abc1234',
      userName: '대길이',
      job:'추노',
      address: '서울',
      hobby: ['수영', '축구', '테니스']
  },
  {
    account:'banana',
    userName: '빠나나',
    job:'과일',
    address: '서울',
    hobby: ['푸드파이팅', '테니스']
  },
  {
    account:'park1234',
    userName: '주차왕',
    job:'발렛파킹',
    address: '경기',
    hobby: ['족구', '축구', '테니스', '영화감상']
  },
  {
    account:'fire',
    userName: '불꽃남자',
    job:'게이머',
    address: '서울',
    hobby: [ '독서', '테니스']
  }
]

//회원목록에서 회원정보를 출력하는 함수
function alertUserInfo(wannaSay){
  for(const user of userList){
    wannaSay(user);
    
  }
}

alertUserInfo( u=> { console.log(`나는 ${u.userName}입니다`);});

//배열 고차 함수
//forEach(): 배열의 요소를 반복하면서 하니씩 꺼내줌
userList.forEach(user=>{console.log(user.address);});

const numbers =[10,20,30,40];
let total =0;
numbers.forEach(n=>total+=n);
console.log(`총합: ${total}`);

//취미가 둘인 회원들만 필터링
/* function filter2Hobby(){
  //새로운 배열 생성
  const filteredArray = [];

  for(const user of userList){
    if (user.hobby.length === 2){
      filteredArray.push(user);
    }
  }
  return filteredArray;
} */
// const newArray = filter2Hobby();
// console.log(newArray);

//특정 필터조건에 의해 필터링되는 함수 (콜백)
function filter(condition){

    //새로운 배열 생성
    const filteredArray = [];

    for(const user of userList){
      if (condition(user)){
        filteredArray.push(user);
      }
    }
    return filteredArray;
}

// const newArray = filter(u=>u.address ==='서울');
const newArray = filter(u=>u.hobby.length ===3);
console.log(newArray);

//배열 고차함수 filter()
//특 정 조건에 의해 필터링된 배열을 반환
console.log('====================filter');

const numberArray = [1,2,3,4,5,6,7,8,9,10];

const newArr = numberArray.filter(n => n%3===0);
console.log(newArr);

const user1=userList.filter(user => user.account ==='abc1234');
console.log(user1);

console.log('====================map');
//배열 고차함수 map()
//특정 배열에서 특정 조건에 맞는 값들만 따로 모아서 
//매핑한 배열을 반환

const doubles = numbers.map(n=>n**2);
console.log(doubles);

const plusTwo = numberArray.map(n=>n+2);
console.log(plusTwo);

const userNames = userList.map(user => user.address);
console.log(userNames);

//filter와 map의 차이
//filter: 조건에 따라 요소들이 걸러짐 (총 요소 갯수 변화 有)
//map: 조건에 맞게 요소들을 바꿔줌 (총 요소 갯수 변화 無)


//userList에서 원하는 프로퍼티 값을 매핑하는 함수
function myMap(callback){

  //값을 담을 배열
  const mappedArray =[];

  for(const user of userList){
    mappedArray.push(callback(user));
  }
  return mappedArray;
}

// const userNames2 = myMap();
const userNames2 = myMap(user => ({
  userName: user.userName,
  address:  user.address
  }));
console.log(userNames2);

console.log('====================appleBasket예제');

const appleBasket = [
  {
      color: 'green',
      sweet: 13
  },
  {
      color: 'red',
      sweet: 14
  },
  {
      color: 'red',
      sweet: 11
  },
  {
      color: 'green',
      sweet: 6
  },
  {
      color: 'green',
      sweet: 7
  },
  {
      color: 'green',
      sweet: 9
  },
];

//사과 중 녹색이면서 당도가 9 이상인 사과만 선별하여 
//이 사과는 xxx색이며 당도가 xxx입니다.
//라는 문자열이 모여있는 배열을 리턴하세요

const filteredApples = 
    appleBasket
        .filter(apple => apple.color === 'green' && apple.sweet >= 9)
        .map(apple => `이 사과는 ${apple.color}색이면서 당도는 ${apple.sweet}입니다.`);
        //메서드 체인

console.log(filteredApples);

console.log('====================Quiz1')

  //userList에서 서울사는 user들의 
  //첫번째 취미만 배열에 모아서 리턴
  userList //[{5}, {5}, {5}, {5}]
    .filter(user => user.address === '서울') //[{5}, {5}, {5}]
    .map(user => user.hobby[0]) // ['','',''] user가 아닌 hobby
    .forEach(hobby => {
      console.log(`회원의 첫번째 취미는 ${hobby}입니다`);
    });

    console.log('====================Quiz1 alternate')

    userList //[{5}, {5}, {5}, {5}]
    .filter(user => user.address === '서울') //[{5}, {5}, {5}]
    .map(user =>  ({
        firstHobby: user.hobby[0],
        name: user.userName
    })) // [{2}, {2}, {2}] 
    .forEach(info => {
      console.log(`${info.name} 회원의 첫번째 취미는 ${info.firstHobby}입니다`);
    });