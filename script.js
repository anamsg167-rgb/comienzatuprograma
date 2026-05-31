const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbzua2C-ZSjx1lWHdPTdJ2zObtNgHpr32SQY_9R3H9FAl5bjB0KY2JXKfqa9M58y-ghjXw/exec";

let currentLanguage = "es";

/* TELÉFONO CON BANDERITA */
const telefonoInput = document.querySelector("#celular");

const iti = window.intlTelInput(telefonoInput, {
  initialCountry: "pe",
  preferredCountries: ["pe", "cl", "ar", "us"],
  separateDialCode: true,
  strictMode: true
});

/* CALENDARIO FECHA DE NACIMIENTO */
flatpickr("#fechaNacimiento", {
  dateFormat: "d/m/Y",
  locale: "es",
  allowInput: false,
  maxDate: "today"
});

/* CALENDARIO FECHA IDEAL DEL PROGRAMA */
flatpickr("#fechaInicioPrograma", {
  dateFormat: "d/m/Y",
  locale: "es",
  allowInput: false,
  minDate: "today"
});

/* LIMPIEZA DE TEXTOS */
function limpiarNombre(valor) {
  return valor
    .replace(/[^A-ZÁÉÍÓÚÜÑ\s]/gi, "")
    .toUpperCase();
}

function limpiarTextoMayuscula(valor) {
  return valor
    .replace(/[^A-ZÁÉÍÓÚÜÑ\s]/gi, "")
    .toUpperCase();
}

function soloNumeros(valor) {
  return valor.replace(/\D/g, "");
}

/* CAMPOS EN MAYÚSCULA */
document.getElementById("nombres").addEventListener("input", e => {
  e.target.value = limpiarNombre(e.target.value);
});

document.getElementById("apellidos").addEventListener("input", e => {
  e.target.value = limpiarNombre(e.target.value);
});

document.getElementById("ciudadResidencia").addEventListener("input", e => {
  e.target.value = limpiarTextoMayuscula(e.target.value);
});

document.getElementById("carrera").addEventListener("input", e => {
  e.target.value = limpiarTextoMayuscula(e.target.value);
});

document.getElementById("otroCentroEstudios").addEventListener("input", e => {
  e.target.value = limpiarTextoMayuscula(e.target.value);
});

/* CAMPOS SOLO NÚMEROS */
document.getElementById("numeroIdentidad").addEventListener("input", e => {
  e.target.value = soloNumeros(e.target.value);
});

document.getElementById("celular").addEventListener("input", e => {
  e.target.value = soloNumeros(e.target.value);
});

/* MOSTRAR CAMPO OTRO CENTRO DE ESTUDIOS */
const centroEstudios = document.getElementById("centroEstudios");
const otroCentroBox = document.getElementById("otroCentroBox");
const otroCentroEstudios = document.getElementById("otroCentroEstudios");

centroEstudios.addEventListener("change", () => {
  if (centroEstudios.value === "Otro") {
    otroCentroBox.classList.remove("hidden");
    otroCentroEstudios.required = true;
  } else {
    otroCentroBox.classList.add("hidden");
    otroCentroEstudios.required = false;
    otroCentroEstudios.value = "";
  }
});

