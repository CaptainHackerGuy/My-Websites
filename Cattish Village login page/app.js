        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
     
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBQQJQU0AIdDDmbM0AtyqMuvmPGrp-zTWE",
          authDomain: "login-with-firebase-data-3af12.firebaseapp.com",
          projectId: "login-with-firebase-data-3af12",
          storageBucket: "login-with-firebase-data-3af12.appspot.com",
          messagingSenderId: "255212230031",
          appId: "1:255212230031:web:28809fe34dbec0689e67fa"
        };
     
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
       
        // Initialize Variables
        const auth = firebase.auth()
        const database = firebase.database()
 
        // Regstering new users
        function register(){
 
            // Get all our input fields
            email = document.getElementById('email').value
            password = document.getElementById('password').value
 
            // Validate input fields
            if(validate_email(email) == false || validate_password(password) == false){
                alert('Email or password is wrong!')
                return  
                // Dont continue running the code
            }
 
            // Move on with auth
            auth.createUserWithEmailAndPassword(email, password)
            .then(function(){
                var user = auth.currentUser
               
                var database_ref = database.ref()
                var user_data = {
                    email : email,
                    last_login: Date.now()
                }
                database_ref.child('users/' + user.uid).set(user_data)
 
                alert('User Created!')
            })
            .catch(function(error){
                var error_code = error_code
                var error_message = error.message
 
                alert(error_message)
            })
        }
        function validate_email(email){
            expression = /^[^@]+@\w+(\.\w+)+\w$/
            if(expression.test(email) == true){
                // Email is good
                return true
            } else{
                // Email is not good
                return false
            }
        }
 
        function validate_password(password){
            // FIrebase only accepts lengths more than 6
            if(password < 6){
                return false
            } else{
                return true
            }
        }
 
        function validate_field(field){
            if(field == null){
                return false
            }
            if(field.length <= 0){
                return false
            } else{
                return false
            }
        }
 

