
// Obtener contenedores y audios
const contenedores = document.querySelectorAll(".sonidos");
const listaContenedores = Array.from(contenedores);
const audios = document.querySelectorAll(".audio");
const listaAudios = Array.from(audios);

// Reproducir audio

let i;
let condicion = true;

for (i = 0; i < listaContenedores.length; i++) {
	listaContenedores[i].addEventListener("click", (function(index) {

		return function() {

			if (condicion){

				listaAudios[index].loop = condicion;
				listaAudios[index].play();
				listaContenedores[index].style.background = "#495057";

				condicion = false;

			} else {

				listaAudios[index].pause();
				listaContenedores[index].style.background = "#343a40";

				condicion = true;
			}
		};	
	}(i)));
}