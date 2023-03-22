/*
const increase = (()=>{
  let count = 0;
  return () => ++count;
})();

const decrease = (()=>{
  let count = 0;
  return () => --count;
})();

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //-1??? count가 지역변수이기 때문에 각각 따로 놂

//따라서 count를 한번만 써야 된다!
*/

/*
function counterClosure(){
  let count = 0;
  function increase() {
    return ++count;
  }
  function decrease() {
    return --count;
  }
  //동시에 리턴할 수는 없으므로 객체에 담아서 리턴
  return { increase, decrease };
  // return { increase: increase, decrease: decrease };

}

const counter = counterClosure(); //객체를 리턴받았으므로 객체 type
const increase = counter.increase;
const decrease = counter.decrease;

console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1
*/
/*
const counter =(()=>{

  let count = 0;

  const increase =()=> ++count;
  const decrease =()=> --count;

  return { 
    increase:() => ++count, 
    decrease:() => --count
  };
}
)(); 
const {increase, decrease} = counter;


console.log(increase()); //1
console.log(increase()); //2
console.log(decrease()); //1
*/

/*
function counterWithCbClosure(){
  let count = 0;
  function process(callback){
    return count = callback(count);
    //여기서 변수 갱신
  }

  return process; 
}
const counter_ = counterWithCbClosure();

console.log(counter_(c =>++c)); //1
console.log(counter_(c=>c+=3)); //4
console.log(counter_(c=>c**=2)); //16
*/

const counter_ = (() =>{
  let count = 0;
  return  callback => count = callback(count);
})();

console.log(counter_(c =>++c)); //1
console.log(counter_(c=>c+=3)); //4
console.log(counter_(c=>c**=2)); //16