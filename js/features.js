// Show the cash out form
document.getElementById('btn-show-cash-out')
.addEventListener('click' , function(){

    // show cash out button
    document.getElementById('cash-out-form').classList.remove('hidden');

    // Hide the add money form
    document.getElementById('add-money-form').classList.add('hidden');
})

document.getElementById('btn-show-add-money')
.addEventListener('click' , function(){

    // show the Add money form
    document.getElementById('add-money-form').classList.remove('hidden');

    // hide the cash out form
    document.getElementById('cash-out-form').classList.add('hidden');
})