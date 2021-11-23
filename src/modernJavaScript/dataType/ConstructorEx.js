function foo(){}

const bar = function (  ){};

const baz = {
    x: function (  ){}
};

new foo(); // foo {}
new bar(); // bar {}
new baz.x(); // x {}


// 익명 함수 생성자
const arrow = () => {};

new arrow(); // type error

const obj = {
    x(){}
};

new obj.x(); // type error

// 함수의 정의 방식에 따라 constructor 와 non-constructor 구분
// 함수 선언문과 함수 표현식으로 정의된 함수만이 constructor 이다.

/*
* new 연산자
*/
function add(x,y){
    return x+y;
}

let inst = new add();
console.log(inst); // {} 빈 객체 생성

function createUser(name, role){
    return {name, role};
}

inst = new createUser('Lee', 'KA');
console.log(inst); // {name : "Lee", role : "KA"} 가 생성된다
