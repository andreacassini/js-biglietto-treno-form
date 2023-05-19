
let button = document.getElementById('submit');
button.addEventListener('click', function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    
    let price = km * 0.21;
    let message = '';
    if(isNaN(km) === false){

        if(age === 0){
            message += `Il prezzo del biglietto è di: ${price}€`;
        }
        else if(age === 1){
            price *= 0.8;
            message += `Il costo del tuo biglietto è scontato del 20%. Il prezzo è di: ${price.toFixed(2)}€`;
        }
        else{
            price *= 0.6;
            message += `Il costo del tuo biglietto è scontato del 40%. Il prezzo è di: ${price.toFixed(2)}€`;
        }
    }
    else{
        message += 'Devi inserire i km da percorrere'
    }
    
    document.getElementById('price').innerText = message;
});

