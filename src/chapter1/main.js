$(document).ready(function () {
    // 인터프리터에서 코드를 엄격하게 처리
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    // TODO : 그림 그리는 코드가 들어갈 자리
    var c = Shape.Circle(200, 200, 50);
    c.fillColor = 'green';
    paper.view.draw();

    console.log("main.js loaded");
});