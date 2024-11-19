const colors = ["Aqua", "Aquamarine", "Beige", "Black", "Blue", "BlueViolet", "Brown", "Chartreuse", "Crimson", "DarkBlue", "DarkOrange", "DeepPink",];

var len = colors.length;
var data1, data2, data3;
var score = 0;

function start() {
    meaningText();
    textColor();
}
function meaningText() {
    var random = Math.floor(Math.random() * len);
    data1 = random;
    document.getElementById("meaningText").innerHTML = colors[random];
}

function textColor() {
    var random = Math.floor(Math.random() * len);
    var random1 = Math.floor(Math.random() * len);
    data2 = random;
    data3 = random1;
    document.getElementById("colorText").innerHTML = colors[random];
    document.getElementById("colorText").style.color = colors[random1];
}

document.addEventListener('keydown', function (pressedKey) {
    if (pressedKey.key == "ArrowRight") {
        answer(true);
    }
    else if (pressedKey.key == "ArrowLeft") {
        answer(false);
    }
})

function answer(ans) {
    if (ans == true && data1 == data3) {
        score += 1;
        console.log(score);
        start();
    }
    else if (ans == false && data1 != data3) {
        score += 1;
        console.log(score);
        start();
    }
    else {
        console.log('szar vagy hihi ;)')
        start();
    }

}
