function createGrid(){
    const container = document.querySelector('div');

    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('style', 'background: red;');
    square.textContent = 'just_a_test';

    return container.appendChild(square);
}

for (let i=0; i < 256; i++) {
   createGrid();
}


const squares = document.querySelectorAll(".square");

squares.forEach(square => {

    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "orange";

        setTimeout(() => {
            e.target.style.backgroundColor = "red";
          }, 500);     

    }, false);
})