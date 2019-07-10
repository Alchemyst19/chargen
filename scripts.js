myStorage = window.localStorage;

function setProp(property, setval) {
    localStorage.setItem(property, setval);
    console.log(localStorage.getItem(property));
}

function setASI() {
    setProp('STR', document.getElementById('STR').value);
    setProp('DEX', document.getElementById('DEX').value);
    setProp('CON', document.getElementById('CON').value);
    setProp('INT', document.getElementById('INT').value);
    setProp('WIS', document.getElementById('WIS').value);
    setProp('CHA', document.getElementById('CHA').value);
}

function genScore() {
    $('.asilist').html('');
    var z = [];
    for(let r=0; r<6; r++){
        var x = [];
        for(let q=0; q<4; q++){
            x.push(Math.floor((Math.random()*6)+1));
        }
        var y = Math.min(x[0], x[1], x[2], x[3]);
        z[r] = (x[0]+x[1]+x[2]+x[3]-y);
        $('.asilist').append('<li>'+z[r]+'</li>');
        console.log(z[r]);
    }
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