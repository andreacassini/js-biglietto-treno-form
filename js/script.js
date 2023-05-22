
let button = document.getElementById('submit');
document.getElementById('km').value = '';

button.addEventListener('click', function(){
    let km = parseInt(document.getElementById('km').value);
    let age = parseInt(document.getElementById('age').value);
    let name = document.getElementById('name').value;
    let cp_code = Math.floor(Math.random() * 10000) + 9999;
    let rand_num = Math.floor(Math.random() * 12) + 1;
    let price = km * 0.21;
    let message = '';

    if(isNaN(km) === false){

        if(age === 0){
            
        }
        else if(age === 1){
            price *= 0.8;

        }
        else{
            price *= 0.6;

        }
    }
    else{
        message += 'Devi inserire i km da percorrere'
    }
    
    document.getElementById('show-name').innerText = name;
    document.getElementById('show-type').innerText = 'Biglietto Standard'
    document.getElementById('show-rand-num').innerText = rand_num;
    document.getElementById('show-cp').innerText = cp_code;
    document.getElementById('show-price').innerText = price + ' €';
});

