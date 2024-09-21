function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);

    return inputNumber;

}

// Main Balance 
function getTextFieldValueById (id){
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

// Show section
function showSectionById (id){
    // hid all the sections
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provided id
    document.getElementById(id).classList.remove('hidden');

}

// Take the history