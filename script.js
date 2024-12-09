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
  