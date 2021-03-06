/* 연산자 계산 우선 */
let x = 5, result;

// 먼저 result 에 값 초기화 후 x 증가
result = x++;
// 5, 6
console.log( result, x );
// x 값을 한번 증가하고 result 에 초기화
result = ++x;
// 7, 7
console.log( result, x );
// x 값을 result 에 초기화 후 감소
result = x--;
// 7, 6
console.log( result, x );
// x 값을 감소 시긴 값을 초기화
result = --x;
// 5, 5
console.log( result, x );

/* 타입 혼합에 따른 결과 출력 */
let y = '1' + 2;
console.log( y );

y = 1 + '2';
console.log( y );

y = 1 + 2;
console.log( y );

y = 1 + false;
console.log( y );

y = 1 + true;
console.log( y );

y = 1 + null;
console.log( y );

y = 1 + undefined;
console.log( y );

/* NaN 값 비교  isNaN 메소드 사용 */
isNaN( NaN );

/* Object.is() 일치 비교 연산자(===) 비슷하나 예측가능한 정확한 비교 결과를 반환 */
Object.is( -0, +0 ); // 결과는 false 이다

/* 드 모르간 법칙 */
y = !(x || y) === (!x && !y); //-> 보기 쉬운 표현식으로
y = !(x && y) === (!x || !y);

/* 지수 연산자  */
y = (-5) ** 2 // (-5) * (-5)

/* 이항 연산자  */
let num = 5;
num **= 2; // 5 * 5 = 25

// 이항 연산자가 우선순위 최상
num = 2 * 5 ** 2;


