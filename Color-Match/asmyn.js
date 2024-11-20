const colors = ["Aqua", "Aquamarine", "Beige", "Black", "Blue", "BlueViolet", "Brown", "Chartreuse", "Crimson", "DarkBlue", "DarkOrange", "DeepPink","DarkMagenta","DarkKhaki","DarkOrchid","DeepSkyBlue","DodgerBlue","FireBrick","Fuchsia","Gold","GoldenRod","HotPink","Indigo","LightBlue","LightSeaGreen","MediumAquaMarine","OrangeRed","Teal"];

var len = colors.length;
var data1, data2, data3;
var score = 0;
var wrong = [];
var over = false;
var highest = 0;
var multiCount = 0;
var multi = 1;

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

function restart() {
    multi = 1;
    multiCount = 0;
    over = false;
    wrong = [];
    score = 0;
    document.getElementById("multi").innerHTML = "Multiplier: 1"
    document.getElementById("wrong").innerHTML = ""
    document.getElementById("score").innerHTML = "Score: "
    start();
}

document.addEventListener('keydown', function (pressedKey) {
    if (over == true) {
        if (pressedKey.key == "r") {
            restart();
        }
        else {
            gameOver();
        }
    }
    else {
        if (pressedKey.key == "ArrowRight") {
            answer(true);
        }
        else if (pressedKey.key == "ArrowLeft") {
            answer(false);
        }
        else if (pressedKey.key == "r") {
            restart();
        }
    }
})

function scoreCalc() {
    console.log("meleg")
    score += 50 * multi;
    multiCount += 1;
    if (multiCount == 4 && multi <= 9) {
        multi += 1;
        multiCount = 0;
    }
    document.getElementById("multi").innerHTML = "Multiplier: " + multi
    document.getElementById("score").innerHTML = "Score: " + score
    start();
}

function answer(ans) {
    if (ans == true && data1 == data3) {
        scoreCalc()
    }
    else if (ans == false && data1 != data3) {
        scoreCalc()
    }
    else {
        document.getElementById("score").innerHTML = "Score: " + score
        if (wrong.length == 3) {
            gameOver();
        }
        else {
            multiCount = 0;
            multi = 0;
            start();
            document.getElementById("wrong").innerHTML += " X" 
            wrong.push("x")
        }
    }

}

function gameOver() {
    if (over == false) {
            document.getElementById("wrong").innerHTML = "GameOver"
            if (highest < score) {
                highest = score;
                document.getElementById("highScore").innerHTML = "Highest Score: " + highest
            }
    }
    over = true;
}
