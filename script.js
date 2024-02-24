let currentIteration = 0;
let currentWidth = 75;
let currentHeight = 50;
function grow(){
    let firstButton = document.querySelector('.first-button');
    console.log(firstButton);
    let secondButton = document.querySelector('.second-button');
    currentIteration++;
    switch(currentIteration){
        case 1:
            firstButton.style.width = '100px';
            firstButton.style.height = '75px';
            secondButton.innerHTML = 'Estas segura?'
            break;
        case 2: 
            firstButton.style.width = '125px';
            firstButton.style.height = '100px';
            secondButton.innerHTML = 'Estas completamenta segura?...'
            break;
        case 3:
            firstButton.style.width = '150px';
            firstButton.style.height = '125px'; 
            secondButton.innerHTML = 'Pero segura segura?.'           
            break;
        case 4:
            firstButton.style.width = '175px';
            firstButton.style.height = '150px';   
            secondButton.innerHTML = 'Por favor?'         
            break;
        case 5:
            firstButton.style.width = '200px';
            firstButton.style.height = '175px';        
            secondButton.innerHTML = 'Por favor por favor?'    
            break;         
        case 6:
            firstButton.style.width = '225px';
            firstButton.style.height = '200px';     
            secondButton.innerHTML = 'Andale perdoname'          
            break;          
        case 7:
            firstButton.style.width = '250px';
            firstButton.style.height = '225px';     
            secondButton.innerHTML = 'Deja de darle click aqui!'          
            break;
        case 8:
            firstButton.style.width = '275px';
            firstButton.style.height = '250px';   
            secondButton.innerHTML = 'Ya perdoname!!'            
            break;
        case 9:
            firstButton.style.width = '300px';
            firstButton.style.height = '275px';    
            secondButton.innerHTML = 'No puedes decir que no!'           
            break;
        case 10:
            firstButton.style.width = '325px';
            firstButton.style.height = '300px';        
            secondButton.innerHTML = 'Añañe amorchi'       
            break;
        case 11:
            firstButton.style.width = '350px';
            firstButton.style.height = '325px';      
            secondButton.innerHTML = 'Añañe amorchi'         
            break;   
        default:
            let height = 350 + (25 * (currentIteration - 11));
            let width = 325 + (25 * (currentIteration - 11));
            firstButton.style.width = `${width}px`;
            firstButton.style.height = `${height}px`; 
            break;
    }
}

function accept(){
    let buttons = document.querySelector('.buttons');
    let firstSuccess = document.querySelector('.success1');
    let secondSuccess = document.querySelector('.success2');
    buttons.remove();
    firstSuccess.style.opacity = 1;
    secondSuccess.style.opacity = 1;
}