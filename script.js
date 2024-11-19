function startCelebration() {
	// Показуємо контейнери для конфетті та кульок
	const confettiContainer = document.getElementById("confetti-container");
	const balloonsContainer = document.getElementById("balloons-container");
	confettiContainer.classList.remove("hidden");
	balloonsContainer.classList.remove("hidden");

	// Генерація конфетті
	for (let i = 0; i < 200; i++) {
		const confetti = document.createElement("div");
		confetti.classList.add("confetti");
		confetti.style.left = Math.random() * 100 + "vw";
		confetti.style.backgroundColor = getRandomColor();
		confetti.style.animationDuration = 3 + Math.random() * 2 + "s";
		confetti.style.animationDelay = Math.random() * 2 + "s";
		confettiContainer.appendChild(confetti);
	}

	// Генерація кульок
	for (let i = 0; i < 50; i++) {
		const balloon = document.createElement("div");
		balloon.classList.add("balloon");
		balloon.style.left = Math.random() * 100 + "vw";
		balloon.style.animationDuration = 6 + Math.random() * 3 + "s";
		balloon.style.animationDelay = Math.random() * 1 + "s";
		balloon.style.background = getRandomGradient();
		balloonsContainer.appendChild(balloon);
	}
}

// Функція для випадкових кольорів
function getRandomColor() {
	const colors = [
		"#ff6f61",
		"#ffcc00",
		"#6bff6b",
		"#61a8ff",
		"#a861ff",
		"#ff61b3",
	];
	return colors[Math.floor(Math.random() * colors.length)];
}

// Функція для випадкових градієнтів
function getRandomGradient() {
	const gradients = [
		["#ff6f61", "#ff4d4d"],
		["#61a8ff", "#417dff"],
		["#6bff6b", "#47e647"],
		["#ffcc00", "#e6b800"],
		["#ff61b3", "#e44192"],
	];
	const randomColors =
		gradients[Math.floor(Math.random() * gradients.length)];
	return `radial-gradient(circle, ${randomColors[0]}, ${randomColors[1]})`;
}
