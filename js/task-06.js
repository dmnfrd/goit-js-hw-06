const input = document.getElementById('validation-input');
const validLength = input.getAttribute('data-length');

input.addEventListener('blur', () => {
  const enteredLength = input.value.length;

  if (enteredLength === parseInt(validLength)) {
    input.classList.remove('invalid');
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
});