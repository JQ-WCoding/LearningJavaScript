$( document ).ready( function () {
    describe( "pow", function () {

        it( "주어진 숫자의 n 제곱", function () {
            assert.equal( pow( 2, 3 ), 8 );
            assert.equal( pow( 3, 4 ), 81 );
        } );

    } );

    // 객체 생성
    let user = {
        name: 'John',
        surname: 'Smith',
        // 이후에 선언된걸로 덮어쓰기 된다
        name: 'Pete',
    };
    delete user.name;


    let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
    }

    let sum = 0;
    for ( let key in salaries ) {
        sum += salaries[key];
    }

    let users = {
        name: "John",
        age: 30,

        sayHi() {
            // this 는 런타임에 결정되기 때문에 자유롭게 사용하기 편리하다
            alert( this.name );
        }, // 내부 메소드 선언 후에는 , 를 사용하여 구분을 지어야한다

        bye() {

        }
    }

    // 체인 코드
    let ladder = {
        step: 0,
        up() {
            this.step++;
            // 메소드 내에 객체를 다시 반환하는 메소드를 통해 체인을 사용할 수 있다
            return this;
        },
        down() {
            this.step--;
            return this;
        },
        showStep: function () {
            alert( this.step );
            return this;
        }
    };

    // 체인 형식은 이렇게 -> 위에서 아래로 내리는게 더 좋을 수도 있다
    ladder
        .up()
        .up()
        .down()
        .up()
        .down().showStep();


} );