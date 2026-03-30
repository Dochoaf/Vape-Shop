function allowAccess() {
  sessionStorage.setItem("mayorEdad", "true");
  document.getElementById("ageModal").style.display = "none";
}

function denyAccess() {
  alert("No puedes ingresar a este sitio");
  window.location.href = "https://www.google.com";
}

document.addEventListener("DOMContentLoaded", function () {
  if (sessionStorage.getItem("mayorEdad") === "true") {
    document.getElementById("ageModal").style.display = "none";
  }
});