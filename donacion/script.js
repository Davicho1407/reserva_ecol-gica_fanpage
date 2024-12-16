document.getElementById("donationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario para procesamiento
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
  
    if (amount > 0) {
      alert(`Gracias, ${name}, por tu generosa donación de $${amount}. Hemos enviado un recibo a ${email}.`);
      document.getElementById("donationForm").reset(); // Limpia el formulario
    } else {
      alert("Por favor, ingresa un monto válido.");
    }
  });
// Inicializar EmailJS
emailjs.init("pFgESng2rLqDypm2O"); // Reemplaza con tu clave pública de EmailJS

document.getElementById("donationForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const amount = document.getElementById("amount").value;

  // Enviar correo a través de EmailJS
  emailjs.send("service_v8egy4c", "template_0osqc3t", {
    name: name,
    email: email,
    amount: amount,
  })
  .then(() => {
    alert("¡Correo enviado correctamente! Gracias por tu donación.");
    document.getElementById("donationForm").reset();
  })
  .catch((error) => {
    console.error("Error al enviar el correo:", error);
    alert("Hubo un problema al enviar la notificación. Inténtalo de nuevo.");
  });
});  