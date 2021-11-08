const SYM = Symbol();

const o = { a: 1, b: 2, c: 3, [SYM]: 4 };

for ( let prop in o ) {
    // 다른 타입의 속성을 가지고 있는 경우를 대비한 조건문
    if ( !o.hasOwnProperty( prop ) ) continue;
    console.log( `${ prop }: ${ o[prop] }` );
}

Object.keys( o ).forEach( prop => console.log( `${ prop }: ${ o[prop] }` ) );

const c = { apple: 1, xochitl: 2, ballon: 3, guitar: 4, xylophone: 5 };

Object.keys( c ).filter( prop => prop.match( /^x/ ) ).forEach( prop => console.log( `${ prop }: ${ c[prop] }` ) );

class Car {
    constructor( make, model ) {
        this.make = make;
        this.model = model;
        this._userGears = [ 'P', 'N', 'R', 'D' ];
        this._userGear = this._userGears[0];
    }

    get userGear() {
        return this._userGear;
    }

    set userGear( value ) {
        if ( this._userGears.indexOf( value ) < 0 ) throw new Error( `Invalid gear : ${ value }` );
        this._userGear = value;
    }

    shift( gear ) {
        this.userGear = gear;
    }
}


class Vehicle {
    constructor() {
        this.passengers = {};
        console.log( "Vehicle created" );
    }

    addPassenger( p ) {
        this.passengers.push( p );
    }
}

class Cars extends Vehicle {
    constructor() {
        super();
        console.log( "Car created" );
    }

    deployAirbags() {
        console.log( "Bwoosh!" );
    }

    toString(){
        
    }
}

const v = new Vehicle();
v.addPassenger( "Frank" );
v.addPassenger( "Judy" );
v.passengers;

const c = new Cars();
c.addPassenger( "Alice" );
c.addPassenger("Cameron");
c.deployAirbags();
