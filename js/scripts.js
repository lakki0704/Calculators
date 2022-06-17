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

function calc16() {

    var m = parseFloat(document.getElementById("m16").value);

    var i = parseFloat(document.getElementById("i16").value);
    var n = parseFloat(document.getElementById("n16").value);
    var pay = (m + i + n) / n;
    var payment = document.getElementById("payment16");
    payment.innerHTML = pay.toFixed(3);
}


function calc17() {

    var m = parseFloat(document.getElementById("m17").value);

    var i = parseFloat(document.getElementById("i17").value);
    // var n = parseFloat(document.getElementById("n16").value);
    var pay = (m / i);
    var payment = document.getElementById("payment17");
    payment.innerHTML = pay.toFixed(3);
}

function calc18() {

    var m = parseFloat(document.getElementById("m18").value);

    var i = parseFloat(document.getElementById("i18").value);
    var n = parseFloat(document.getElementById("n18").value);
    var pay = (m - i) / n;
    var payment = document.getElementById("payment18");
    payment.innerHTML = pay.toFixed(3);
}


function calc19() {

    var m = parseFloat(document.getElementById("m19").value);

    var i = parseFloat(document.getElementById("i19").value);
    var n = parseFloat(document.getElementById("n19").value);
    var pay = (m + i) / n;
    var payment = document.getElementById("payment19");
    payment.innerHTML = pay.toFixed(3);
}


function calc20() {

    var m = parseFloat(document.getElementById("m20").value);

    var i = parseFloat(document.getElementById("i20").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m - i);
    var payment = document.getElementById("payment20");
    payment.innerHTML = pay.toFixed(3);
}


function calc21() {

    var m = parseFloat(document.getElementById("m21").value);

    var i = parseFloat(document.getElementById("i21").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m / i);
    var payment = document.getElementById("payment21");
    payment.innerHTML = pay.toFixed(3);
}



function calc22() {

    var m = parseFloat(document.getElementById("m22").value);

    var i = parseFloat(document.getElementById("i22").value);
    // var n = parseFloat(document.getElementById("n19").value);
    var pay = (m / i);
    var payment = document.getElementById("payment22");
    payment.innerHTML = pay.toFixed(3);
}


function calc23() {

    var m = parseFloat(document.getElementById("m23").value);

    var i = parseFloat(document.getElementById("i23").value);
    var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment23");
    payment.innerHTML = pay.toFixed(3);
}

