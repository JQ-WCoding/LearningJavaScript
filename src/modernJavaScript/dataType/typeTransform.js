/*
    true || anything -> true
    false || anything -> false
    true && anything -> anything
    false && anything -> false
 */


function getStringLength( str ) {
    // or 연산자를 통해 매개변수를 받지않아 null 인 경우, Falsy 값임으로 뒤의 '' 값을 넘겨준다
    str = str || '';
    return str.length;
}

getStringLength(); // 0
getStringLength( 'hi' ); // 2

// 기본값 매개변수 내에 선언 가능 (es6)
function getStringLength2( str = '' ) {
    return str.length;
}

// 옵셔널 체이닝 연산자
let elem = null;
let value = elem?.value;
console.log( value );

// 단적인 예
let str = '';
length = str && str.length;
console.log( length ); // 길이가 0 임을 출력해야하는데 ''을 출력함

// 옵셔널 체이닝을 통해 길이를 표현
length = str?.length;
console.log( length );

// null 병합 연산자
let foo = '' ?? 'default string';
console.log( foo );

// 예외
foo = '' || 'default string';
console.log( foo ); // 'default string' 이 출력됨


// 명칭 부여 -> 표현식 mathEx 어떤 행위를 하는지 표현한 문구 -> 표현식을 쓰면 -> 이 현식을 더 많이 사용하는걸 권장 -> json
// var 여도 상관없음
const mathEx2 = function () {

};

console.log( mathEx2() );

// 메소드 선언 방법
function mathEx() {

}



