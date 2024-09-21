// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [

    { text: "El la estaba esperando Con una flor amarilla", time: 17 },
    //{ text: "", time: 15.5 },
    { text: "Ella lo estaba soñando con la luz en su pupila", time: 24 },
    { text: "Y el amarillo de sol iluminaba la esquina", time: 32 },
    { text: "Lo sentía tan cercano, lo sentía desde niña", time: 40 },
    { text: "Ella sabía que él sabía que algún día pasaría", time: 46 },
    { text: "Que vendría a buscarla con sus flores amarillas", time: 51 },
    { text: "No te apures, no detengas El instante del encuentro Está dicho que es un hecho", time: 59 },
    { text: "No la pierdas, no hay derecho No te olvides que la vida Casi nunca está dormida", time: 66 },
    { text: "En ese bar tan desierto Nos esperaba el encuentro", time: 93 },
    { text: "Ella llegó en limusina, Amarilla por supuesto", time: 100 },
    { text: "Él se acercó de repente La miro tan de frente", time: 107 },
    { text: "Toda una vida soñada Y no pudo decir nada", time: 114 },
    { text: "Where I'm now? I don't know why", time: 91 },
    { text: "Nice butterflies in my hands", time: 97 },
    { text: "Too much light for twilight", time: 104 },
    { text: "In the mood for the flowers love", time: 108 },
    { text: "At the time", time: 144 },
    { text: "The whisper of birds", time: 148 },
    { text: "Lonely before the sun cried", time: 153 },
    { text: "Fell from the sky", time: 158 },
    { text: "Like water drops", time: 164 },
    { text: "Where I'm now? I don't know why", time: 169 },
    { text: "Nice butterflies in my hands", time: 176 },
    { text: "Too much light for twilight", time: 183 },
    { text: "In the mood for the flowers", time: 188 },
    { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {

    var time = Math.floor(audio.currentTime);
    var currentLine = lyricsData.find(
        (line) => time >= line.time && time < line.time + 6
    );

    if (currentLine) {
        // Calcula la opacidad basada en el tiempo en la línea actual
        var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
        var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

        // Aplica el efecto de aparición
        lyrics.style.opacity = opacity;
        lyrics.innerHTML = currentLine.text;
    } else {
        // Restablece la opacidad y el contenido si no hay una línea actual
        lyrics.style.opacity = 0;
        lyrics.innerHTML = "";
    }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() 
{
    var titulo = document.querySelector(".titulo");
    titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
    setTimeout(function () 
    {
    titulo.style.display = "none";
    }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);