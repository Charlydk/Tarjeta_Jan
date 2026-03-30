/**
 * Orquestador principal de la tarjeta Jan-Axel.
 * Inyecta los datos de WeddingConfig en el DOM.
 */
document.addEventListener('DOMContentLoaded', () => {
    const config = window.WeddingConfig;
    if (!config) {
        console.error("WeddingConfig no encontrada.");
        return;
    }

    // Inyección de Nombres
    const titleGroomBride = document.querySelectorAll('.wedding-names');
    titleGroomBride.forEach(el => {
        el.innerText = `${config.names.bride} & ${config.names.groom}`;
    });

    // Sección Religiosa
    const religiosa = config.sections.ceremoniaReligiosa;
    document.getElementById('church-venue').innerText = religiosa.venue;
    document.getElementById('church-address').innerText = religiosa.address;
    document.getElementById('church-date').innerText = religiosa.date;
    document.getElementById('church-time').innerText = religiosa.time;
    document.getElementById('church-map').href = religiosa.mapLink;

    // Sección Civil
    const civil = config.sections.ceremoniaCivil;
    document.getElementById('civil-address').innerText = civil.address;
    document.getElementById('civil-date').innerText = civil.date;
    document.getElementById('civil-time').innerText = civil.time;
    document.getElementById('civil-map').href = civil.mapLink;

    // Sección Fiesta
    const fiesta = config.sections.fiesta;
    document.getElementById('party-venue').innerText = fiesta.venue;
    document.getElementById('party-address').innerText = fiesta.address;
    document.getElementById('party-date').innerText = fiesta.date;
    document.getElementById('party-time').innerText = fiesta.time;
    document.getElementById('party-map').href = fiesta.mapLink;

    // RSVP
    document.getElementById('rsvp-deadline').innerText = config.rsvp.deadline;
    document.getElementById('rsvp-link').href = config.rsvp.formLink;

    // Dress Code
    document.getElementById('dress-code-type').innerText = config.dressCode.type;
    document.getElementById('dress-code-desc').innerText = config.dressCode.description;

    console.log("Inyección de datos para Axel & Janet completada con éxito. ¡Hermoso!");
});