function calc24() {

    var m = parseFloat(document.getElementById("m24").value);

    var i = parseFloat(document.getElementById("i24").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment24");
    payment.innerHTML = pay.toFixed(3);
}


function calc25() {

    var m = parseFloat(document.getElementById("m25").value);

    var i = parseFloat(document.getElementById("i25").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment25");
    payment.innerHTML = pay.toFixed(3);
}


function calc26() {

    var m = parseFloat(document.getElementById("m26").value);

    var i = parseFloat(document.getElementById("i26").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment26");
    payment.innerHTML = pay.toFixed(3);
}


function calc27() {

    var m = parseFloat(document.getElementById("m27").value);

    var i = parseFloat(document.getElementById("i27").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment27");
    payment.innerHTML = pay.toFixed(3);
}



function calc28() {

    var m = parseFloat(document.getElementById("m28").value);

    var i = parseFloat(document.getElementById("i28").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment28");
    payment.innerHTML = pay.toFixed(3);
}

function calc29() {

    var m = parseFloat(document.getElementById("m29").value);

    var i = parseFloat(document.getElementById("i29").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment29");
    payment.innerHTML = pay.toFixed(3);
}


function calc30() {

    var m = parseFloat(document.getElementById("m30").value);

    var i = parseFloat(document.getElementById("i30").value);
    // var n = parseFloat(document.getElementById("n23").value);
    var pay = (m / i);
    var payment = document.getElementById("payment30");
    payment.innerHTML = pay.toFixed(3);
}


function calc31() {

    var m = parseFloat(document.getElementById("m31").value);

    var i = parseFloat(document.getElementById("i31").value);
    var n = parseFloat(document.getElementById("n31").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment31");
    payment.innerHTML = pay.toFixed(3);
}

function calc32() {

    var m = parseFloat(document.getElementById("m32").value);

    var i = parseFloat(document.getElementById("i32").value);
    var n = parseFloat(document.getElementById("n32").value);
    var pay = (m / (i / n));
    var payment = document.getElementById("payment32");
    payment.innerHTML = pay.toFixed(3);
}

function calc33() {

    var m = parseFloat(document.getElementById("m33").value);

    var i = parseFloat(document.getElementById("i33").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (m / (i));
    var payment = document.getElementById("payment33");
    payment.innerHTML = pay.toFixed(3);
}


function calc34() {

    var m = parseFloat(document.getElementById("m34").value);

    var i = parseFloat(document.getElementById("i34").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (m / (i));
    var payment = document.getElementById("payment34");
    payment.innerHTML = pay.toFixed(3);
}

function calc35() {

    var m = parseFloat(document.getElementById("m35").value);

    var i = parseFloat(document.getElementById("i35").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (i - m) / m;
    var pay2 = (i - m) / i;
    var payment = document.getElementById("payment35");
    payment.innerHTML = pay.toFixed(3);
    var payment2 = document.getElementById("payment235");
    payment2.innerHTML = pay2.toFixed(3);
}

function calc36() {

    var m = parseFloat(document.getElementById("m36").value);

    var i = parseFloat(document.getElementById("i36").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((i - m) / m) * 100;

    var payment = document.getElementById("payment36");
    payment.innerHTML = pay.toFixed(3);

}

function calc37() {

    var m = parseFloat(document.getElementById("m37").value);

    var i = parseFloat(document.getElementById("i37").value) / 100;
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((m * i) / (1 - i)) * 100;

    var payment = document.getElementById("payment37");
    payment.innerHTML = pay.toFixed(3);

    var pay2 = ((m));

    var payment2 = document.getElementById("payment237");
    payment2.innerHTML = pay2.toFixed(3);

    var pay3 = pay + m;

    var payment3 = document.getElementById("payment337");
    payment3.innerHTML = pay3.toFixed(3);

    var pay4 = pay / m;

    var payment4 = document.getElementById("payment437");
    payment4.innerHTML = pay4.toFixed(3);

    var pay5 = pay / i;

    var payment5 = document.getElementById("payment537");
    payment5.innerHTML = pay5.toFixed(3);

}

function calc38() {

    var m = parseFloat(document.getElementById("m38").value);

    var i = parseFloat(document.getElementById("i38").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = i - m;

    var payment = document.getElementById("payment38");
    payment.innerHTML = pay.toFixed(3);

}

function calc39() {

    var m = parseFloat(document.getElementById("m39").value);
    var i = parseFloat(document.getElementById("i39").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = ((m - i) / m) * 100;
    var payment = document.getElementById("payment39");
    payment.innerHTML = pay.toFixed(3);

}

function calc40() {

    var m = parseFloat(document.getElementById("m40").value);
    var i = parseFloat(document.getElementById("i40").value) / 100;
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = m * i;
    var payment = document.getElementById("payment40");
    payment.innerHTML = pay.toFixed(3);
    var pay2 = m + (m * i);
    var payment2 = document.getElementById("payment140");
    payment2.innerHTML = pay2.toFixed(3);

}

function calc41() {

    var m = parseFloat(document.getElementById("m41").value);
    var i = parseFloat(document.getElementById("i41").value);
    // var n = parseFloat(document.getElementById("n33").value);
    var pay = (i / (m * m));
    var payment = document.getElementById("payment41");
    payment.innerHTML = pay.toFixed(3);

}

var items = new Array();
var newlist = new Array();

function add() {
    items.push((document.getElementById("m42").value));
    (document.getElementById("m42").value) = " ";
    var str = "";
    for (i = 0; i < items.length; i++) {
        str = str + items[i] + ",";
    }
    document.getElementById("items").innerHTML = str;
}

function calc42() {

    // var m = (document.getElementById("m42").value);
    var i = parseFloat(document.getElementById("i42").value);
    var payment = document.getElementById("payment42");
    // var n = Math.floor(Math.random() * items.length);
    for (j = 0; j < i; j++) {
        var z = items[Math.floor(Math.random() * items.length)];
        // newlist.push(items[Math.floor(Math.random() * items.length)]);
        var check = newlist.includes(z);
        if (check === false) {
            newlist.push(z);
        } else {
            while (check === true) {
                z = items[Math.floor(Math.random() * items.length)];
                check = newlist.includes(z);
                if (check === false) {
                    newlist.push(z);
                }
            }
        }
    }
    var str = "";
    for (j = 0; j < i; j++) {
        str = str + newlist[j] + ",";
    }
    payment.innerHTML = str;

}






function search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('calculatorz');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display = "none";
        } else {
            x[i].style.display = "list-item";
        }
    }
}