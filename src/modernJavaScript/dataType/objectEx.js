let counter = {
    num: 0,
    // 메서드
    increase: function () {
        this.num++;
    }
};


let circle = {
    radius: 5,
    getDiameter: function () {
        return 2 * this.radius;
    }
};
console.log( circle.getDiameter() );

let str = 'string';
str[0] = 'S';
console.log( str ); // 'string' 으로 출력 -> 원시 값은 어떤 일이 있어도 불변

// 객체 비교
const person1 = {
    name: 'Lee',
    age: 20
};


const person2 = {
    name: 'Lee',
    age: 20
};

console.log( person1 === person2 ); // false
console.log( person1.name === person2.name ); // true -> 'Lee' === 'Lee' 를 비교하는 것이기 때문에 동일한 상황
console.log( person1.age === person2.age );

function add( a, b ) {
    return a + b;
}

let num = add( 3, 4 );
console.log( num );

const funcEx = function () {
    return 'hi';
};

funcEx();

// 더하기 메소드 화살표 함수로 표현
let adding = ( x, y ) => x + y;


// 일급 객체
const increase = function ( num ) {
    return ++num;
}

const decrease = ( num ) => {
    return --num;
}

const predicates = {increase, decrease};

function makeCounter( predicate ) {
    let num = 0;

    return function () {
        num = predicate( num );
        return num;
    }
}

const increaser = makeCounter( predicates.increase );
console.log( increaser() );
console.log( increaser() );

const decreaser = makeCounter( predicates.decrease );
console.log( decreaser() );
console.log( decreaser() );

// 내부 객체 보는 방법
function square( num ) {
    return num * num;
}

console.dir( square );
console.log( Object.getOwnPropertyDescriptor( square ) );


// arguments
function sum() {
    let res = 0;

    for ( let i = 0; i < arguments.length; i++ ) {
        res += arguments[i];
    }
    return res;
}

// arguments 는 유사 배열 객체이다. 따라서, for 문 순회가 가능
console.log( sum() );
console.log( sum( 1, 2 ) );
console.log( sum( 1, 2, 3, ) );

// length 프로퍼티는 함수를 정의할 때 선언한 매개변수의 개수를 알려준다
function fooo() {
}

console.log( fooo.length );

function fooo2( x, y ) {
    return x, y
}

console.log( fooo2.length );

// name -> es6 이후 정식 표준
var namedFunc = function foo() {
};
console.log( namedFunc.name ); // foo 가 출력

var anonymousFunc = function () {
};
console.log( anonymousFunc.name ); // es5 : 빈 문자열을 값으로 가지지만, es6: 함수객첼ㄹ 가리키는 변수 이름을 값으로 가져 anonymousFunc 이 출력된다

