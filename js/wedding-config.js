/**
 * Configuración dinámica para la tarjeta de Axel & Janet.
 * Centralizamos toda la data aquí para facilitar cambios de último momento.
 */
const WeddingConfig = {
    names: {
        groom: "Axel",
        bride: "Janet",
        full: "Denise & Axel" // Tal como se ve en el logo de la imagen
    },
    eventDate: {
        church: "2026-04-25T21:00:00",
        civil: "2026-04-30T13:00:00",
        party: "2026-04-30T22:00:00"
    },
    sections: {
        ceremoniaReligiosa: {
            title: "Ceremonia Religiosa",
            date: "Sábado 25 de Abril",
            time: "21:00 HS",
            venue: "Iglesia Nuestra Sra. de la Medalla Milagrosa",
            address: "Formosa 62, San Miguel de Tucumán",
            mapLink: "https://maps.app.goo.gl/aL814aMtM6wJnN8r5" // Buscado en Maps
        },
        ceremoniaCivil: {
            title: "Ceremonia Civil",
            date: "Jueves 30 de Abril",
            time: "13:00 HS",
            venue: "Registro Civil",
            address: "Ayacucho 357, San Miguel de Tucumán",
            mapLink: "https://maps.app.goo.gl/zUdx8rCcYEvDsnac6"
        },
        fiesta: {
            title: "La Fiesta",
            date: "Jueves 30 de Abril",
            time: "22:00 HS",
            venue: "Salón Círculo de Oficiales",
            address: "Av. Pedro Miguel Araoz 325, San Miguel de Tucumán",
            mapLink: "https://maps.app.goo.gl/GR5JbXUd61t6kTzTA"
        }
    },
    rsvp: {
        deadline: "10 de Abril",
        formLink: "https://wa.me/5493815704858?text=¡Hola! Quiero confirmar mi asistencia al casamiento de Axel y Janet."
    },
    dressCode: {
        title: "Dress Code",
        type: "Elegante / Elegante Sport",
        description: "Por favor, evitar vestimenta de color claro."
    },
    colors: {
        primary: "#F5F5DC", // Beige
        accent: "#87CEEB",  // Celeste
        dark: "#333333"
    }
};

window.WeddingConfig = WeddingConfig;
