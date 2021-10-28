// random 값을 출력하는 함수 -> 반환타입도 없음
function random(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}

function randomFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"][random(0, 5)];
}

// 금액
let funds = 50;
// 라운드 진행수
let round = 0;

while (funds > 1 && funds < 100) {
    // 라운드 수 증가
    round++;
    console.log(`round ${round}:`);
    console.log(`\t starting funds : ${funds}p`); // 총 내가 가지고 있는 금액 출력

    // 배팅 종류 -> 판당 어떤한 모양에 얼마를 걸지 판단하기 위해 반복문 내부에 선언되어 있다
    let bets = {
        crown: 0,
        anchor: 0,
        heart: 0,
        spade: 0,
        club: 0,
        diamond: 0,
    };

    let totalBet = random(1, funds);

    // 배팅이 7인경우 -> 행운 -> 전부 건다
    if (totalBet === 7) {
        totalBet = funds;
        bets.heart = totalBet;
    } else {
        // 총 배팅할 금액
        let remaining = totalBet;
        // do while 문을 통해 ->
        do {
            let bet = random(1, remaining);
            let face = randomFace(); // 랜덤 모양 초기화
            bets[face] += bet; // 해당 모양에 배팅값 추가
            remaining -= bet;
        } while (remaining > 0) // 남은게 0보다 많을 때 까지 반복문
    }
    funds -= totalBet;

    console.log(`\t bets: ` + Object.keys(bets).map(face => `${face} : ${bets[face]} pence`).join(',') + ` (total: ${totalBet} pence)`);
    // 배열 선언
    const hand = [];

    for (let roll = 0; roll < 3; roll++) {
        hand.push(randomFace());
    }

    console.log(`\t hand: ${hand.join(',')}`); // join(',') 통해 문자열 사이마다 , 추가하기

    let winnings = 0;

    for (let die = 0; die < hand.length; die++) {
        let face = hand[die];
        if (bets[face] > 0) winnings += bets[face];
    }
    funds += winnings;
    console.log(`\t winnings: ${winnings}`);
}
console.log(`\t ending funds : ${funds}`);

// sample
let x = 3, y;
x += y = 6 * 5 / 2;
console.log(x);
// x += y = 15;
// x += 15;
// 18

const obj = {b: 2, c: 3, d: 4};
const {a, b, c} = obj;
console.log(a, b, c);

const arr = [1, 2, 3, 4, 5];
let [i, j, ...rest] = arr;
console.log(i, j, rest);

// if (!options) options = {};
//
// options = options || {};

const f1 = () => "hello";
const f2 = (name) => `Hi, ${name}`;
const f3 = (a, b) => a + b;


const bruce = {name: "Bruce"};

function greet() {
    return `Hello, I'm ${this.name}`;
}

greet();
greet.call(bruce); // call() 의 첫번째 인자값은 this로 사용할 값이다

console.log(greet.call(bruce));

const x1 = 3;

function f4() {
    console.log(x1);
    console.log(y1);
}
// 스코프 영역을 다르게 하기 위함
{
    const y1 = 5;
    f4();
}