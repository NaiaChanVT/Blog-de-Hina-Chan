document.addEventListener("DOMContentLoaded", function() {
  var popupContainer = document.getElementById("popup-container");
  var btnYes = document.getElementById("btn-yes");
  var btnNo = document.getElementById("btn-no");

  // Mostrar el pop-up al cargar la página
  popupContainer.style.opacity = "1";
  popupContainer.style.pointerEvents = "auto";

  // Ocultar el pop-up y redirigir en caso de clic en "Sí"
  btnYes.addEventListener("click", function() {
    popupContainer.style.opacity = "0";
    popupContainer.style.pointerEvents = "none";
    // Aquí puedes agregar la redirección a la página deseada después de hacer clic en "Sí"
     window.location.href = "index2.html";
  });

  // Ocultar el pop-up en caso de clic en "No"
  btnNo.addEventListener("click", function() {
    popupContainer.style.opacity = "0";
    popupContainer.style.pointerEvents = "none";
  });
});


document.getElementById('btn-yes').addEventListener('click', function() {
  document.getElementById('popup-container').style.display = 'none';
});

document.getElementById('btn-no').addEventListener('click', function() {
  // Aquí puedes agregar el código para lo que quieras que suceda al hacer clic en "いいえ" (no)
  window.location.href = 'https://twitter.com';
  // Por ejemplo, puedes redirigir a otra página, mostrar un mensaje, etc.
});



if (typeof window.addEventListener === 'function') {
  document.addEventListener('contextmenu', function(event) {
    event.preventDefault();
    alert('このページでは右クリックをすることは許可されていません。');
  });
}

function verificarContraseña() {
    var contraseñaIngresada = document.getElementById("passwordInput").value;
    if (contraseñaIngresada === "2606") {
        window.location.href = "https://twitter-ui-clone-project.xloliss.repl.co/"; // Página de contenido protegido
    } else {
        window.location.href = "error404.html"; // Página de error
    }
}
