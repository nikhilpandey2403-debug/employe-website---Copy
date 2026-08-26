function openUpdateForm() {

    document.getElementById("updateModal").style.display = "flex";

}


function closeUpdateForm() {

    document.getElementById("updateModal").style.display = "none";

}


function logout() {

    const confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {

        window.location.href = "index.html";

    }

}


// Close modal when clicking outside

window.addEventListener("click", function(event) {

    const modal = document.getElementById("updateModal");

    if (event.target === modal) {

        closeUpdateForm();

    }

});


// Project update form

document.getElementById("updateForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        alert("Project update posted successfully!");

        closeUpdateForm();

        this.reset();

    }
);