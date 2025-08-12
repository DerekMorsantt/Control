import { item } from "../../modulos/item/itemModulo.js";

export function seccion1(){

    let seccion = document.createElement('section');

    seccion.className = "seccion-1";

    let juegos = [
        ["Valorant", "https://static.vecteezy.com/system/resources/thumbnails/022/636/388/small_2x/valorant-logo-valorant-icon-transparent-free-png.png", "Valorant es un shooter 5v5 donde equipos compiten en rondas usando habilidades únicas de agentes combinadas con disparos precisos. La estrategia y la puntería son clave para ganar."],
        ["LOL", "https://images.seeklogo.com/logo-png/38/2/league-of-legends-logo-png_seeklogo-385125.png", "Un juego competitivo de Riot Games donde dos equipos de cinco campeones luchan por destruir la base enemiga. Cada campeón tiene habilidades únicas y el juego requiere trabajo en equipo, estrategia y conocimiento del mapa."],
        ["Titanfall 2", "https://image.api.playstation.com/cdn/UP0006/CUSA04027_00/aXeiAjNxWELptZ2lgHiyW89wVAO0Fxxn.png", "Titanfall 2 combina combates rápidos a pie con el uso de titanes, enormes mechas armados. Destaca por su movilidad fluida y una excelente campaña para un jugador."],
        ["Borderlands", "https://images.seeklogo.com/logo-png/17/2/borderlands-game-logo-png_seeklogo-174730.png", "Una serie de juegos con estilo gráfico tipo cómic y mucho humor negro. Mezcla disparos en primera persona con mecánicas de RPG y loot. Los jugadores exploran mundos caóticos llenos de enemigos y botín, en solitario o en cooperativo."]
    ];

    juegos.forEach(element =>{
        seccion.appendChild(item(element[0],element[1],element[2]))
    });
   
    return seccion;
}