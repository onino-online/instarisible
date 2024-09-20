const instarisible = [
	"Ces posts sont une insulte à tous les internés",
	"Moi qui suis inculte je te mets une fessée",
	"Mon humour n’est pas noir je ne suis pas grossière",
	"En particulier surtout pour les rombières",
	"Misérables salopes, méprisable traînée",
	"Mes vers tels une clope au fond d’un cendrier",
	"Fond de toi une capote trouée usagée",
	"Tu n’es pas miope et tu lis le français ?",
	"Ton âme en roule libre ? Repasse ta serpillère…",
	"La lumière se tarie haïssable est mon pieds",
	"Les mots sont des lames abrasant alliée nerfs",
	"Intarissable est le puit de la folle arrièrée",
];

function createVersesHTML(verses) {
	// Create a DocumentFragment to hold the verses
	const fragment = document.createDocumentFragment();

	// Loop through each verse and create a <p> tag for each one
	verses.forEach((verse) => {
		const p = document.createElement("p"); // Create a <p> tag
		p.textContent = verse; // Set the text content of the <p> tag
		fragment.appendChild(p); // Append the <p> tag to the fragment
	});

	// Return the fragment with all the <p> tags
	return fragment;
}
