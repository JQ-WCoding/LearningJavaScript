$(document).ready(function () {
    // 인터프리터에서 코드를 엄격하게 처리
    'use strict';

    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    // TODO : 그림 그리는 코드가 들어갈 자리
    // let c;
    // for (let x = 25; x < 400; x += 50) {
    //     for (let y = 25; y < 400; y += 50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'red';
    //     }
    // }
    const tool = new Tool();

    const c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    let text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'hello world';

    tool.onMouseDown = function (event) {
        // const c = Shape.Circle(event.point.x, event.point.y, 20);
        const c = Shape.Circle(event.point, 20); // 간략하게 포인트
        c.fillColor = 'red';
    }

    paper.view.draw();

    console.log("main.js loaded");
});