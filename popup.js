document.addEventListener('DOMContentLoaded', function() {
  var boton = document.getElementById('modo_flotante');

  // Al hacer clic en el botón, se envía un mensaje al archivo background.js para activar el modo flotante.
  boton.addEventListener('click', function() {
    chrome.runtime.sendMessage({accion: 'activar_modo_flotante'});
  });
});