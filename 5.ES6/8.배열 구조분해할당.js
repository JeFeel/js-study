
const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park]= userNames;

console.log(kim);
console.log(kang);
console.log(park);

// const[firstObj]=[{id: 1},{id: 2},{id: 3}].filter(obj => obj.id >= 2);
const [firstObj, secondObj]=[{id: 1},{id: 2},{id: 3}].filter(obj => obj.id >= 2);
console.log(firstObj); //{id: 2}
console.log(secondObj);  //{id: 3}

//조건에 해당하는 것들 중 첫번째만 firstObj 객체에 저장

//변수 교환하기
let first=10 , second =20;
//10   , 20  //<==  //10,   20
[second, first] = [first, second];
console.log(first); //20
console.log(second);  //10

// 앞에 2개는 변수에 각각 넣고 나머지는 다시 배열로 묶고싶다
const numbers = [1,3,5,7,9,11];

const [one, three, ...others] = numbers;

/* const copyNumbers = numbers.slice();

const one = copyNumbers.shift();
const three = copyNumbers.shift();
const others = copyNumbers;
 */
console.log('==================');
console.log(one);
console.log(three);
console.log(others);  //배열로 출력됨
console.log(numbers); //전체 배열 출력 (원본이 변형 안된걸 증명)

//스프레드로 배열 간편복사
console.log('==================');
const foods = ['감튀', 'DQPC', '징거버거'];

// const copyFoods = foods; 단순히 배열의 주소 복사

const copyFoods = [...foods, '사이다', '쥬스']; //새 배열 안에 foods의 요소들 복사
console.log(foods); //[ '감튀', 'DQPC', '징거버거' ]
console.log(copyFoods); //[ '감튀', 'DQPC', '징거버거', '사이다', '쥬스' ]

foods[0]  ='콜라';
console.log(foods); //[ '콜라', 'DQPC', '징거버거' ]
console.log(copyFoods); //[ '감튀', 'DQPC', '징거버거', '사이다', '쥬스' ] , 별도의 사본이므로 영향 안 받음