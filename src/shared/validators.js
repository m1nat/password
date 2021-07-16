import { PASSWORD_STRENGTH } from "./constants/common";
import { REGEXP } from "./constants/regexp";

export const passwordLengthValidator = password => password.match(REGEXP.PASSWORD_LENGTH);

export const emailLengthValidator = email => email.match(REGEXP.EMAIL);

const passwordDifficultyLevel = document.getElementById('password-difficulty-level');

const lowerCaseCheck = password => REGEXP.LOWER_CASE.test(password);

const upperCaseCheck = password => REGEXP.UPPER_CASE.test(password);

const numberCaseCheck = password => REGEXP.NUMBERS.test(password);

const eightCharacterCaseCheck = password => REGEXP.EIGHT_CHARACTERS.test(password);

const redBlock = () => {
  passwordDifficultyLevel.classList.add('red');
  passwordDifficultyLevel.style.display = 'block'
};

const orangeBlock = () => {
  passwordDifficultyLevel.classList.add('orange');
  passwordDifficultyLevel.style.display = 'block'
};

const yellowBlock = () => {
  passwordDifficultyLevel.classList.add('yellow');
  passwordDifficultyLevel.style.display = 'block'
};

const greenBlock = () => {
  passwordDifficultyLevel.classList.add('green');
};

export const passwordStrengthController = password => {
  let passwordStrength;

  const passwordStrengthNum =
    lowerCaseCheck(password) +
    upperCaseCheck(password) +
    numberCaseCheck(password) +
    eightCharacterCaseCheck(password);

  Object.keys(PASSWORD_STRENGTH).forEach(el => {
    if (PASSWORD_STRENGTH[el] === passwordStrengthNum) {
      passwordStrength = el;
    }
  })

  passwordStrength === 'Weak'? redBlock() : passwordDifficultyLevel.classList.remove('red');
  passwordStrength === 'Moderate'? orangeBlock() : passwordDifficultyLevel.classList.remove('orange');
  passwordStrength === 'Strong'? yellowBlock() : passwordDifficultyLevel.classList.remove('yellow');
  passwordStrength === 'Very Strong'? greenBlock() : passwordDifficultyLevel.classList.remove('green');
};

