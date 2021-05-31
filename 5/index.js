var n = prompt("enter a number");

var fib1 = 0, fib2 = 1, fib = 0;

if (n != null && n > 0) {
    document.write("First " + n + " fibonacci numbers are: <br>");
    if (n == 1)
        document.write("" + fib1 + "<br>");
    else
        document.write("" + fib1 + "<br>" + fib2 + "<br>");
    for (i = 3; i <= n; i++) {
        fib = fib1 + fib2;
        document.write("" + fib + "<br>");
        fib1 = fib2;
        fib2 = fib;
    }
    document.write("<br>")
    var i = 0;
    document.write("The first " + n + " numbers and their squares are: ");
    document.write("<table border=1><tr><th><b>Number</b></th><th><b>Square</b></th></tr><br>");
    for (i = 1; i <= n; i++)
        document.write("<tr><td>" + i + "</td><td>" + i * i + "</td></tr><br>");
    document.write("</table>");
}
else
    alert("No proper input");