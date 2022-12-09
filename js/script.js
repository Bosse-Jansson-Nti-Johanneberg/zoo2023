function focuslunch(){
    alert("Message");
}

function FocusMiddag() {
    document.getElementById('Lunch_Page').style.opacity = 0%;
    document.getElementById('Middag_Page').style.opacity = 100%;
    document.getElementById('Extras_Page').style.opacity = 0%;
}

function FocusExtras() {
    document.getElementById('Lunch_Page').style.zIndex = 1;
    document.getElementById('Middag_Page').style.zIndex = 1;
    document.getElementById('Extras_Page').style.zIndex = -1
}