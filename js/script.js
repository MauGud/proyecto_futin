function mostrarMensajeBienvenida() {
    const horaActual = new Date().getHours();
    let mensaje;
    if (horaActual < 12) {
      mensaje = "¡Buenos días! Bienvenido a FUT-IN.";
    } else if (horaActual < 18) {
      mensaje = "¡Buenas tardes! Bienvenido a FUT-IN.";
    } else {
      mensaje = "¡Buenas noches! Bienvenido a FUT-IN.";
    }
    alert(mensaje);
  }
  
  // Llamar a la función cuando la página termine de cargar
  window.onload = function() {
    mostrarMensajeBienvenida();
  };
  

  const comentarios = [
    { nombre: "Porfirios FC (Uniforme River Plate Blanco)", comentario: "Los uniformes que pedimos fueron de excelente calidad y el servicio al cliente fue inigualable." },
    { nombre: "Turbulentos FC (Uniforme Japón Blanco)", comentario: "La atención fue muy ágil, la calidad es muy buena, y lo entregaron hasta la cancha en donde jugamos." },
    { nombre: "Caguamos FC (Uniforme Atletico de Madrid Azul)", comentario: "Los jerseys de jugador están muy finos. Jugamos con la mejor calidad en playera, sin gastar tant. 5 estrellas⭐️" },
    { nombre: "Racing Contreras (Diseño Personalizado)", comentario: "El diseño que nos hicieron está genial. Somos los únicos en la liga con un uniforme diferente. Buena calidad, buen precio y entregas rápidas." },

  ];
  
  function mostrarComentarios() {
    const contenedorComentarios = document.querySelector(".testimonios");
    comentarios.forEach(comentario => {
      const bloque = document.createElement("div");
      bloque.className = "testimonio";
      bloque.innerHTML = `<blockquote>"${comentario.comentario}"</blockquote><p>- ${comentario.nombre} </p>`;
      contenedorComentarios.appendChild(bloque);
    });
  }
  
  // Llamar a la función cuando la página termine de cargar
  window.onload = function() {
    mostrarComentarios();
    mostrarMensajeBienvenida(); // Asegúrate de llamar también a la función de mensaje de bienvenida aquí si es necesario
  };
  
// Página de personaliza:











  // Página de contacto: ** HAY QUE REVISAR ⚠️

  document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.querySelector(".form");
    formulario.addEventListener("submit", function(e) {
        e.preventDefault(); // Evita el envío del formulario hasta pasar la validación
        
        let camposValidos = true;
        const campos = formulario.querySelectorAll("input, textarea");
        
        campos.forEach(campo => {
            if (!campo.value) {
                console.log(`El campo ${campo.nombre} es requerido.`);
                camposValidos = false;
            }
            
            if (!campo.value) {
                console.log(`El campo ${campo.email} es requerido.`);
                camposValidos = false;
            }

            if (!campo.value) {
                console.log(`El campo ${campo.celular} es requerido.`);
                camposValidos = false;
            }

            if (!campo.value) {
                console.log(`El campo ${campo.mensaje} es requerido.`);
                camposValidos = false;
            }
        });

        // Validación adicional de ejemplo para el campo de email
        const email = formulario.querySelector("input[type='email']");
        if (!validarEmail(email.value)) {
            console.log("El formato del email no es válido.");
            camposValidos = false;
        }
        
        if (camposValidos) {
            console.log("Formulario enviado.");
        } else {
            console.log("Por favor, rellena todos los campos correctamente.");
        }
    });
});

// Función auxiliar para validar el formato del email
function validarEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
}
