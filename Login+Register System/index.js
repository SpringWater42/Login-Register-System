let loginBtn = document.getElementById("loginBtn");
let registerBtn = document.getElementById("registerBtn");
let details = [
  {
    email: "test@gmail.com",
    password: "zxcvbnma",
  },
];

// Login
loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(details);

  let email = document.getElementById("enteredEmail").value;
  let password = document.getElementById("enteredPassword").value;

  for (i = 0; i < details.length; i++) {
    if (email == details[i].email && password == details[i].password) {
      console.log(email + " is logged in");
    } else if (email == details[i].email && password !== details[i].password)
      console.log("incorrect email or password");
  }
});

// Register
registerBtn.addEventListener("click", (e) => {
  e.preventDefault();

  //let registerUser = 1; // Can register user
  let registeremail = document.getElementById("newEmail").value;
  let registerpassword = document.getElementById("newPassword").value;
  var newUser = {
    email: registeremail,
    password: registerpassword,
  };
  for (i = 0; i < details.length; i++) {
    {
      if (registeremail == details[i].email) {
        alert("username is already in use");
        return;
      } else if (registerpassword.length < 8) {
        alert("password is to short include 8 or more characters");
        return;
      }
    }
  }

  details.push(newUser);
  console.log(details);
});
