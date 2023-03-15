// var sentence = '<ul>\n\t<li>\n\t\t<a>ddd</a>'
var sentence = `
<ul>
    <li>
      <a>hhhh</a>
    </li>
</ul>
`;
// 백틱 사용
console.log(sentence);

var month = 4;
var day = 5; 
var anniversary = '식목일';

// var message = month + '월 '
//                 + day + '일은 '
//                 + anniversary + '입니다.';
                
var message =`${month}월 ${day}일은 ${anniversary}입니다.`

console.log(message);                


//논리
var flag = false;
console.log(typeof flag);


var userAge = 5;
userAge = null; //데이터가 없다

var poppy = {
  name: '뽀삐',
  age:  3,
  kind: '진돗개'
}
poppy=null;