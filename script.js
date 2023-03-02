function createGrid(){
    const container = document.querySelector('div');

    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('style', 'background: red;');
    square.textContent = 'just_a_test';

    return container.appendChild(square);
}

for (let i=0; i < 16; i++) {
   createGrid();
}

