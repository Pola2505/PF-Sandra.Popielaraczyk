const sweetAlert = document.querySelector("#sweetAlert");

sweetAlert.addEventListener("click", (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })

})

