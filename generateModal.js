function generateModal(id = "modal") {
	return function (contentFragment) {
		// Create a new DocumentFragment to hold the modal structure
		const modalFragment = document.createDocumentFragment();

		// Create the modal container (div)
		const modalContainer = document.createElement("div");
		modalContainer.classList.add("modal-container");
		modalContainer.id = id;

		// Create the modal content wrapper
		const modalContent = document.createElement("div");
		modalContent.classList.add("modal-content");

		// Create the modal footer with a button
		const modalTitle = document.createElement("h1");
		modalTitle.classList.add("modal-title");
		modalTitle.textContent = "INSTARISIBLE";
		modalContent.appendChild(modalTitle);

		const modalSubTitle = document.createElement("h3");
		modalSubTitle.classList.add("modal-subtitle");
		modalSubTitle.textContent =
			"La seule chose absolue dans un monde comme Lenôtre, c'est l'humour";
		modalContent.appendChild(modalSubTitle);

		const modalSubTitle2 = document.createElement("h4");
		modalSubTitle2.classList.add("modal-subtitle");
		modalSubTitle2.textContent = "En effet Albert, en effet";
		modalContent.appendChild(modalSubTitle2);

		// Insert the content fragment into the modal content wrapper
		modalContent.appendChild(contentFragment);

		// Create the modal footer with a button
		const modalFooter = document.createElement("div");
		modalFooter.classList.add("modal-footer");

		const okButton = document.createElement("button");
		okButton.textContent = "J'ai fait conscience en l'absurde";
		modalFooter.appendChild(okButton);

		// Append the footer to the modal content
		modalContent.appendChild(modalFooter);

		// Append the modal content to the modal container
		modalContainer.appendChild(modalContent);

		// Append the modal container to the fragment
		modalFragment.appendChild(modalContainer);
		const audioPlayer = createAudioPlayer();

		// Add an event listener to the OK button to close the modal
		okButton.addEventListener("click", function () {
			modalContainer.style.display = "none"; // Hide the modal when "OK" is clicked
			audioPlayer.play(); // Call this to start the audio
		});

		// Return the modal fragment with the inserted content and footer
		return modalFragment;
	};
}

function createAudioPlayer() {
	// Create an audio element
	const audio = new Audio("./m.mp3");

	// Set the loop to false initially (we'll handle the loop manually)
	audio.loop = false;

	// Add an event listener to loop the music once (play twice in total)
	let playCount = 0;

	audio.addEventListener("ended", function () {
		playCount++;
		if (playCount < 2) {
			audio.play(); // Play one more time after the first end
		}
	});

	// Return an object exposing the play method
	return {
		play: function () {
			audio.play();
		},
	};
}

// Example usage:
