
        // Función para mostrar el mensaje de advertencia al intentar hacer clic derecho
        function showWarningMessage() {
            var warningMessage = document.createElement('div');
            warningMessage.className = 'warning-message';
            warningMessage.innerHTML = '<p class="feminine-color japanese">右クリックは許可されていません</p>';
            document.body.appendChild(warningMessage);
            setTimeout(function() {
                document.body.removeChild(warningMessage);
            }, 2000); // Mostrar el mensaje durante 2 segundos
        }

        // Función para desactivar el clic derecho del ratón
        function disableRightClick(event) {
            event.preventDefault();
            showWarningMessage();
        }

        // Asignar la función a los eventos de clic derecho
        document.addEventListener('contextmenu', disableRightClick);