document.getElementById('submitBtn').addEventListener('click', function(event) {
     event.preventDefault(); // Prevent the form from submitting normally

     // Get user inputs
     var name = document.getElementById('name').value;
     var phoneNumber = document.getElementById('phoneNumber').value;
     var userEmail = document.getElementById('userEmail').value;
     var selectedGender = document.querySelector('input[name="gender"]:checked').id;

     // Create an object to store the user data
     var userData = {
       name: name,
       phoneNumber: phoneNumber,
       userEmail: userEmail,
       gender: selectedGender
     };

     // Store user data in local storage
     localStorage.setItem('userData', JSON.stringify(userData));

     // sessionStorage.setItem('userData', JSON.stringify(userData));

     alert('Data saved to local storage');
   });
