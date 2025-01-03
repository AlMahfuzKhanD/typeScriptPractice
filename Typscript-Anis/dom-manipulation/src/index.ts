const userForm = document.querySelector(".user-form") as HTMLFormElement;

const userName = document.querySelector("#name") as HTMLInputElement;
const userEmail = document.querySelector("#email") as HTMLInputElement;

userForm.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  const data = {
    username: userName.value,
    email: userEmail.value,
  };
  console.log(data);
});