/* TRADUCCIONES */
const translations = {
  es: {
    navInicio: "INICIO",
    navProgramas: "NUESTROS PROGRAMAS",
    navBlog: "BLOG",
    navComienza: "COMIENZA TU PROGRAMA",
    navContactanos: "CONTÁCTANOS",

    titulo: "COMIENZA TU PROGRAMA",
    subtitulo: "¡Da el primer paso hacia una experiencia internacional inolvidable!",
    intro: "Completa este formulario con tus datos y permítenos ayudarte a encontrar el programa ideal para ti.",

    seccion01: "01. Datos personales",
    labelNombres: "Nombre(s) completo(s) *",
    labelApellidos: "Apellidos completos *",
    labelTipoDocumento: "Documento de identidad *",
    labelNumeroIdentidad: "Número de identidad *",
    labelFechaNacimiento: "Fecha de nacimiento *",
    labelCelular: "Celular *",
    labelEmail: "Correo electrónico *",
    labelConfirmarEmail: "Confirma tu correo electrónico *",

    seccion02: "02. Residencia y estudios",
    labelPaisNacimiento: "País de nacimiento *",
    labelPaisResidencia: "País de residencia *",
    labelCiudadResidencia: "Ciudad / Departamento / Región de residencia *",
    labelCentroEstudios: "Centro de estudios *",
    labelOtroCentro: "Especifica tu centro de estudios *",
    labelCarrera: "Carrera *",

    seccion03: "03. Programas",
    labelPrograma: "¿Qué programa estás buscando? *",
    labelFechaPrograma: "Fecha ideal de inicio del programa/viaje *",

    botonEnviar: "Enviar",

    opTipoDocumento: "Tipo de documento de identidad",
    opPasaporte: "Pasaporte",
    opCarnet: "Carnet de extranjería",
    opSeleccionaPais: "Selecciona tu país",
    opSeleccionaPaisResidencia: "Selecciona tu país de residencia",
    opCentroEstudios: "Selecciona tu centro de estudios",
    opOtro: "Otro",
    opPrograma: "Selecciona el programa",

    phNombres: "Ingresa tu(s) nombre(s) tal como aparece(n) en tu documento oficial",
    phApellidos: "Ingresa tus apellidos tal como aparecen en tu documento",
    phNumeroIdentidad: "Ingresa el número de tu documento de identidad",
    phFechaNacimiento: "Ingresa tu fecha de nacimiento",
    phCelular: "Ingresa tu número celular",
    phEmail: "Ingresa tu correo electrónico",
    phConfirmarEmail: "Ingresa nuevamente tu correo electrónico",
    phCiudadResidencia: "Ingresa tu ciudad",
    phOtroCentro: "Ingresa tu centro de estudios",
    phCarrera: "Ingresa tu carrera",
    phFechaPrograma: "Escoge tu fecha",

    emailBloqueado: "Por favor coloca otro correo que utilices, puede ser Gmail, universidad u otro.",
    correosNoCoinciden: "Los correos no coinciden.",
    envioCorrecto: "Formulario enviado correctamente.",
    errorEnvio: "Hubo un error al enviar el formulario."
  },

  en: {
    navInicio: "HOME",
    navProgramas: "OUR PROGRAMS",
    navBlog: "BLOG",
    navComienza: "START YOUR PROGRAM",
    navContactanos: "CONTACT US",

    titulo: "START YOUR PROGRAM",
    subtitulo: "Take the first step toward an unforgettable international experience!",
    intro: "Complete this form with your information and let us help you find the ideal program for you.",

    seccion01: "01. Personal information",
    labelNombres: "Full legal first name(s) *",
    labelApellidos: "Full legal last name(s) *",
    labelTipoDocumento: "Identity document *",
    labelNumeroIdentidad: "Identity document number *",
    labelFechaNacimiento: "Date of birth *",
    labelCelular: "Mobile phone *",
    labelEmail: "Email address *",
    labelConfirmarEmail: "Confirm your email address *",

    seccion02: "02. Residence and studies",
    labelPaisNacimiento: "Country of birth *",
    labelPaisResidencia: "Country of residence *",
    labelCiudadResidencia: "City / State / Region of residence *",
    labelCentroEstudios: "Educational institution *",
    labelOtroCentro: "Specify your educational institution *",
    labelCarrera: "Major / Field of study *",

    seccion03: "03. Programs",
    labelPrograma: "Which program are you interested in? *",
    labelFechaPrograma: "Ideal program/travel start date *",

    botonEnviar: "Submit",

    opTipoDocumento: "Select your identity document type",
    opPasaporte: "Passport",
    opCarnet: "Foreign resident card",
    opSeleccionaPais: "Select your country",
    opSeleccionaPaisResidencia: "Select your country of residence",
    opCentroEstudios: "Select your educational institution",
    opOtro: "Other",
    opPrograma: "Select the program",

    phNombres: "Enter your first name(s) exactly as shown on your official document",
    phApellidos: "Enter your last name(s) exactly as shown on your document",
    phNumeroIdentidad: "Enter your identity document number",
    phFechaNacimiento: "Enter your date of birth",
    phCelular: "Enter your mobile phone number",
    phEmail: "Enter your email address",
    phConfirmarEmail: "Enter your email address again",
    phCiudadResidencia: "Enter your city",
    phOtroCentro: "Enter your educational institution",
    phCarrera: "Enter your major or field of study",
    phFechaPrograma: "Choose your date",

    emailBloqueado: "Please enter another email address you use, such as Gmail, university email, or another provider.",
    correosNoCoinciden: "The email addresses do not match.",
    envioCorrecto: "Form submitted successfully.",
    errorEnvio: "There was an error submitting the form."
  }
};

