function hideRace (clickRace) {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "none";
    }
    var y = document.getElementById(clickRace);
    y.style.display = "inline";
}

function showRace () {
    var x = document.getElementsByClassName("race");
    for (let z=0; z<x.length; z++){
        x[z].style.display = "inline";
    }
}

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
}