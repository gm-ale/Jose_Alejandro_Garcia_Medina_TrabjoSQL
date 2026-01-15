document.addEventListener("DOMContentLoaded", () => {
    fetch("../componentes/nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el nav");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("nav").innerHTML = data;

            // Activar enlace actual
            const currentPath = window.location.pathname;

            document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
                if (link.getAttribute("href") === currentPath) {
                    link.classList.add("active");
                    link.setAttribute("aria-current", "page");
                }
            });
        })
        .catch(error => {
            console.error("Error cargando el nav:", error);
        });
});
