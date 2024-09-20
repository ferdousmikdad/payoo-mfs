
// document.getElementById('id').addEventListener('click', function(){})

// TODO: search: form submit reloading the page

// step-1: set event handler
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        
        // step-2: prevent default behavior (prevent reloading browser)
        event.preventDefault(); //it will remove the default page reloading behavior

        // step-3: get the mobile number and pin number
        const mobileNumber = document.getElementById('mobile-number').value;
        const pinNumber = document.getElementById('pin-number').value;

        // console.log(mobileNumber, pinNumber);

        // step-4: validate mobile and pin number
        // this is the temporary (bad) way
        if(mobileNumber === '5' && pinNumber === '123'){
            console.log('You are logged in');
            // step-5: allow user to website 
            window.location.href = './home.html';
        }
        else{
            alert('Wrong mobile or pin number');
        }
    });