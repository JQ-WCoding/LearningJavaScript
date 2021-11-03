let firstName = null;
let lastName = null;
// let nickName = 'jjj';
let nickName = null;
// 모두 null 이면 가장 마지막 값이 출력된다
alert( firstName ?? lastName ?? nickName ?? 'Anonymous' );