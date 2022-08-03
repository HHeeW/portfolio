'use strick';

let total = 0;
let win = 0;
let lose = 0;
let sumWin, sumLose;
function srp(e){
    let str;
    let c = Math.floor(Math.random()*3);
    let Achievement = document.getElementById("Achievement");
    rsp(e, c, win);
    switch(e){
        case 0:
            Achievement.innerHTML += "가위, ";
            break;
        case 1:
            Achievement.innerHTML += "바위, ";
            break;
        case 2:
            Achievement.innerHTML += "보, ";
            break;
    }
    if (e == c) {
        str = "무승부!";
    }else if((e == 0 && c == 2)||(e == 1 && c == 0)||(e == 2 && c == 1)){
        str = "이겼다!";
        win++;
    }else{
        str = "졌다..!";
        lose++;
    }
    total++;
    sumWin = win / total*100;
    sumLose = lose / total*100;
    document.getElementById("result").innerHTML = str;
    document.getElementById("total-Num").innerHTML = total + "회";
    document.getElementById("win-Num").innerHTML = win + "회";
    document.getElementById("lose-Num").innerHTML = lose + "회";
    document.getElementById("totalWin").innerHTML = "승률 :"+sumWin.toFixed(2) + "%";
    document.getElementById("totallose").innerHTML = "패률 :"+sumLose.toFixed(2) + "%";

    let video = document.getElementById("backVideo");
    let h1 = document.getElementsByClassName("toph1");
    if(win == 50){
        video.removeAttribute("src");
        video.setAttribute('src', './video/fireworks.mp4');
        video.load;
        video.play;

        h1[0].innerHTML = "게임을 이겼습니다~!!";
        h1[0].style.color= "white";
        h1[0].classList.add("animate__flip");
        h1[1].classList.add("animate__shakeY");
        document.getElementById("game_win").innerHTML = "50번 이겨보자 (완료)"
        for(i = 0;i < h1.length; i++){
            h1[i].load;
        }
    }
}

let menu = ["짜장면", "돈까스", "된장국", "김치찌개", "회덮밥", "라면", "햄버거","볶음밥", "국수", "국밥"];
document.getElementById("menu").innerHTML = menu;

function lunch(){
    let menuNum = Math.floor(Math.random()*menu.length);
    document.getElementById("lunch").innerHTML = menu[menuNum]+" 먹자!";
}
function lotto(){
    let lotto =[];
    for(i = 1; i <= 7; i++){
        lotto.push(Math.floor(Math.random()*45 + 1) + "\u00a0");
    }
    document.getElementById("lotto").innerHTML = lotto;
}