/* CAMBIAR IDIOMA */
function setLanguage(lang) {
  currentLanguage = lang;
  const t = translations[lang];

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");
    if (t[key]) {
      element.textContent = t[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (t[key]) {
      element.placeholder = t[key];
    }
  });

  document.getElementById("btnEs").classList.toggle("active-lang", lang === "es");
  document.getElementById("btnEn").classList.toggle("active-lang", lang === "en");
}

document.getElementById("btnEs").addEventListener("click", () => {
  setLanguage("es");
});

document.getElementById("btnEn").addEventListener("click", () => {
  setLanguage("en");
});

setLanguage("es");

/* ENVÍO DEL FORMULARIO */
document.getElementById("formulario").addEventListener("submit", async function(e) {
  e.preventDefault();

  const form = e.target;
  const t = translations[currentLanguage];

  const email = form.email.value.trim().toLowerCase();
  const confirmarEmail = form.confirmarEmail.value.trim().toLowerCase();

  const emailError = document.getElementById("emailError");
  const confirmError = document.getElementById("confirmError");
  const mensaje = document.getElementById("mensaje");

  emailError.textContent = "";
  confirmError.textContent = "";
  mensaje.textContent = "";

  if (email.includes("@hotmail.") || email.includes("@outlook.")) {
    emailError.textContent = t.emailBloqueado;
    return;
  }

  if (confirmarEmail.includes("@hotmail.") || confirmarEmail.includes("@outlook.")) {
    confirmError.textContent = t.emailBloqueado;
    return;
  }

  if (email !== confirmarEmail) {
    confirmError.textContent = t.correosNoCoinciden;
    return;
  }

  const centroFinal =
    form.centroEstudios.value === "Otro"
      ? form.otroCentroEstudios.value
      : form.centroEstudios.value;

  const data = {
    idiomaFormulario: currentLanguage,

    nombres: form.nombres.value,
    apellidos: form.apellidos.value,
    tipoDocumento: form.tipoDocumento.value,
    numeroIdentidad: form.numeroIdentidad.value,
    fechaNacimiento: form.fechaNacimiento.value,

    codigoPaisCelular: "+" + iti.getSelectedCountryData().dialCode,
    paisCelular: iti.getSelectedCountryData().name,
    celular: form.celular.value,
    telefonoCompleto: iti.getNumber(),

    email: email,
    confirmarEmail: confirmarEmail,

    paisNacimiento: form.paisNacimiento.value,
    paisResidencia: form.paisResidencia.value,
    ciudadResidencia: form.ciudadResidencia.value,
    centroEstudios: centroFinal,
    otroCentroEstudios: form.otroCentroEstudios.value,
    carrera: form.carrera.value,

    programa: form.programa.value,
    fechaInicioPrograma: form.fechaInicioPrograma.value
  };

  try {
    await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify(data)
    });

    mensaje.textContent = t.envioCorrecto;
    mensaje.style.color = "#0aab52";

    form.reset();

    otroCentroBox.classList.add("hidden");
    otroCentroEstudios.required = false;

    iti.setCountry("pe");

  } catch (error) {
    mensaje.textContent = t.errorEnvio;
    mensaje.style.color = "red";
  }
});
