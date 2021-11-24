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

const decrease = (num) => {
  return --num;
}

const predicates = {increase,decrease};

function makeCounter( predicate ) {
    let num =0;

    return function (  ){
        num = predicate(num);
        return num;
    }
}

const increaser = makeCounter(predicates.increase);
console.log(increaser());
console.log(increaser());

const decreaser = makeCounter(predicates.decrease);
console.log(decreaser());
console.log(decreaser());