

var n1 = 10;
var n2 = '20';

console.log(n1 + n2); //1020

var n3 = n1 + '';
console.log(typeof n3); //string

var n4 = '100' * 55;
console.log(n4); //5500


var n5 = +'99';
console.log(n5); //99

console.log('============================');

// js에서는 0, '', null, undefined, NaN는 거짓으로 판단한다.

// Falsy
if (undefined) console.log('ok1');
if (null) console.log('ok2');
if (0) console.log('ok3');
if ("") console.log('ok4');
if (NaN) console.log('ok5');
//위는 false라서 다 출력 안 됨

// Truthy
if (1) console.log('ok6');
if (-100.55) console.log('ok7');
if ('    ') console.log('ok8');
if ('hello!!!!') console.log('ok9');
if ([]) console.log('ok10');


for (var n = 1; n <= 10; n++) {
    if (n % 2) {
        console.log(n + ': 홀수입니다.');
    } else {
        console.log(n + ': 짝수입니다.');
    }
}


// while ('메롱') {

// }