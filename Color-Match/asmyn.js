const colors = ["Aqua", "Aquamarine", "Beige", "Black", "Blue", "BlueViolet", "Brown", "Chartreuse", "Crimson", "DarkBlue", "DarkOrange", "DeepPink",];

var len = colors.length;

function start() {
    writeColor();
}
function writeColor() {
    var asd = Math.floor(Math.random() * len);
    document.getElementById("colorText").innerHTML = colors[asd];
}