document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener los valores de los inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Validar que los campos no estén vacíos
    if(name === '' || email === '' || subject === '' || message === '') {
        alert('Por favor, rellena todos los campos');
        return;
    }
    
    // Validar el formato del email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailPattern.test(email)) {
        alert('Por favor, introduce un correo electrónico válido');
        return;
    }

    // Mostrar un mensaje de éxito (aquí podrías enviar los datos a un servidor)
    alert('Formulario enviado con éxito');
    
    // Limpiar el formulario
    document.getElementById('contactForm').reset();
});


