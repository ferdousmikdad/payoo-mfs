
// document.getElementById('id').addEventListener('click', function(){})

// TODO: search: form submit reloading the page

// step-1 set event handler
document.getElementById('btn-login')
    .addEventListener('click', function(event){
        
        // step-2 prevent default behavior (prevent reloading browser)
        event.preventDefault(); //it will remove the default page reloading behavior

        // step-3 get the mobile number
        const mobileNumber = document.getElementById('mobile-number').value;
        // console.log(mobileNumber);


    });