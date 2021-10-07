/* 自分の画面 */
/* 最初にプレイヤー0か1か選ぶ？先にWaitした方が0？ */
PlayerNum = 0;
function deal() {
  /* フロップ */
  /* ターン */
  /* リバー */
}
/* 自分の手札*/
let MyCard = [false, false]; /* 表か裏か、最初は裏 */
let imgMyCard1 = document.getElementById("myCard1");
let imgMyCard2 = document.getElementById("myCard2");
/* 場の共通カード*/
let imgSCard1 = document.getElementById("SCard1");
let imgSCard2 = document.getElementById("SCard2");
let imgSCard3 = document.getElementById("SCard3");
let imgSCard4 = document.getElementById("SCard4");
let imgSCard5 = document.getElementById("SCard5");
/* ボタン */
let dealButton = document.getElementById("deal");
let dealButton1 = document.getElementById("deal1");
let dealButton2 = document.getElementById("deal2");
let dealButton3 = document.getElementById("deal3");

const openMyCard1 = () => {
  if (MyCard[0]) {
    imgMyCard1.src = "./img/0.png";
    MyCard[0] = false;
  } else {
    imgMyCard1.src =
      "./img/" + cardP[PlayerNum][0][0] + "_" + cardP[PlayerNum][0][1] + ".png";
    MyCard[0] = true;
  }
};
const openMyCard2 = () => {
  if (MyCard[1]) {
    imgMyCard2.src = "./img/0.png";
    MyCard[1] = false;
  } else {
    imgMyCard2.src =
      "./img/" + cardP[PlayerNum][1][0] + "_" + cardP[PlayerNum][1][1] + ".png";
    MyCard[1] = true;
  }
};

const flop = () => {
  imgSCard1.src = "./img/0.png";
  imgSCard2.src = "./img/0.png";
  imgSCard3.src = "./img/0.png";

  imgSCard1.src = "./img/" + cardS[0][0] + "_" + cardS[0][1] + ".png";
  imgSCard2.src = "./img/" + cardS[1][0] + "_" + cardS[1][1] + ".png";
  imgSCard3.src = "./img/" + cardS[2][0] + "_" + cardS[2][1] + ".png";
  StageCount = 1;
};

const turn = () => {
  imgSCard4.src = "./img/0.png";
  imgSCard4.src = "./img/" + cardS[3][0] + "_" + cardS[3][1] + ".png";
  StageCount = 2;
};

const river = () => {
  imgSCard5.src = "./img/0.png";
  imgSCard5.src = "./img/" + cardS[4][0] + "_" + cardS[4][1] + ".png";
  StageCount = 3;
};

const stage4 = () => {};

const dealFunction = [flop, turn, river, stage4];

imgMyCard1.addEventListener("click", openMyCard1);
imgMyCard2.addEventListener("click", openMyCard2);
dealButton.addEventListener("click", dealFunction[StageCount]);
dealButton1.addEventListener("click", dealFunction[0]);
dealButton2.addEventListener("click", dealFunction[1]);
dealButton3.addEventListener("click", dealFunction[2]);
