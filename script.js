let value = 16,
    cont = [];

function numberOfSquares(){
    cont = [];

    for (let i=0; i < value; i++){
        cont.push(`row${i}`);
    }

    return cont
}

function createGrid(){
    numberOfSquares();
    
    for (let j=0; j < cont.length; j++){
        let corridor = cont[j];
        
        function createRow(corridor){
            const container = document.querySelector('div');
        
            corridor = document.createElement('div');
            corridor.classList.add(`${cont[j]}`);
            corridor.setAttribute('style', `display: flex;
                                            flex: 1 1 auto;
                                            border-width: 0px 1px;
                                            border-style: solid;
                                            border-color: rgb(208,208,208);
                                            height: auto;
                                            width: 400px;
                                            margin: 0;
                                            padding: 0;`);
                
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
                                    border-width: 1px;
                                    border-style: solid;
                                    border-color: rgb(208,208,208);
                                    height: auto;
                                    width: 40px;
                                    margin: 0;
                                    padding: 0;
                                    flex: 1 1 auto;`);
            
                return corridor.appendChild(square);
            }

            createSquare(corridor)
            
        }

    }
}

function paint(){
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {

        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "orange";     
        }, false);
    })
}

function empty(element) {
    element.replaceChildren(); 
}

createGrid();

paint();

const slider = document.querySelector('#myRange');

slider.addEventListener('input', () => {
    const parent = document.querySelector(".container");
    empty(parent);
    
    value= Number(slider.value);
    console.log(value);

    createGrid();
    paint();
});

const btn = document.querySelectorAll('button');

btn.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if (e.target.matches('.rainbow')) {
            //code
        }

        if (e.target.matches('.shading')) {
           //code
        }

        if (e.target.matches('.lighten')) {
           //code
        }

        if (e.target.matches('.eraser')) {
            //code
        }

        if (e.target.matches('.clear')) {
            //code
        }
    });
})