const header = document.getElementById("header");
header.textContent = "Welcome to the Updated DOM Manipulation Lab .V2";
const paragraph = document.querySelector("#intro");
paragraph.textContent = "This paragraph have been changed";
header.style.color = "blue";

const input = document.getElementById("userInput");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener('click', function() {
	const userInputText = input.value;
paragraph.textContent = `User entered: ${userInputText}`;
	console.log(userInputText);
});