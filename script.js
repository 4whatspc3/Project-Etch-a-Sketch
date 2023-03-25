let value = 16,
    cont = [],
    color = `rgb(255,165,0)`,
    howBright = 100,
    currentBright,
    keyButton;

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
                                    `filter: brightness(${howBright}%);
                                    backgroundColor: white; 
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

function randomNumber(){
   return Math.floor(Math.random()* 255);
}

function randomColor(){
    let r = randomNumber();
    let g = randomNumber();
    let b = randomNumber();

    return `rgb(${r},${g},${b})`;
}

function makeItDarker(currentBright){
    let finalBright = currentBright - 5;

    if (currentBright <= 0) {
        finalBright = 0;
    }

    return finalBright
}

function paint(){
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        
        square.addEventListener('mouseover', (e) => {            
            if (keyButton == 'rainbow'){
                color = randomColor();
            }

            if (keyButton == 'eraser'){
                color = 'white';
            }

            e.target.style.backgroundColor = `${color}`;
            
            if (keyButton == 'shading'){
                bright = e.target.style.filter;
                console.log(bright.length)
                
                if (bright.length == 14){
                    currentBright = Number(bright.slice(11, 12));
                } else if (bright.length == 15){
                    currentBright = Number(bright.slice(11, 13));
                } else {
                    currentBright = Number(bright.slice(11, 14));
                }

                howBright = makeItDarker(currentBright);
            }
            
            e.target.style.filter = `brightness(${howBright}%)`;
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
    
    keyButton = '';
    color = `rgb(255,165,0)`;
    howBright = 100;
    createGrid();
    paint();
});

const btn = document.querySelectorAll('button');

btn.forEach(button => {
    
    button.addEventListener('click', (e) => {
        
        if (e.target.matches('.rainbow')) {
            keyButton = 'rainbow';
            paint();
        }

        if (e.target.matches('.shading')) {
           keyButton = 'shading';
           paint();
        }

        if (e.target.matches('.eraser')) {
            keyButton = 'eraser';
            paint();
        }

        if (e.target.matches('.clear')) {
            const parent = document.querySelector(".container");
            
            empty(parent);
            
            createGrid();

            paint();
        }
    });
})