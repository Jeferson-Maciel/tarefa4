document.addEventListener("DOMContentLoaded", function() {
    const elemento = document.getElementById("elemento");
    const botao = document.getElementById("botao");
  
    function gerarCorAleatoria() {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgb(${r}, ${g}, ${b})`;
    }
  
    botao.addEventListener("click", function() {
      const novaCor = gerarCorAleatoria();
      elemento.style.backgroundColor = novaCor;
    });
  });
  