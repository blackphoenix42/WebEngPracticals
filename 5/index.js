var n = prompt("enter a number");

var fib1 = 0, fib2 = 1, fib = 0;

if (n != null && n > 0) {
    document.write("First " + n + " fibonacci numbers are: <br>");
    if (n == 1)
        document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + fib1 + "<br>");
    else
        document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + fib1  + "<br>" + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + fib2 + "<br>");
    for (i = 3; i <= n; i++) {
        fib = fib1 + fib2;
        document.write("&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp" + fib + "<br>");
        fib1 = fib2;
        fib2 = fib;
    }
    document.write("<br>");
    var i = 0;
    document.write("The first " + n + " numbers and their squares are:<br>");
    document.write("<table border=4><tr><th><b>Number</b></th><th><b>Square</b></th></tr><br>");
    document.write("<br>");
    for (i = 1; i <= n; i++)
        document.write("<tr><td>" + i + "</td><td>" + i * i + "</td></tr>");
    document.write("</table>");
}
else
    alert("Enter a Vaild number");