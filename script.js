function iniciarBarraDeProgresso(duracao) {
    let tempoRestante = duracao; 
    const barra = document.getElementById("minhaBarra");
    const contagem = document.getElementById("contagem");

    
    const intervalo = setInterval(frame, 50);
    function frame() {
        if (tempoRestante <= 1) {
            clearInterval(intervalo);
        } else {
            tempoRestante -= 0.1; 
            barra.style.width = (tempoRestante / duracao) * 100 + "%"; 
            contagem.textContent = tempoRestante.toFixed() + "s"; 
        }
    }
}
iniciarBarraDeProgresso(10);