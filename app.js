const board = document.querySelector('#board');
const colors = ['#B43757', '#784B84', '#C64B8C', '#E4A0F7', '#B660CD', '#7852A9', '#D7BFDC', '#DE73FF'];
const SQUARES_NUMBER = 450;

for (let i=0; i< SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  
  square.addEventListener('mouseover', setColor);
  
  square.addEventListener('mouseleave', removeColor);
  
  board.append(square);
  
  function setColor(event) {
  	const element = event.target;
  	const color = getRandomColor();
  	element.style.backgroundColor = color;
    element.style.boxshadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }
  
  function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxshadow = `0 0 2px #000`
  }
  
  function getRandomColor(){
	return colors[Math.floor(Math.random() * colors.length)];
  }
  
}