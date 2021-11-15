let text = document.querySelectorAll( '.style-scope ytd-thumbnail-overlay-time-status-renderer' );

const totalTime = function ( text ) {
    let total = 0;
    for ( let i = 0; i < text.length; i++ ) {
        total += Number( text[i].children[1].innerText.split( ':' )[0] * 60 ) + Number( text[i].children[1].innerText.split( ':' )[1] );
    }
    return total;
}
// var es5 버전 <-  let, const es6 이후 -> // var 항상 선언이 전역 -> var 사용함으로서 호이스팅 선언/초기화 -> 선언에 대하는거는 무조건 다 상단으로 끌어올려요
// undefined
// let, const 자기가 원할때 스코프를 정해서 사용할 수 있고, let -> 초기화를 계속 해줄 수 있는 경우 -> 값이 자주 변경될 사항이 있을 대
// const -> pi = 3.141414123421524156 -> 상수 -> 초기화를 다시 할 수 없어요
const timeConverter = function ( total ) {
    const h = Math.floor( total / 3600 );
    const m = Math.floor( total % 3600 / 60 );
    const s = Math.floor( total % 3600 % 60 );
    const hScreen = h + '시간, ';
    const mScreen = m + '분, ';
    const sScreen = s + '초';

    return hScreen + mScreen + sScreen + '';
}

const showLength = function () {
    let totalTime = totalTime( text );
    let result = timeConverter( totalTime );
    console.log( result );
}

showLength();
