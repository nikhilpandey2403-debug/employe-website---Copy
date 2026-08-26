let selectedRole = "employee";


// Select Employee / Team Leader

function selectRole(role) {

    selectedRole = role;

    const employeeBtn = document.getElementById("employeeBtn");
    const leaderBtn = document.getElementById("leaderBtn");

    if (role === "employee") {

        employeeBtn.classList.add("active");
        leaderBtn.classList.remove("active");

    } else {

        leaderBtn.classList.add("active");
        employeeBtn.classList.remove("active");

    }
}


// Show / Hide Password

function togglePassword() {

    const password = document.getElementById("password");

    if (password.type === "password") {

        password.type = "text";

    } else {

        password.type = "password";

    }
}


// Login

document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const message = document.getElementById("message");


    if (email === "" || password === "") {

        message.textContent = "Please enter email and password.";
        message.style.color = "red";

        return;
    }


    message.textContent =
        "Login successful as " + selectedRole + "!";

    message.style.color = "green";


    console.log("Email:", email);
    console.log("Role:", selectedRole);

});