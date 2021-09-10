let bigSquare = document.querySelector('#bigSquare') 
document.querySelector('#validate').addEventListener('click',() => {
    bigSquare.innerHTML = '' ; 
    var mySelect =  document.querySelector('#mySelect').value ; 
    for (let i = 1; i <= mySelect; i++) {
        let size = 100/Math.sqrt(mySelect);
        let square=document.createElement('div')
        square.classList.add('square'); 
        square.dataset.id = i ; //ajouter un dataset + id pour chaque element pour preciser la box
        square.style.width = size + '%'
        square.style.height = size + '%'
        bigSquare.append(square);   
    }
})

bigSquare.addEventListener('click',(el) => {
    el = el.target ;
    if(el.dataset.id) {
        let color = document.querySelector('#color').value 
        el.style.backgroundColor = color ;
        // el.style.backgroundColor = document.querySelector('#color').value
    }
})
