const Login = () => {
  const loginAccountButton = document.querySelector(".loginAccountBtn p");
  const signUpForm = document.querySelector(".sign-up");
  const createAccountButton = document.querySelector(".createAccountBtn p");
  const signInForm = document.querySelector(".sign-in");

  loginAccountButton.style.display = "none";
  signUpForm.style.display = "none";

  const Choice = () => {
    createAccountButton.addEventListener("click", () => {
      createAccountButton.style.display = "none";
      signInForm.style.display = "none";
      loginAccountButton.style.display = "block";
      signUpForm.style.display = "block";
    });

    loginAccountButton.addEventListener("click", () => {
      signUpForm.style.display = "none";
      loginAccountButton.style.display = "none";
      signInForm.style.display = "block";
      createAccountButton.style.display = "block";
    });
  };

  Choice();
};

Login();
