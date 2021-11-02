const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };


// const userRoles = new Map();
//
// // u4는 역할이 없다
// userRoles.set( u1, 'User' )
//     .set( u2, 'User' )
//     .set( u3, 'Admin' );

// 상단의 내용 단축 표현
const userRoles = new Map( [
    [ u1, 'User' ],
    [ u2, 'User' ],
    [ u3, 'Admin' ],
    [ u4, 'User' ],
] );

console.log( userRoles.get( u3 ) );
console.log( userRoles.size );

for ( let u of userRoles.keys() ) {
    console.log( u.name );
}

for ( let r of userRoles.values() ) {
    console.log( r );
}

userRoles.delete( u2 ); // 요소 삭제

// entries 를 이용해 값을 전부 가져오고 -> 해당 값을 통해 let 으로 선언된 값을 각각 map 형식으로 u.name / r 로 가져온다 -> key value 값
for ( let [ u, r ] of userRoles.entries() ) {
    console.log( `${ u.name }: ${ r }` );
}

class Log {
    constructor() {
        this.messages = [];
    }

    add( message ) {
        this.messages.push( { message, timestamp: Date.now() } );
    }

    [Symbol.iterator]() {
        return this.messages.values();
    }
}

const log = new Log();
log.add( "First day at sea" );
log.add( "spotted whale" );
log.add( "spotted another vessel" );

for ( let entry of log ) {
    console.log( `${ entry.message }@${ entry.timestamp }` );
}

