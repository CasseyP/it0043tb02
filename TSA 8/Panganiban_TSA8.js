let simu = document.getElementById('flex');
let gapValue = 0;

// Reset Flexbox
function resFlexbox() {
    simu.style.justifyContent = "";
    simu.style.alignItems = "";
    simu.style.flexDirection = "";
    simu.style.gapCounter = "0";
    simu.style.gap = "0px";
    document.getElementById("gap-counter").value = "0";
    document.getElementById('box1').style.flexGrow = "0";
    document.getElementById('box2').style.flexGrow = "0";
    document.getElementById('box3').style.flexGrow = "0";
    document.getElementById("growbox1").value = "0";
    document.getElementById("growbox2").value = "0";
    document.getElementById("growbox3").value = "0";
}

// Gap
function updateGap() {
    const gp = document.getElementById('gap-counter').value;
    simu.style.gap = gp + "px";
}

// Flex Grow
// Grow reset
function gres() {
    document.getElementById('box1').style.flexGrow = "0";
    document.getElementById('box2').style.flexGrow = "0";
    document.getElementById('box3').style.flexGrow = "0";
    document.getElementById("growbox1").value = "0";
    document.getElementById("growbox2").value = "0";
    document.getElementById("growbox3").value = "0";
}

// Grow all
function growAll() {
    let grwone = document.getElementById('growbox1').value;
    let grwtwo = document.getElementById('growbox2').value;
    let grwthree = document.getElementById('growbox3').value;

    document.getElementById('box1').style.flexGrow++;
    document.getElementById('box2').style.flexGrow++;
    document.getElementById('box3').style.flexGrow++;
    grwone++;
    grwtwo++;
    grwthree++;

    document.getElementById('growbox1').value = grwone;
    document.getElementById('growbox2').value = grwtwo;
    document.getElementById('growbox3').value = grwthree;
}

// Grow per box
function box1grow() {
    let grb1 = document.getElementById('growbox1').value;
    document.getElementById('box1').style.flexGrow = grb1;
    document.getElementById('box1').style.transitionDuration = "1s";
}
function box2grow() {
    let grb2 = document.getElementById('growbox2').value;
    document.getElementById('box2').style.flexGrow = grb2;
    document.getElementById('box2').style.transitionDuration = "1s";
}
function box3grow() {
    let grb3 = document.getElementById('growbox3').value;
    document.getElementById('box3').style.flexGrow = grb3;
    document.getElementById('box3').style.transitionDuration = "1s";
}


// Flex Direction
function fdrow() {
    simu.style.flexDirection = "row";
}
function fdcolumn() {
    simu.style.flexDirection = "column";
}

// Justify Content
function jstart() {
    simu.style.justifyContent = "start";
}

function jcenter() {
    simu.style.justifyContent = "center";
}

function jend() {
    simu.style.justifyContent = "end";
}

function jspacebetween() {
    simu.style.justifyContent = "space-between";
}

function jspacearound() {
    simu.style.justifyContent = "space-around";
}

function jspaceevenly() {
    simu.style.justifyContent = "space-evenly";
}

// Align Items
function alstart() {
    simu.style.alignItems = "start";
}
function alcenter() {
    simu.style.alignItems = "center";
}
function alend() {
    simu.style.alignItems = "end";
}
