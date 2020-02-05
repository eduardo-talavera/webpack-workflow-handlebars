import Swal from 'sweetalert2';

export const alertaSuccess = document.addEventListener("DOMContentLoaded", function(event) {
   
    Swal.fire({
        icon: 'success',
        title: 'Correcto',
        text: 'Todo bien'
    });


});



