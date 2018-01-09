// Complete each of the questions below. You can see the expected result for each of the questions by

function Question1(inputArray) {
	// DUPLICATE AN ARRAY
	// You should write a function that repeats an array twice and returns it.
	// The original array should not be modified.

	return [...inputArray, ...inputArray];
}

function Question2(inputArray) {
	// REVERSE AN ARRAY
	// You should write a function that reverses an array and returns it.
	// The original array should not be modified.

	return inputArray.slice().reverse();
}

function Question3(inputArray, itemToFind) {
	// COUNT THE NUMBER OF ELEMENTS IN AN ARRAY
	// You should write a function that returns a count of the number of 'itemToFind' that exist in 'inputArray'
	let counter = 0;
	inputArray.forEach(function(el) {
		if (el === itemToFind) {
			counter++;
		}
	})
	return counter;
}

function Question4(deckOfCardsArray) {
	// SHUFFLE A DECK OF CARDS
	// You should write a function that shuffles the items in 'deckOfCardsArray'
	// The original array should be modified

	for (let i = deckOfCardsArray.length - 1; i > 0; i--) {
		let aux = deckOfCardsArray[i];
		let j = Math.floor(Math.random() * (i + 1));

		deckOfCardsArray[i] = deckOfCardsArray[j];
		deckOfCardsArray[j] = aux;
	}
}

function Question5(inputString) {
	// REVERSE THE WORDS IN A STRING
	// You should write a function that reverses the order of the words in a string. The letters in
	// the words should be unchanged.
	// e.g. "the cat sat on the mat" should become "mat the on sat cat the"

	return inputString.split(' ').reverse().join(' ');
}
