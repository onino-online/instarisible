async function loadJSONFile(filePath) {
	try {
		// Fetch the JSON file
		const response = await fetch(filePath);

		// Check if the fetch was successful
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		// Convert the response to JSON
		const jsonData = await response.json();

		// Return the parsed JSON data (should be an array if the JSON contains a list of texts)
		return jsonData;
	} catch (error) {
		console.error("Error loading or parsing JSON file:", error);
	}
}

// Usage example
//   loadJSONFile('./risibles.json').then(data => {
//     console.log(data);  // This will log the array of text if the JSON is loaded successfully
//   });
function displayTexts(textArray) {
	let currentIndex = 0;

	// Create a div for displaying the text
	const textContainer = document.createElement("div");
	Object.assign(textContainer.style, {
		position: "fixed",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		fontSize: "24px",
		color: "#ffffff",
		textAlign: "center",
		padding: "20px",
		backgroundColor: "rgba(0, 0, 0, 0.7)",
		borderRadius: "10px",
		maxWidth: "80%",
		wordWrap: "break-word",
	});
	textContainer.classList.add("text");

	document.body.appendChild(textContainer);

	// Function to display the next text
	function showNextText() {
		if (currentIndex < textArray.length) {
			// Set the content for the current text
			textContainer.textContent = textArray[currentIndex];
			currentIndex++;

			// Show the text with the fade-in effect
			textContainer.classList.remove("text-hidden", "text-zoom-out");
			textContainer.classList.add("text-visible");
		} else {
			// Apply the zoom-out effect when no more texts are available
			textContainer.classList.remove("text-visible");
			textContainer.classList.add("text-zoom-out");
		}
	}

	// Initial display of the first text
	setTimeout(showNextText, 100);

	// Add an event listener to the body to listen for clicks
	document.body.addEventListener("click", function () {
		// Trigger the disappearance effect before showing the next text
		if (textArray.length > 0) {
			textContainer.classList.remove("text-visible");
			textContainer.classList.add("text-zoom-out");

			// Wait for the zoom-out effect to finish before showing the next text
			setTimeout(() => {
				// Choose a random index from the array
				const randomIndex = Math.floor(Math.random() * textArray.length);

				// Set the text content to a random text from the array
				textContainer.textContent = textArray[randomIndex];

				// Remove the selected text from the array (optional, if you don't want to show it again)
				textArray.splice(randomIndex, 1);

				// Show the next random text with the fade-in effect
				textContainer.classList.remove("text-zoom-out");
				textContainer.classList.add("text-visible");
			}, 500);
		}
	});
}

// Example usage:
const texts = [
	"First text to display",
	"Second text appears on click",
	"Third text shows up after another click",
	"Fourth and final text",
];

// Call the function with the array of texts
// displayTexts(texts);
