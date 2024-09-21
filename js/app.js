
document.getElementById('btn-add-money')
    .addEventListener('click' , function(event){
        event.preventDefault();
        
        const addMoney = getInputFieldValueById('input-add-money');
        const pinNumber = getInputFieldValueById('input-pin-number');

        if(pinNumber === 1234){
            const balance = getTextFieldValueById('account-balance');
            const newBalance = balance + addMoney;

            document.getElementById('account-balance').innerText = newBalance;

            // Add to Transaction History
            const div = document.createElement('div');
            div.innerHTML = `
            <div
              class="bg-white py-2 px-4 my-2 rounded-xl border flex justify-between hover:border hover:border-blue-200"
            >
              <div class="flex items-center-center">
                <img
                  class="bg-gray-100 rounded-full p-4 mr-4"
                  src="assets/addMoney.svg"
                  alt=""
                />
                <div>
                  <h3 class="text-xl font-semibold text-gray-600">
                    Add Money
                  </h3>
                  <p class="text-gray-400">Added: ${addMoney} Tk. Balance: ${newBalance} Tk.</p>
                </div>
              </div>
              <img src="assets/threedot.svg" alt="" />
            </div>
            `;

            document.getElementById('transaction-container').prepend(div);            

        }
        else {
            alert('Failed to add money');
        }

})