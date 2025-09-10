let numeroSecreto = Math.floor(Math.random() *100) + 1;

let palpite = 0;

do {
    palpite = parseInt(prompt("Adivinhe u numero secreto entre 1 e 100: "));
    
    if (palpite === numeroSecreto) {
        alert("Parabens! voce acertou o numero secreto. " + numeroSecreto);
    } else if (palpite > numeroSecreto) {
        alert("seu palpite e muito alto! tem um numero menor.");
    } else {
        alert("seu palpite e muito baixo! tem um numero maior.");
}
    
} while (palpite !== numeroSecreto);