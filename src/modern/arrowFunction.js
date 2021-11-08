function ask( question, yes, no ) {
    if ( confirm( question ) ) yes()
    else no();
}

ask(
    "동의하십니까?",
    function () {
        alert( "동의" );
    },
    function () {
        alert( "취소" );
    },
);

// 위의 ask 메소드를 축약하여 사용
ask(
    "동의하십니까?",
    () => alert( "동의" ),
    () => alert( "취소" ),
);

ask(
    "agree?",
    () => confirm( "checking" ),
    () => confirm( "no checked" ),
)
;

// 이게 맞나...?
// let askSol = ( question, yes, no ) => yes ? yes() : no();

let result = prompt( "Prompt Message", '100' );