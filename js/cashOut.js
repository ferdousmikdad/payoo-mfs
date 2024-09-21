
document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();

        const cashOut = getInputFieldValueById('input-cash-out');
        const pinNumber = getInputFieldValueById('input-cash-out-pin');

        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance - cashOut;

            document.getElementById('account-balance').innerText = newBalance;

            // Add to Transaction History
            const div = document.createElement('div');
            div.innerHTML = `
            <div
              class="bg-white py-2 px-4 my-2 rounded-xl border flex justify-between hover:border hover:border-red-400"
            >
              <div class="flex items-center-center">
                <img
                  class="bg-red-50 rounded-full p-4 mr-4"
                  src="assets/cashout.svg"
                  alt=""
                />
                <div>
                  <h3 class="text-xl font-semibold text-gray-600">
                    Add Money
                  </h3>
                  <p class="text-red-400">Withdraw: ${cashOut} Tk. Balance: ${newBalance} Tk.</p>
                </div>
              </div>
              <img src="assets/threedot.svg" alt="" />
            </div>
            `;

            document.getElementById('transaction-container').prepend(div);
        }
        else{
            'Failed to cash out'
        }
})