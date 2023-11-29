// Questo codice permette all'utente di trascinare un divider per ridimensionare due elementi 
// adiacenti nella pagina. Funziona sia con il mouse che con il tocco su dispositivi touch.

const divider = document.getElementById('divider');
const leftSide = divider.previousElementSibling;
const rightSide = divider.nextElementSibling;
let moving = false;

// Funzione per gestire il movimento del mouse o il tocco sullo schermo

function move(e) {
    // Se l'utente sta trascinando il divider
    if (moving) {
        // Ottiene la posizione X del mouse o del tocco
        let clientX = e.touches ? e.touches[0].clientX : e.clientX;
        // Calcola la larghezza del contenitore come percentuale della larghezza della finestra
        let containerWidth = clientX / window.innerWidth * 100;
        // Se la larghezza del contenitore è tra 5% e 95%
        if (containerWidth > 5 && containerWidth < 95) {
            // Imposta la larghezza del lato sinistro e destro in base alla posizione del mouse o del tocco
            leftSide.style.flex = containerWidth.toString();
            rightSide.style.flex = (100 - containerWidth).toString();
        }
    }
}
// Funzione per fermare il trascinamento del divider
function stopMove() {
moving = false;
}

divider.addEventListener('mousedown', () => moving = true);
divider.addEventListener('touchstart', () => moving = true);

window.addEventListener('mousemove', move);
window.addEventListener('touchmove', move);

window.addEventListener('mouseup', stopMove);
window.addEventListener('touchend', stopMove);