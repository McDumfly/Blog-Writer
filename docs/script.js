let header = document.getElementById("headers");
let ff = document.getElementById("fontFamily");
let output = document.getElementById("output");
let preview = document.getElementById("preview");
let bText = document.getElementById("bText");
let textColor = document.getElementById("textColor");
let bgColor = document.getElementById("bgColor");
let boldBtn = document.getElementById("boldBtn");
let italicBtn = document.getElementById("italicBtn");
let bold = false;
let italic = false;

function save() {
    let buttonClicked = false;
    document.getElementById("saveButton").onclick = function() {
        buttonClicked = true;
    }

    if (buttonClicked == false) {
        if (bold || italic) {
            bold = false;
            italic = false;
        } else {
            output.value += "<p style='font-size: " + header.value + "; font-family: " + ff.value + "; color: " + textColor.value + "; background-color: " + bgColor.value + ";'>" + bText.value + "</p>";
            preview.innerHTML = output.value;
            localStorage.setItem("lastBgCode", output.value);
        }
    }
}

function setBoldOn() {
    boldBtn.classList.replace("defBtn", "selectedBtn");
    bold = true;
    if (bText.value != "") {
        boldBtn.classList.replace("selectedBtn", "defBtn");
        output.value += "<strong style='font-size: " + header.value + "; font-family: " + ff.value + "; color: " + textColor.value + "; background-color: " + bgColor.value + ";'>" + bText.value + "</strong><br>";
        preview.innerHTML = output.value;
    }
} 

function setItalicOn() {
    italicBtn.classList.replace("defBtn", "selectedBtn");
    italic = true;
    if (bText.value != "") {
        italicBtn.classList.replace("selectedBtn", "defBtn");
        output.value += "<em style='font-size: " + header.value + "; font-family: " + ff.value + "; color: " + textColor.value + "; background-color: " + bgColor.value + ";'>" + bText.value + "</em><br>";
        preview.innerHTML = output.value;
    }
}

function addDiv() {
    output.value += "<hr>";
    preview.innerHTML = output.value;
}

function clearBT() {
    bText.value = "";
}

function setDef() {
    header.value = "16px";
    ff.value = "arial";
    textColor.value = "#000000";
}

function addImg() {
    const imgUrl = prompt("Please write here the image url: ");
    output.value += "<img src='" + imgUrl + "'>";
    save();
    localStorage.setItem("lastBgCode", output.value);
}

function addLink() {
    let oinw = document.getElementById("oinw");
    if (oinw.checked == true) {
        const linkText = prompt("Please write here the link text: ");
        const linkUrl = prompt("Please write here the link url: ","https://");
        if (linkUrl.slice(0, 8) != "https://") {
            output.value += "<a href='https://" + linkUrl + "' target='_blank' style='font-size: " + header.value + "; font-family: " + ff.value + "; color: " + textColor.value + ";'>" + linkText + "</a>";;
        } else {
            output.value += "<a href='" + linkUrl + "' target='_blank'>" + linkText + "</a>";
        }
    } else {
        const linkText = prompt("Please write here the link text: ");
        const linkUrl = prompt("Please write here the link url: ","https://");
        if (linkUrl.slice(0, 8) != "https://") {
            output.value += "<a href='https://" + linkUrl + "'>" + linkText + "</a>";;
        } else {
            output.value += "<a href='" + linkUrl + "'>" + linkText + "</a>";
        }
    }
    preview.innerHTML = output.value;
    localStorage.setItem("lastBgCode", output.value);
}

function delText() {
    localStorage.setItem("lastBgCode", output.value);
    output.value = "";
    preview.innerHTML = "";
    bText.value = "";
}

function copy() {
    output.select();
    output.setSelectionRange(0, 99999);
    document.execCommand("copy"); 
}

function getLastBgCode() {
    const lastBgCode = localStorage.getItem("lastBgCode");
    if (lastBgCode != null && lastBgCode != "") {
        output.value = lastBgCode;
        preview.innerHTML = output.value;
    } else {
        alert("Last Blog Code is empty!");
    }
}

function addBr() {
    output.value += "<br>";
    preview.innerHTML = output.value;
}