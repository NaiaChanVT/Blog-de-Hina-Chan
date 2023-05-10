const postLinks = document.querySelectorAll('.post-link');

postLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const postId = link.dataset.postId;
    const postPopup = document.querySelector(`#post-${postId}`);
    postPopup.style.display = 'block';
  });
});

const postPopups = document.querySelectorAll('.post-popup');

postPopups.forEach(popup => {
  popup.addEventListener('click', e => {
    if (e.target === popup) {
      popup.style.display = 'none';
    }
  });
});

// Verificar si JavaScript está habilitado
if (typeof window.addEventListener === 'function') {
  // Desactivar el clic derecho en la página
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del menú contextual

    // Mostrar un mensaje de advertencia
    alert('このページでは右クリックをすることは許可されていません。');
  });
}
