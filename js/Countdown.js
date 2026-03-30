/**
 * Countdown.js - Axel & Janet Version
 * Lee la fecha del evento desde WeddingConfig.
 */

const $days = document.getElementById('days'),
      $hours = document.getElementById('hours'),
      $minutes = document.getElementById('minutes'),
      $seconds = document.getElementById('sec');

// Esperamos a que el config esté cargado
const updateCountdown = () => {
    const config = window.WeddingConfig;
    if (!config) {
        console.warn("Esperando a WeddingConfig para el countdown...");
        return;
    }

    // Usamos la fecha de la FIESTA como target principal
    const countdownDate = new Date(config.eventDate.party).getTime();

    const interval = setInterval(function(){
        const now = new Date().getTime();
        let distance = countdownDate - now;

        // Si ya pasó la fecha
        if (distance < 0) {
            clearInterval(interval);
            $days.innerHTML = "0";
            $hours.innerHTML = "0";
            $minutes.innerHTML = "0";
            $seconds.innerHTML = "00";
            return;
        }

        // Cálculos
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / (1000));

        // Escribimos resultados
        $days.innerHTML = days;
        $hours.innerHTML = hours;
        $minutes.innerHTML = minutes;
        $seconds.innerHTML = ('0' + seconds).slice(-2);
    }, 1000);
};

// Ejecutamos
document.addEventListener('DOMContentLoaded', updateCountdown);