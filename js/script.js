// --- VALIDAÇÃO DE IDADE ---
window.onload = function() {
    // entrada de dados
    let idade = prompt("Bem-vindo ao recrutamento soldado! Qual a sua idade? ");

    if (idade  >= 12) {
        alert("Ótimo, você será enviado a Capital da Realidade Z!")
    } else {
        alert("Soldado, você será enviado para a zona sul da Realidade Z")
    }
}