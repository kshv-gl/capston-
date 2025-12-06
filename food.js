
//Postcode Search Box
var searchBtn = document.querySelector(".search-box button");
var searchInput = document.querySelector(".search-box input");

if (searchBtn) {
    searchBtn.addEventListener("click", function () {
        var code = searchInput.value.trim();

        if (code === "") {
            alert("Please enter a postcode.");
        } else {
            alert("Showing restaurants near: " + code);
        }
    });
}



//Login Validation
var loginBtn = document.querySelector("button.login-btn");
var loginEmail = document.querySelector("input.login-email");
var loginPassword = document.querySelector("input.login-password");

if (loginBtn) {
    loginBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (loginEmail.value === "" || loginPassword.value === "") {
            alert("Please fill all login fields.");
        } else {
            alert("Login successful!");
        }
    });
}

//Signup Validation
var signupBtn = document.querySelector("button.signup-btn");
var signupName = document.querySelector("input.signup-name");
var signupEmail = document.querySelector("input.signup-email");
var signupPassword = document.querySelector("input.signup-password");

if (signupBtn) {
    signupBtn.addEventListener("click", function (e) {
        e.preventDefault();

        if (signupName.value === "" || signupEmail.value === "" || signupPassword.value === "") {
            alert("Please fill all signup fields.");
        } else {
            alert("Signup successful!");
        }
    });
}

//Cuisine Boxes Click
var cuisines = document.querySelectorAll(".box");

cuisines.forEach(function (box) {
    box.addEventListener("click", function () {
        var name = box.querySelector("h3").innerText;
        alert("You selected: " + name);
    });
});
