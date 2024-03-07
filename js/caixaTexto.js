document.getElementById('btnAbrirCaixa').addEventListener('click', function() {
    document.getElementById('caixaTexto').classList.remove('hidden');
});
  
document.getElementById('btnFecharCaixa').addEventListener('click', function() {
    document.getElementById('caixaTexto').classList.add('hidden');
});