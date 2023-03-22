
const userNames = ['김철수', '강감찬', '박영희'];

const [kim, kang, park]= userNames;

console.log(kim);
console.log(kang);
console.log(park);

const[firstObj]=[{id: 1},{id: 2},{id: 3}]
                .filter(obj => obj.id >= 2);
console.log(firstObj);

//변수 교환하기
let first=10 , second =20;

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
console.log(others);
console.log(numbers);

//스프레드로 배열 간편복사
console.log('==================');
const foods = ['감튀', 'DQPC', '징거버거'];

// const copyFoods = foods; 단순히 배열의 주소 복사

const copyFoods = [...foods, '사이다', '쥬스']; //새 배열 안에 foods의 요소들 복사
console.log(foods); //[ '감튀', 'DQPC', '징거버거' ]
console.log(copyFoods); //[ '감튀', 'DQPC', '징거버거', '사이다', '쥬스' ]

foods[0]  ='콜라';
console.log(foods); //[ '콜라', 'DQPC', '징거버거' ]
console.log(copyFoods); //[ '감튀', 'DQPC', '징거버거', '사이다', '쥬스' ]