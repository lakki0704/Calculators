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

function calc1() {

    var m = parseFloat(document.getElementById("monthlypayment").value);
    var i = parseFloat(document.getElementById("interestrate1").value) / 1200;
    var n = parseFloat(document.getElementById("n1").value);
    var la = ((m * (1 - (1 / (Math.pow((1 + i), n))))) / i);
    var loan = document.getElementById("la");
    loan.innerHTML = la;
}