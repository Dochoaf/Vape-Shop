function allowAccess() {
  document.getElementById("ageModal").style.display = "none";
}

function denyAccess() {
  alert("No puedes ingresar a este sitio");
  window.location.href = "https://www.google.com";
}