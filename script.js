document.getElementById("signupBtn").addEventListener("click", function() {
  document.getElementById("signupForm").style.display = "block";
});

document.getElementById("signupSubmitBtn").addEventListener("click", function(e) {
  e.preventDefault();
  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (username === "") {
    document.getElementById("signupResult").innerHTML = "Username is required";
  } else if (email === "") {
    document.getElementById("signupResult").innerHTML = "Email is required";
  } else if (password === "") {
    document.getElementById("signupResult").innerHTML = "Password is required";
  } else {
    document.getElementById("signupResult").innerHTML = "Signup Successful";
  }
});
