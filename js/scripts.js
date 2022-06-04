var loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
})


// function openForm() {
//     document.getElementById("myform").style.display = "block";
//     document.getElementById("loan1").style.display = "none";

// }

// function closeForm() {
//     document.getElementById("myform").style.display = "none";
//     document.getElementById("loan1").style.display = "block";

// }

var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function calc1() {

    var m = parseFloat(document.getElementById("monthlypayment").value);
    var i = parseFloat(document.getElementById("interestrate1").value) / 1200;
    var n = parseFloat(document.getElementById("n1").value);
    var la = ((m * (1 - (1 / (Math.pow((1 + i), n))))) / i);
    var loan = document.getElementById("la");
    loan.innerHTML = la.toFixed(3);
}


function calc2() {

    var m = parseFloat(document.getElementById("loanamount2").value);
    var i = parseFloat(document.getElementById("interestrate2").value) / 100;
    var n = parseFloat(document.getElementById("n2").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment2");
    payment.innerHTML = pay.toFixed(3);
}


function calc3() {

    var m = parseFloat(document.getElementById("monthlypayment3").value);
    var i = parseFloat(document.getElementById("interestrate3").value) / 1200;
    // var n = parseFloat(document.getElementById("n2").value);
    var l = parseFloat(document.getElementById("loanbalance3").value);
    // var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var pay = (Math.log10((m / i) / ((m / i) - l))) / (Math.log10(1 + i));
    var payment = document.getElementById("n3");
    payment.innerHTML = Math.floor(pay);
}

function calc4() {

    var m = parseFloat(document.getElementById("loanamount4").value);
    var i = parseFloat(document.getElementById("interestrate4").value) / 100;
    var n = parseFloat(document.getElementById("n4").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("emi4");
    payment.innerHTML = pay.toFixed(3);
}

function calc5() {

    var m = parseFloat(document.getElementById("loanamount5").value);
    var i = parseFloat(document.getElementById("interestrate5").value) / 1200;
    var n = parseFloat(document.getElementById("n5").value);
    var pay = ((m * i) / (1 - (Math.pow((1 + i), -n))));
    var payment = document.getElementById("payment5");
    payment.innerHTML = pay.toFixed(3);
}

function calc6() {

    var m = parseFloat(document.getElementById("loanamount6").value);
    var i = parseFloat(document.getElementById("interestrate6").value) / 100;
    var n = parseFloat(document.getElementById("n6").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment6");
    payment.innerHTML = pay.toFixed(3);
}

function calc7() {

    var m = parseFloat(document.getElementById("loanamount7").value);
    var i = parseFloat(document.getElementById("interestrate7").value) / 100;
    var n = parseFloat(document.getElementById("n7").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment7");
    payment.innerHTML = pay.toFixed(3);
}

function calc8() {

    var m = parseFloat(document.getElementById("principal8").value);
    var i = parseFloat(document.getElementById("interestrate8").value) / 100;
    var n = parseFloat(document.getElementById("n8").value);
    var pay = m * (1 + (i * n));
    var payment = document.getElementById("payment8");
    payment.innerHTML = pay.toFixed(3);
}

function calc9() {

    var m = parseFloat(document.getElementById("principal9").value);
    var i = parseFloat(document.getElementById("interestrate9").value) / 100;
    var n = parseFloat(document.getElementById("n9").value);
    var pay = m * i * n;
    var payment = document.getElementById("payment9");
    payment.innerHTML = pay.toFixed(3);
}

function calc10() {

    var m = parseFloat(document.getElementById("principal10").value);
    var i = parseFloat(document.getElementById("interestrate10").value) / 100;
    var n = parseFloat(document.getElementById("n10").value);
    var nn = parseFloat(document.getElementById("nn10").value);
    var pay = m * (1 + (i / nn)) * (nn * n);
    var payment = document.getElementById("payment10");
    payment.innerHTML = pay.toFixed(3);
}


function calc11() {

    var m = parseFloat(document.getElementById("future11").value);
    var i = parseFloat(document.getElementById("interestrate11").value) / 100;
    var n = parseFloat(document.getElementById("n11").value);

    var pay = (m / (Math.pow((1 + i), n)));
    var payment = document.getElementById("payment11");
    payment.innerHTML = pay.toFixed(3);
}

function calc12() {

    var m = parseFloat(document.getElementById("future12").value);
    var i = parseFloat(document.getElementById("interestrate12").value) / 100;
    var n = parseFloat(document.getElementById("n12").value);

    var pay = m / (Math.pow((1 + i), n));
    var payment = document.getElementById("payment12");
    payment.innerHTML = pay.toFixed(3);
}

function calc13() {

    var m = parseFloat(document.getElementById("present13").value);
    var i = parseFloat(document.getElementById("interestrate13").value) / 100;
    var n = parseFloat(document.getElementById("n13").value);

    var pay = m * (Math.pow((1 + i), n));
    var payment = document.getElementById("payment13");
    payment.innerHTML = pay.toFixed(3);
}

function calc14() {

    var m = parseFloat(document.getElementById("cl14").value);
    var i = parseFloat(document.getElementById("ca14").value);
    var n = parseFloat(document.getElementById("ll14").value);
    var nn = parseFloat(document.getElementById("la14").value);
    var pay = (m + n) / (i + nn);
    var payment = document.getElementById("payment14");
    payment.innerHTML = pay.toFixed(3);
}

function calc15() {

    var m = parseFloat(document.getElementById("cl15").value);

    var n = parseFloat(document.getElementById("ll15").value);
    var nn = parseFloat(document.getElementById("eq15").value);
    var pay = (m + n) / nn;
    var payment = document.getElementById("payment15");
    payment.innerHTML = pay.toFixed(3);
}