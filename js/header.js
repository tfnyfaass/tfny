document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html") // Ensure correct path
    .then(response => {
      if (!response.ok) {
        throw new Error("Header file not found");
      }
      return response.text();
    })
    .then(data => {
      document.getElementById("header-container").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});
