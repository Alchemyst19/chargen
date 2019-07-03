myStorage = window.localStorage;

function setProp(property, setval) {
    localStorage.setItem(property, setval);
    console.log(localStorage.getItem(property));
}

function hideRace (clickRace) {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "none";
    }
    var y = document.getElementById(clickRace);
    y.style.display = "inline";
    // toggleNav(2);
}

function showRace () {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "inline";
    }
    // toggleNav(2);
}

// hideSource and showSource are not currently utilized, but are present to simplify adding other races in.

function hideSource (clickSource) {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "none";
    }
    var q = document.querySelectorAll('#racenav li');
    for (let r=0; r<q.length; r++){
        q[r].style.display = "none";
    }
    var y = document.getElementsByClassName(clickSource);
    for (let v=0; v<y.length; v++){
        y[v].style.display = "block";
    }
    // toggleNav(2);
}

function showSource () {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "inline";
    }
    var q = document.querySelectorAll('#racenav li');
    for (let r=0; r<q.length; r++){
        q[r].style.display = "block";
    }
    // toggleNav(2);
}

function toggleNav (toggle) {
    if(toggle == 1){
        var x = document.getElementById('navbar');
        x.style.display = "flex";
        var y = document.getElementById('onbutton');
        y.style.display = "none";
        var z = document.getElementById('offbutton');
        z.style.display = "flex";
    }else{
        var x = document.getElementById('navbar');
        x.style.display = "none";
        var y = document.getElementById('onbutton');
        y.style.display = "flex";
        var z = document.getElementById('offbutton');
        z.style.display = "none";
    }
}