window.addEventListener("load", function() {
    var overlay = this.document.querySelector(".overlay");
    var loader = this.document.querySelector(".loader");
    var loadingtext = this.document.querySelector(".loadingtxt")
    loader.classList.add("fadeOut");
    loadingtext.classList.add("fadeOut");
    overlay.classList.add("fadeOut");
    this.setTimeout(function() {
        document.body.removeChild(loader);
        document.body.removeChild(loadingtext);
        document.body.removeChild(overlay);
        document.body.style.cursor = "default";
    }, 1200);
});

function nameConcat() {
    var firstname = document.getElementById("inptfirstname").value;
    var lastname = document.getElementById("inptlastname").value;
    var output = document.getElementById("nameoutput");
    var fullname = firstname.concat(lastname);
    if (firstname || lastname == "") {
        window.alert("Input is Empty!");
        output.innerHTML = "Input is Empty!";
    } else {
        console.log(fullname);
        output.innerHTML = fullname
    }
}

function add() {
    var firstnum = document.getElementById("inptfirstnum").value;
    var lastnum = document.getElementById("inptlastnum").value;
    var output = document.getElementById("numoutput");
    if (firstnum || lastnum == "") {
        window.alert("Input is Empty!");
        output.innerHTML = "Input is Empty!";
    } else {
        var add = Number(firstnum) + Number(lastnum);
        console.log(add);
        output.innerHTML = add;
    }
}












































































// if (inputname.value.includes("$num")) {
        //     inputname.value = inputname.value.replaceAll("$num", "1 2 3 4 5 6 7 8 9 10");
        // } else if (inputname.value.includes("$rnum")) {
        //     inputname.value = inputname.value.replaceAll("$rnum", Math.floor(Math.random() * 10000000001));
        // } else if (inputname.value.includes("$sym")) {
        //     inputname.value = inputname.value.replaceAll("$sym", "! @ # $ % ^ & *");
        // } else if (inputname.value.startsWith("$txtspace")) {
        //     inputname.value = inputname.value.replaceAll("", " ");
        // }