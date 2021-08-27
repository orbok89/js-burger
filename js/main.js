var totale = 0;
var attivazione = document.getElementById('calcola');
attivazione.addEventListener('click',
    function(){
        var stampo = document.getElementById('formaggio').checked;
        if (stampo == true) {
            totale = totale + 5;
        }
        var stampo = document.getElementById('uovo').checked;
        if (stampo == true) {
            totale = totale + 2;
        }
        var stampo = document.getElementById('mostarda').checked;
        if (stampo == true) {
            totale = totale + 11;
        }
        var stampo = document.getElementById('pomodoro').checked;
        if (stampo == true) {
            totale = totale + 1;
        }
        var stampo = document.getElementById('lattuga').checked;
        if (stampo == true) {
            totale = totale + 8;
        }
        var stampo = document.getElementById('kezap').checked;
        if (stampo == true) {
            totale = totale + 5;
        }
        document.getElementById("fine").innerHTML = totale + '$';
    
    }
)