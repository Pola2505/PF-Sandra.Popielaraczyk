//Llamamos los elementos de HTML

const sweetAlert = document.querySelector("#sweetAlert");
const contenedorFormulario = document.querySelector("#contenedor-form");
const mandarForm = document.querySelector("#mandar-form");

// Si queremos mandar el form, desaparece el formulario de consulta y sale un mensaje y si lo rechazamos vuelve al formulario

sweetAlert.addEventListener("click", mandarFormulario);

function mandarFormulario(e){
    e.preventDefault();
    Swal.fire({
        
        title: '¿Quieres enviar el formulario?',
        icon: 'question',
        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'Si',
        cancelButtonText:'No',
        
      }).then((result) => {
        if (result.isConfirmed){
            contenedorFormulario.classList.add("inactive");
            mandarForm.classList.remove("inactive");
        }
      })
      
}
