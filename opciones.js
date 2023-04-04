document.addEventListener('DOMContentLoaded', function() {
  var checkbox = document.getElementById('modo_flotante');

  // Obtenemos el valor del checkbox y lo guardamos en el almacenamiento local.
  checkbox.addEventListener('change', function() {
    chrome.storage.local.set({'modo_flotante': checkbox.checked});
  });

  // Obtenemos el valor almacenado y lo establecemos en el checkbox.
  chrome.storage.local.get('modo_flotante', function(result) {
    checkbox.checked = result.modo_flotante || false;
  });
});
