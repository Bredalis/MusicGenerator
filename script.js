
document.addEventListener("DOMContentLoaded", () => {

	const sonidos = [
        { title: "JAZZ", src: "../Audio/Jazz.mp3" },
        { title: "PIANO 1", src: "../Audio/Piano.mp3" },
        { title: "PIANO 2", src: "../Audio/Piano_2.mp3" },
        { title: "PIANO 3", src: "../Audio/Piano_3.mp3" },
        { title: "PIANO 4", src: "../Audio/Piano_4.mp3" },
        { title: "ROCK 1", src: "../Audio/Rock_1.mp3" },
        { title: "ROCK 2", src: "../Audio/Rock_2.mp3" },
        { title: "BLUE", src: "../Audio/Blue.mp3" },
        { title: "GUITARRA 1", src: "../Audio/Guitarra.mp3" },
        { title: "GUITARRA 2", src: "../Audio/Guitarra_2.mp3" },
        { title: "FUNK 1", src: "../Audio/Funk.mp3" },
        { title: "FUNK 2", src: "../Audio/Funk_2.mp3" },
        { title: "ORQUESTA 1", src: "../Audio/Orquesta.mp3" },
        { title: "ORQUESTA 2", src: "../Audio/Orquesta_2.mp3" },
        { title: "ORQUESTA 3", src: "../Audio/Orquesta_3.mp3" },
        { title: "VIOLíN 1", src: "../Audio/Violin.mp3" },
        { title: "VIOLíN 2", src: "../Audio/Violin_2.mp3" },
        { title: "INSTRUMENTO", src: "../Audio/Instrumentos.mp3" },
        { title: "PISTA 1", src: "../Audio/Pista.mp3" },
        { title: "PISTA 2", src: "../Audio/Pista_2.mp3" }
    ];

	// Obtener elementos a manipular
	const contenedorSonido = document.getElementById("contenedorSonido");
	const h1 = document.querySelector("h1");
	const botonColor = document.getElementById("botonColor");

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