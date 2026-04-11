// --- VALIDAÇÃO DE IDADE ---
const rotulo = document.getElementById('tema-rotulo');

const botaoTema = document.querySelector('.tema-container');
const rotuloTexto = document.getElementById('tema-rotulo');
const corpoPagina = document.body;

botaoTema.addEventListener('click', () => {
    //altera visual css
    corpoPagina.classList.toggle('modo-escuro');
    //alterar txt
    if (corpoPagina.classList.contains('modo-escuro'))
    {
        rotuloTexto.textContent = "Tema Escuro";
    } else {
        rotuloTexto.textContent = "Tema Claro"
    }
});
window.onload = function() {
    // entrada de dados
    let idade = prompt("Bem-vindo ao recrutamento soldado! Qual a sua idade? ");

    if (idade  >= 12) {
        alert("Ótimo, você será enviado a Capital da Realidade Z!")
    } else {
        alert("Soldado, você será enviado para a zona sul da Realidade Z")
    }
}
