function createGrid(){
    const container = document.querySelector('div');

    const square = document.createElement('div');
    square.classList.add('square');
    square.setAttribute('style', 
                        `backgroundColor: white; 
                         border: 1px solid black;
                         borderCollapse: collapse;
                         height: 50px;
                         width: 50px;
                         margin: 0;
                         padding: 0;`);

    return container.appendChild(square);
}

for (let i=0; i < 256; i++) {
   createGrid();
}


const squares = document.querySelectorAll(".square");

squares.forEach(square => {

    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "orange";     
    }, false);
})