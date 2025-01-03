"use strict";
const userForm = document.querySelector(".user-form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {
        username: userName.value,
        email: userEmail.value,
    };
    console.log(data);
});
