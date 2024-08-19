window.addEventListener('hashchange', navegacion, false);

function navegacion() {
    if (location.hash === "#aire-acondicionado") {
        console.log("Aire acondicionado");
    }
    
    if (location.hash === "#analisis-y-reparacion-de-fallas") {
        console.log("Analisis y reparación de fallas");
    }
    
    if (location.hash === "#electricidad") {
        console.log("Electricidad");
    }
    
    if (location.hash === "#equipos-de-combustion") {
        console.log("Equipos de combustion");
    }
    
    if (location.hash === "#estructuras-metalicas") {
        console.log("Estructuras metalicas");
    }
    
    if (location.hash === "#mantenimiento-preventivo-y-correctivo") {
        console.log("Mantenimiento preventivo y correctivo");
    }
    
    if (location.hash === "#soldadura") {
        console.log("Soldadura");
    }
    
    if (location.hash === "#termografia") {
        console.log("Termografia Infraroja");
    }
}


