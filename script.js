var countDownDate = new Date("Feb 27, 2021 20:00:00").getTime();
var passwords = ["22. ÚNORA", "22. ÚNOR", "22.ÚNORA", "22.ÚNOR"]

function checkPassword() {

    //alert(document.getElementById("pass").value);
    var check = document.getElementById("pass").value;
    check = check.toUpperCase();
    check = check.trim();
    for (pass in passwords) {
        if (check == passwords[pass]) {
            success();
            return;
        }
    }
    fail();
}

function success() {
    clearInterval(x);
    document.getElementById("countdown").style.color = "green";
    setTimeout(() => { document.getElementById("countdown").innerHTML = "Virus deaktivován"; }, 1000);
    var url = "log.php?state=success&nick=" + document.getElementById("nick").value;
    httpGetAsync(url,console.log)
}

function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function fail() {
    //document.getElementById("countdown").style.color = "green";
    setTimeout(() => { document.getElementById("pass").value = ""; }, 500);
    setTimeout(() => { document.getElementById("info").innerHTML = "Chyba: -5 minut"; }, 200);
    setTimeout(() => { document.getElementById("pass").style.color = "red";; }, 200);
    setTimeout(() => { countDownDate = countDownDate - (5 * 60000); }, 200);
    setTimeout(() => { document.getElementById("info").innerHTML = ""; }, 2000);
    setTimeout(() => { document.getElementById("pass").style.color = "green";; }, 2000);
    var url = "log.php?state=fail&nick=" + document.getElementById("nick").value;
    httpGetAsync(url,console.log)
}


window.onload = function () {
    var input = document.getElementById("pass").focus();
}



// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    // Display the result in the element with id="demo"
    document.getElementById("countdown").innerHTML = hours + ":"
        + minutes + ":" + seconds + "";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 100);