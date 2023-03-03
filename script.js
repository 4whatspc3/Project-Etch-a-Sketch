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


const container = document.querySelector(".container");

container.addEventListener("mouseover", (e) => {
      // highlight the mouseover target
      e.target.style.color = "orange";
  
      // reset the color after a short delay
      setTimeout(() => {
        e.target.style.color = "";
      }, 500);
    },
    false
  );