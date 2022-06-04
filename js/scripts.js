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
    loan.innerHTML = la;
}


function calc2() {

    var m = parseFloat(document.getElementById("loanamount2").value);
    var i = parseFloat(document.getElementById("interestrate2").value) / 100;
    var n = parseFloat(document.getElementById("n2").value);
    var pay = (m * i * (Math.pow((1 + i), n))) / ((Math.pow((1 + i), n)) - 1);
    var payment = document.getElementById("payment2");
    payment.innerHTML = pay;
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
    payment.innerHTML = pay;
}