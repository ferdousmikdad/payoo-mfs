// Add money to the account

// step-1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money')
    .addEventListener('click' , function(event){
    event.preventDefault();

    // Step-2: get money to be added to the account balance
    const inputAddMoney = document.getElementById('input-add-money').value;

    // Step-3: Pin number validation
    const inputPinNumber = document.getElementById('input-pin-number').value;
    // Verify the pin number (not ideal way just for fun)
    if(inputPinNumber === 'admin'){

        // step-4: get the current balance
        const accountBalance = document.getElementById('account-balance').innerText;
        // step-5: add addMoneyInput with balance
        const addMoneyNumber = parseFloat(inputAddMoney);
        const balanceNumber = parseFloat(accountBalance);
        const newBalance = addMoneyNumber + balanceNumber;

        console.log(newBalance);

        // step-6: update the balance in the DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to add money');
    }
});



document.getElementById('btn-cash-out')
    .addEventListener('click' , function(event){
    event.preventDefault();

    const inputCashOut = document.getElementById('input-cash-out').value;
    const inputPinNumber = document.getElementById('input-pin-number').value;

    if(inputPinNumber === 'admin'){

        const accountBalance = document.getElementById('account-balance').innerText;
        const cashOutMoney = parseFloat(inputCashOut);
        const balanceNumber = parseFloat(accountBalance);
        const newBalance = cashOutMoney - balanceNumber;

        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

    }
    else{
        alert('Failed to Cash Out');
    }
});