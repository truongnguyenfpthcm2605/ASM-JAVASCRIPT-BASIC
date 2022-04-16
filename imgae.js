

var index = 0;
function back() {
    index--;
    if (index < 0) index = 7;
    var link = document.getElementById("image");
    link.src = "imgbanner/banner" + index + ".jpg";
    document.getElementById("count").innerHTML = index + "/7";
}
function next() {
    index++;
    if (index > 7) index = 0;
    var link = document.getElementById("image");
    link.src = "imgbanner/banner" + index + ".jpg";
    document.getElementById("count").innerHTML = index + "/7";
    link.style = "transition: all .5s linear";
}
setInterval("next()",3000);


