/* 共通のデータなど */
/* 2人でやるならプレイヤー0、1の割り当てが必要 */
/* 2人×複数グループなら個別IDの発行が必要 */

/* フロップ、ターン、リバーなど、どの状態にあるか */
let StageCount = 1;
/* プレイヤー0の2枚,プレイヤー1の2枚,共通の5枚 */
/* 0:スペード,1:クラブ,2:ダイヤ,3:ハート 絵柄は4で割った実数部、余りの数+1が決める*/
/*[マーク,数字2~14(エースは14)] */

let randoms = [];
let card52 = [];
let numMin = 0,
  numMax = 51;

function intRandom(numMin, numMax) {
  return Math.floor(Math.random() * (numMax - numMin + 1)) + numMin;
}

for (i = numMin; i <= numMax; i++) {
  while (true) {
    var tmp = intRandom(numMin, numMax);
    if (!randoms.includes(tmp)) {
      randoms.push(tmp);
      break;
    }
  }
}
/* [マーク：0~3,数字：0~12：＋２の処理が必要] */
randoms.forEach(function (value, index) {
  card52[index] = [(value - (value % 13)) / 13, (value % 13) + 2];
});

let cardP0 = [card52[0], card52[1]];
let cardP1 = [card52[2], card52[3]];
let cardP = [cardP0, cardP1];
let cardS = [card52[4], card52[5], card52[6], card52[7], card52[8]];
