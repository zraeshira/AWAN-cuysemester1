let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

const generatePassword = (len) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*()_+.<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
};
const getPassword = () => {
  const newPassword = generatePassword(passwordLenght.value);
  password.value = newPassword;
};
const savePassword = () => {
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," +
      encodeURIComponent("password : " + password.value)
  );
  saveButton.setAttribute("download", "MypasswordGenerator.txt");
  document.title = password.value;
};
