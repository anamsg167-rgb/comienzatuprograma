const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzua2C-ZSjx1lWHdPTdJ2zObtNgHpr32SQY_9R3H9FAl5bjB0KY2JXKfqa9M58y-ghjXw/exec";

flatpickr("#fechaNacimiento", {
  dateFormat: "d/m/Y",
  locale: "es",
  allowInput: false,
  maxDate: "today"
});

function limpiarNombre(valor) {
  return valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^A-ZÑ\s]/gi, "")
    .toUpperCase();
}

function soloNumeros(valor) {
  return valor.replace(/\D/g, "");
}

document.getElementById("nombres").addEventListener("input", e => {
  e.target.value = limpiarNombre(e.target.value);
});

document.getElementById("apellidos").addEventListener("input", e => {
  e.target.value = limpiarNombre(e.target.value);
});

document.getElementById("numeroIdentidad").addEventListener("input", e => {
  e.target.value = soloNumeros(e.target.value);
});

document.getElementById("celular").addEventListener("input", e => {
  e.target.value = soloNumeros(e.target.value);
});

document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim().toLowerCase();
  const confirmarEmail = form.confirmarEmail.value.trim().toLowerCase();

  const emailError = document.getElementById("emailError");
  const confirmError = document.getElementById("confirmError");
  const mensaje = document.getElementById("mensaje");

  emailError.textContent = "";
  confirmError.textContent = "";
  mensaje.textContent = "";

  if (email.includes("@hotmail.") || email.includes("@outlook.")) {
    emailError.textContent = "Por favor coloca otro correo que utilices, puede ser Gmail, universidad u otro.";
    return;
  }

  if (confirmarEmail.includes("@hotmail.") || confirmarEmail.includes("@outlook.")) {
    confirmError.textContent = "Por favor coloca otro correo que utilices, puede ser Gmail, universidad u otro.";
    return;
  }

  if (email !== confirmarEmail) {
    confirmError.textContent = "Los correos no coinciden.";
    return;
  }

  const data = {
    nombres: form.nombres.value,
    apellidos: form.apellidos.value,
    tipoDocumento: form.tipoDocumento.value,
    numeroIdentidad: form.numeroIdentidad.value,
    fechaNacimiento: form.fechaNacimiento.value,
    celular: form.celular.value,
    email: email,
    confirmarEmail: confirmarEmail
  };

  try {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(data)
    });

    mensaje.textContent = "Formulario enviado correctamente.";
    mensaje.style.color = "#0aab52";
    form.reset();

  } catch (error) {
    mensaje.textContent = "Hubo un error al enviar el formulario.";
    mensaje.style.color = "red";
  }
});