console.log( hi );

var hi = 'hi';

function add( a, b, c ) {
    a = a || 0;
    b = b || 0;
    c = c || 0;
    return a + b + c;
}

console.log( add( 1, 2, 3 ) );
console.log( add( 1 ) );
console.log( add( 1, 2 ) );
console.log( add() );

function add2( a = 0, b = 0, c = 0 ) {
    return a + b + c;
}

// 매개변수가 3개 이상이면 하나의 매개변수를 객체로 받아 객체의 인수를 전달하는 것이 유리
$.ajax( {
    method: 'POST',
    url: '/user',
    data: {
        id: 1,
        name: 'LEE'
    },
    cache: false
} );

function changeValue( primitive, obj ) {
    primitive += 100;
    console.log( primitive );
    obj.name = 'KIM';
    obj.age += 10;
}

let num = 100; // 현재 primitive 형과 같이 정수형의 값은 함수 내부에서는 잠시 변경되지만 다시 외부에서는 그대로 100의 결과 값을 가지고 있다
// 오브젝트의 참조주소가 변경되어 값이 바뀐 다른 주소를 참조하지만,
let person = {
    name: 'LEE',
    age: 10
};

console.log( num );
console.log( person );

// num 에 영향을 주지 않는다 -> 주소를 변경하는 것이 아니니까
changeValue( num, person );

console.log( num );
console.log( person );

function factorial( n ) {
    if ( n <= 1 ) return 1;
    return n * factorial( n - 1 );
}

console.log( factorial( 10 ) );

function repeat( n, f ) {
    for ( let i = 0; i < n; i++ ) {
        f( i );
    }
}

let logAll = function ( i ) {
    console.log( i );
}

repeat( 5, logAll );
// repeat( 5, logOdds ); -> 먼저 사용하려하면 표현식의 경우 선언되지 않았기 때문에 사용이 불가능하다

let logOdds = function ( i ) {
    if ( i % 2 ) console.log( i );
}

repeat( 5, logOdds );


// 스코프 범위
var x = 'global';

function foo() {
    var x = 'local';
    console.log( x ); // 가장 가까운 local 의 x 표현식을 출력한다
    // console.log( this.x ); -> 하지만 this. 이 붙은 경우에는 this 는  object 를 가리킨다. 따라서, 해당 객체의 x 즉 가장 외부에 선언되어 있는 값을 가져오는 것이다.
    // 반대로, 객체를 선언하고 해당 this 를 사용한다면 또 다른 경우가 발생
}

foo();

console.log( x );

let z = 1;

function foo2() {
    let z = 10;
    bar2();
}

function bar2() {
    console.log( z );
}


// 은닉화 -> private, protected, public 등이 없기 때문에
// function 내부에 변수를 선언하여 private 과 같이 접근 불가능하도록 만든다
// 이외에 메소드를 통해 값을 확인할 수 있다.
const Counter = (function () {
    let num = 0;

    return {
        increase() {
            return ++num;
        },
        decrease() {
            return --num;
        }
    };
}());

console.log( Counter.num );
console.log( Counter.increase() );
console.log( Counter.increase() );
console.log( Counter.decrease() );
console.log( Counter.decrease() );

// let const 는 모두 호이스팅이 발생하지 않는 것 처럼 보이지만 사실 호이스팅이 되긴한다

const human = {
    name: 'LEE'
}
human.age = 30;

console.log( Object.getOwnPropertyDescriptors( human ) );

const person1 = {
    firstName: 'James',
    lastName: 'Lee',

    get fullName() {
        return `${ this.firstName } ${ this.lastName }`;
    },

    set fullName( name ) {
        [ this.firstName, this.lastName ] = name.split( ' ' );
    }
}

console.log( person1.firstName + ' ' + person1.lastName );

person1.fullName = 'Michael Kim';
console.log( person1 );

console.log( person1.fullName );