

// OR 연산: 첫번째 truthy를 반환
console.log('hello' || 'world'); //둘 다 true라서 왼쪽부터 선택됨
console.log(0 || '안녕');   //안녕

// AND 연산: 첫번째 falsy를 반환
console.log('=================');

console.log('HELLO' && 'WORLD');    //둘 다 true라서 오른쪽 끝까지 확인해도 false 없으니 WORLD
console.log(null && '메롱');        //null

/*

    <h1>안녕하세요 우리 홈페이지에 오신걸 환영합니다.</h1>
    isLogin() && <h2>xxx님 안녕하세요!</h2>

    쿠폰당첨플래그 && sendCoupon()

    isMineAritcle() && <button>수정</button>

*/