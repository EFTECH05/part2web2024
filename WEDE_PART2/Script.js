// script.js
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Will just check if the username and password are not empty.
    if (username && email && password) {
      // Successful login.
      alert("Login successful!");
    } else {
      // wii show error message if username, email or password is empty.
      document.getElementById("error-msg").innerText = "Please enter the username, email and password.";
    }
  });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        // Login Admin (replace with actual authentication logic)
        if (username === 'admin' && password === 'adminpassword') {
            window.location.href = 'admin_dashboard.html'; // Redirect to admin dashboard
        } else {
            document.getElementById('message').innerText = 'Invalid username or password. Please try again.';
        }
    });

    function login() {
      window.location.href = 'HomePage.html';
  }

  function admin() {
      window.location.href = 'LoginAdmin.html';
  }

  