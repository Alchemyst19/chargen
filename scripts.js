myStorage = window.localStorage;

function setProp(property, setval) {
    localStorage.setItem(property, setval);
    console.log(localStorage.getItem(property));
}

function getInt(string){
    var x = parseInt(string, 10);
    return x;
}

function setASI() {
    setProp('STR', (parseInt(document.getElementById('STR').value))+parseInt(document.getElementById('strrace').innerHTML));
    setProp('DEX', (getInt(document.getElementById('DEX').value))+getInt(document.getElementById('dexrace').innerHTML));
    setProp('CON', (getInt(document.getElementById('CON').value))+getInt(document.getElementById('conrace').innerHTML));
    setProp('INT', (getInt(document.getElementById('INT').value))+getInt(document.getElementById('intrace').innerHTML));
    setProp('WIS', (getInt(document.getElementById('WIS').value))+getInt(document.getElementById('wisrace').innerHTML));
    setProp('CHA', (getInt(document.getElementById('CHA').value))+getInt(document.getElementById('charace').innerHTML));
}

function showCharacter() {
    $('#finrace').html('<b>Race:</b> '+comprehendRace(localStorage.getItem('race')));
    $('#finclass').html('<b>Class:</b> '+localStorage.getItem('class'));
    $('#finstr').html('<b>Strength:</b> '+localStorage.getItem('STR'));
    $('#findex').html('<b>Dexterity:</b> '+localStorage.getItem('DEX'));
    $('#fincon').html('<b>Constitution:</b> '+localStorage.getItem('CON'));
    $('#finint').html('<b>Intelligence:</b> '+localStorage.getItem('INT'));
    $('#finwis').html('<b>Wisdom:</b> '+localStorage.getItem('WIS'));
    $('#fincha').html('<b>Charisma:</b> '+localStorage.getItem('CHA'));
}

function raceScore() {
    var z = localStorage.getItem('race');
    if(z === 'hilldwarf'){
        $('#conrace').html('2');
        $('#wisrace').html('1');
    }else if(z === 'mountdwarf'){
        $('#conrace').html('2');
        $('#strrace').html('1');
    }else if(z === 'woodelf'){
        $('#dexrace').html('2');
        $('#wisrace').html('1');
    }else if(z === 'highelf'){
        $('#dexrace').html('2');
        $('#intrace').html('1');
    }else if(z === 'drow'){
        $('#dexrace').html('2');
        $('#charace').html('1');
    }else if(z === 'lightfoot'){
        $('#dexrace').html('2');
        $('#charace').html('1');
    }else if(z === 'stout'){
        $('#dexrace').html('2');
        $('#conrace').html('1');
    }else if(z === 'human'){
        $('#strrace').html('1');
        $('#dexrace').html('1');
        $('#conrace').html('1');
        $('#intrace').html('1');
        $('#wisrace').html('1');
        $('#charace').html('1');
    }else if(z === 'dragonborn'){
        $('#strrace').html('2');
        $('#charace').html('1');
    }else if(z === 'forest'){
        $('#intrace').html('2');
        $('#dexrace').html('1');
    }else if(z === 'rock'){
        $('#intrace').html('2');
        $('#conrace').html('1');
    }else if(z === 'halfelf'){
        $('.asi').before('<p>Half-Elves can choose 2 scores to increase by 1, in additon to increasing their Charisma by 2. Check the boxes of the scores you want increased (2 boxes total)');
        $('#elfasi').show();
        $('#charace').html('2');
    }else if(z === 'halforc'){
        $('#strrace').html('2');
        $('#conrace').html('1');
    }else if(z === 'tiefling'){
        $('#charace').html('2');
        $('#intrace').html('1');
    }
}

function toggleASI(score){
    if(score === 'STR'){
        if(document.getElementById('strrace').innerHTML === '1'){
            $('#strrace').html('');
        }else{
            $('#strrace').html('1');
        }
    }else if(score === 'DEX'){
        if(document.getElementById('dexrace').innerHTML === '1'){
            $('#dexrace').html('');
        }else{
            $('#dexrace').html('1');
        }
    }else if(score === 'CON'){
        if(document.getElementById('conrace').innerHTML === '1'){
            $('#conrace').html('');
        }else{
            $('#conrace').html('1');
        }
    }else if(score === 'INT'){
        if(document.getElementById('intrace').innerHTML === '1'){
            $('#intrace').html('');
        }else{
            $('#intrace').html('1');
        }
    }else if(score === 'WIS'){
        if(document.getElementById('wisrace').innerHTML === '1'){
            $('#wisrace').html(' ');
        }else{
            $('#wisrace').html('1');
        }
    }
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
        var y = document.getElementById('onbuttonnav');
        y.style.display = "none";
        var z = document.getElementById('offbuttonnav');
        z.style.display = "flex";
    }else{
        var x = document.getElementById('navbar');
        x.style.display = "none";
        var y = document.getElementById('onbuttonnav');
        y.style.display = "flex";
        var z = document.getElementById('offbuttonnav');
        z.style.display = "none";
    }
}

function toggleGift (toggle) {
    if(toggle == 1){
        var x = document.getElementById('giftbar');
        x.style.display = "flex";
        var y = document.getElementById('onbuttongift');
        y.style.display = "none";
        var z = document.getElementById('offbuttongift');
        z.style.display = "flex";
    }else{
        var x = document.getElementById('giftbar');
        x.style.display = "none";
        var y = document.getElementById('onbuttongift');
        y.style.display = "flex";
        var z = document.getElementById('offbuttongift');
        z.style.display = "none";
    }
}

function comprehendRace(race){
    if(race === 'hilldwarf'){
        return 'Hill Dwarf';
    }else if(race==='mountdwarf'){
        return 'Mountain Dwarf';
    }else if(race==='highelf'){
        return 'High Elf';
    }else if(race==='woodelf'){
        return 'Wood Elf';
    }else if(race==='drow'){
        return 'Drow';
    }else if(race==='lightfoot'){
        return 'Lightfoot Halfling';
    }else if(race==='stout'){
        return 'Stout Halfling';
    }else if(race==='human'){
        return 'Human';
    }else if(race==='dragonborn'){
        return "Dragonborn";
    }else if(race==='forest'){
        return 'Forest Gnome';
    }else if(race==='rock'){
        return 'Rock Gnome';
    }else if(race==='halfelf'){
        return 'Half-Elf';
    }else if(race==='halforc'){
        return 'Half-Orc';
    }else{
        return 'Tiefling';
    }
}