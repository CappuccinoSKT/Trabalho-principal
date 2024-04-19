function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Este é o Mercado Minecraft qual o metal do nether preto");

    
    if (respostaTime.toLowerCase() === "netherita") {
      alert("Tenha uma boa compra senhor");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Seu debio mental.");
    }
  }
}