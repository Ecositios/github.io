document.addEventListener("DOMContentLoaded", () => {

    const links = document.querySelectorAll("[data-page]");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {

            e.preventDefault(); // NO recargar página

            const page = link.getAttribute("data-page");

            fetch(page)
                .then(response => response.text())
                .then(data => {

                    content.innerHTML = data;

                })
                .catch(error => {
                    content.innerHTML = "<h2>Error al cargar contenido</h2>";
                    console.error(error);
                });

        });
    });

});
