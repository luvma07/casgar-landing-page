function renderTemplate(url) {
    let mainContent = document.getElementById('mainContent');
    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Red no correcta: ' + response.status);
        }
        return response.text();
    })
    .then(html => {
        mainContent.innerHTML = html;
    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud fetch:', error);
    });
}


window.addEventListener('hashchange', navegacion, false);
function navegacion() {
    if (location.hash === "#home") {
        renderTemplate('./templates/home.html');
    }
    if (location.hash === "#termografia") {
        renderTemplate('./templates/termografia_infraroja.html');
    }
    if (location.hash === "#equipos-de-combustion") {
        renderTemplate('./templates/equipos_de_combustion.html');
    }
    if (location.hash === "#aire-acondicionado") {
        renderTemplate('./templates/aire_acondicionado.html');
    }
    if (location.hash === "#electricidad") {
        renderTemplate('./templates/electricidad.html');
    }
    if (location.hash === "#soldadura") {
        renderTemplate('./templates/soldadura.html');
    }
    if (location.hash === "#estructuras-metalicas") {        
        renderTemplate('./templates/estructuras_metalicas.html');
    }
    if (location.hash === "#analisis-y-reparacion-de-fallas") {
        renderTemplate('./templates/analisis_y_reparacion_de_fallas.html');
    }
    if (location.hash === "#mantenimiento-preventivo-y-correctivo") {
        renderTemplate('./templates/analisis_y_reparacion_de_fallas.html');
    }
    
    // Retirar menu
    let navMovil = document.getElementById("navMovil");
    navMovil.classList.remove("left-0");
    navMovil.classList.add("-left-3/4");
    mainContent.style.backgroundColor = '#FFFFFF';
}



document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    if (hash === '') {
        window.location.hash = '#home';
    }
    navegacion()
})



