let valor;

const btn = document.querySelector('.btn');

    btn.addEventListener('click', (e) => {
        valor = prompt(`How many squares per side?
                            
    (lowest value is 2, highest value is 100!)

    `);

        while ((valor < 2) || (valor > 100)){
            valor = prompt(`Seems like you picked the wrong number
            
    Try again!`);
    }
    });

console.log(valor);

const cont = [];

for (let i=0; i<16; i++){
    cont.push(`row${i}`);
}

for (let j=0; j < cont.length; j++){
    let corridor = cont[j];
    
    function createRow(corridor){
        const container = document.querySelector('div');
    
        corridor = document.createElement('div');
        corridor.classList.add(`${cont[j]}`);
        corridor.setAttribute('style', `display: flex;
                                       border: 1px solid black;
                                       height: 50px;
                                       width: 800px`);
        
        return container.appendChild(corridor);
    }

    createRow(corridor)

    for (let k=0; k < cont.length; k++){
        
        function createSquare(corridor){
            corridor = document.querySelector(`.${cont[j]}`);
            
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('style', 
                                `backgroundColor: white; 
                                 border: 1px solid black;
                                 borderCollapse: collapse;
                                 height: 50px;
                                 width: 50px;
                                 margin: 0;
                                 padding: 0;
                                 flex: 1 1 auto`);
        
            return corridor.appendChild(square);
        }

        createSquare(corridor)
        
    }

}

const squares = document.querySelectorAll(".square");

squares.forEach(square => {

    square.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = "orange";     
    }, false);
})