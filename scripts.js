function hideRace (clickRace) {
    var x = document.getElementsByClassName("race");
    var xtwo = x.length
    console.log('x==>', x)
    console.log('x[0]==>', x[0])
    for (let z=0; z<x.length; z++){
        x[z].style.display = "none"
    }
    var y = document.getElementById(clickRace);
    y.style.display = "inline";
}