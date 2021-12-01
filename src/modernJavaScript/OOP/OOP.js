const person = {
    name: 'LEE',
    address: 'Seoul'
};
console.log( person );

// 객체지향 이전
function Circle( radius ) {
    this.radius = radius;
    this.getArea = function () {
        return Math.PI * this.radius ** 2;
    };
}

/*
Circle 생성자 함수는 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유
getArea 메서드를 하나만 생성하고 모두 공유하도록 하기
 */
const circle1 = new Circle( 1 );
const circle2 = new Circle( 2 );
console.log(circle1.getArea() === circle2.getArea());

// 프로토타입을 기반으로 바인딩
function Circle2( radius ) {
    this.radius = radius;
}
// 프로토타입 객체 내에 getArea 메소드가 존재함으로 하나의 메서드를 모두 공유하는 형식의 객체지향적
Circle2.prototype.getArea = function () {
    return Math.PI * this.radius ** 2;
}
