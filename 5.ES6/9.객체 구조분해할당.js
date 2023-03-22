
const emp = {
  empName: '빡빡이',
  age : 29,
  hireDate: '2014-01-01',
  birthDay: '1995-12-31'
};
/* const {empName, birthDay, age} = emp; */
//key 값을 순서 상관없이 써도 됨 (배열과 차이점)

const {empName: en, birthDay:bd, age:a} = emp; 
//key 값 이름 변경

console.log(`${en}님의 나이는 ${a}살이고 생일은 ${bd}입니다`);

console.log('==========================');  

const {birthDay, age, ...rest} = emp;

console.log(birthDay);
console.log(age);
console.log(rest);

//객체 안전 복사: 스프레드
const copyEmp = {
  ...emp,
  address: '서울시',
  hobbies: ['놀고먹기', '낮잠'], 
  empName: '망둥어' //기존 이름 데이터가 변경됨
};

console.log(copyEmp);
