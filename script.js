const button = document.querySelector('#button');
const input = document.querySelector('#input');
const animal = document.querySelector('#animal');

button.onclick = e => {
	e.preventDefault();

	const inputValue = input.value;
	const zodiac = [ 'Mice', 'Cow', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse',
	'Sheep', 'Monkey', 'Chicken', 'Dog', 'Boar'];
	let year;


	if (inputValue <= 3) {
		year = parseInt(inputValue) + 8;
		//console.log(year);
	} else {
		year = (inputValue - 4) % 12;
	}

	animal.innerHTML = zodiac[year];
}