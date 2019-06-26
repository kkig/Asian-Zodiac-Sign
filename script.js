const button = document.querySelector('#button');
const input = document.querySelector('#input');
const animal = document.querySelector('#animal');
const inputForm = document.getElementById('calculator-form');

const zodiac = [ 'Mice', 'Cow', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse',
'Sheep', 'Monkey', 'Chicken', 'Dog', 'Boar'];
let year;

button.onclick = e => {
	e.preventDefault();

	const inputValue = input.value;

	year = inputValue <= 3 ? parseInt(inputValue) + 8 : (inputValue - 4) % 12;

	animal.textContent = zodiac[year];
	inputForm.reset();
}
