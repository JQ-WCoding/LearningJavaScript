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