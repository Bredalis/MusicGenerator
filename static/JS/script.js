
// Poner las canciones de forma automatizada
document.addEventListener("DOMContentLoaded", () => {
	const sonidos = [
        { title: "JAZZ", src: "/static/Audio/Jazz.mp3" },
        { title: "PIANO 1", src: "/static/Audio/Piano.mp3" },
        { title: "PIANO 2", src: "/static/Audio/Piano_2.mp3" },
        { title: "PIANO 3", src: "/static/Audio/Piano_3.mp3" },
        { title: "PIANO 4", src: "/static/Audio/Piano_4.mp3" },
        { title: "ROCK 1", src: "/static/Audio/Rock_1.mp3" },
        { title: "ROCK 2", src: "/static/Audio/Rock_2.mp3" },
        { title: "BLUE", src: "/static/Audio/Blue.mp3" },
        { title: "GUITARRA 1", src: "/static/Audio/Guitarra.mp3" },
        { title: "GUITARRA 2", src: "/static/Audio/Guitarra_2.mp3" },
        { title: "FUNK 1", src: "/static/Audio/Funk.mp3" },
        { title: "FUNK 2", src: "/static/Audio/Funk_2.mp3" },
        { title: "ORQUESTA 1", src: "/static/Audio/Orquesta.mp3" },
        { title: "ORQUESTA 2", src: "/static/Audio/Orquesta_2.mp3" },
        { title: "ORQUESTA 3", src: "/static/Audio/Orquesta_3.mp3" },
        { title: "VIOLíN 1", src: "/static/Audio/Violin.mp3" },
        { title: "VIOLíN 2", src: "/static/Audio/Violin_2.mp3" },
        { title: "INSTRUMENTO", src: "/static/Audio/Instrumentos.mp3" },
        { title: "PISTA 1", src: "/static/Audio/Pista.mp3" },
        { title: "PISTA 2", src: "/static/Audio/Pista_2.mp3" }
    ];

	// Obtener elementos a manipular
	const contenedorSonido = document.getElementById("contenedor-sonido");
	const h1 = document.querySelector("h1");
	const botonColor = document.getElementById("boton-color");

	let condicion = true;

	// Crear div de audio
	sonidos.forEach((sonido, index) => {
		const contenedor = document.createElement("div");
		contenedor.classList.add("sonidos");

		const titulo = document.createElement("h5");
		titulo.textContent = sonido.title;

		const audio = document.createElement("audio");
		audio.classList.add("audio");
		audio.src = sonido.src;
		audio.loop = true;

		contenedor.appendChild(titulo);
		contenedor.appendChild(audio);
		contenedorSonido.appendChild(contenedor);

		// Reproducir audio
		contenedor.addEventListener("click", () => {
			const sonando = audio.paused;

			sonando ? audio.play() : audio.pause();
			sonando ? contenedor.style.backgroundColor = "#495057" : contenedor.style.backgroundColor = "#343a40"; 
		});
	});

	// Cambiar el color de fondo
	botonColor.addEventListener("click", () => {
		document.body.style.backgroundColor = condicion ? "#212529" : "whitesmoke";
		h1.style.color = condicion ? "whitesmoke" : "#212529";
		
		contenedorSonido.querySelectorAll(".sonidos").forEach(contenedor => {
			contenedor.style.backgroundColor = condicion ? "#343a40" : "#212529";
		});

		condicion = !condicion;
	});
});