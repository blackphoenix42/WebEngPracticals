var c = ["red", "orangered", "yellowgreen", "pink", "purple","blue","cyan"];
var Index = 0;

setInterval(function () {
    document.body.style.cssText = "background-color: " + c[Index];
    Index++;
    if (Index >= c.length) {
        Index = 0;
    }
}, 5000);