import { signUp } from "../../api/api-handlers.js";
import { setUserEmail } from "../../shared/ls-service.js";
import { passwordStrengthController } from "../../shared/validators.js";

export const signUpHandler = () => {
  const signUpForm = document.querySelector('.sign-up__form');
  const password_1 = document.getElementById('password1');

  // signUpForm.addEventListener('submit', event => {
  //   event.preventDefault();

  //   const userName = document.getElementById('name').value;
  //   const surname = document.getElementById('Surname').value;
  //   const birth = document.getElementById('birthday').value;
  //   const email = document.getElementById('email1').value;
  //   const password = document.getElementById('password1').value;

  //   signUp(email, password)
  //   .then( response => {
  //     if (response) {
  //       const { email } = response.user;
  //       setUserEmail(email)
  //     }
  //   });
  // })
  password_1.oninput = () => {
    passwordStrengthController(password_1.value)
  }
};
