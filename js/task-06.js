const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  const length = input.getAttribute('data-length');
  const valueLength = input.value.length;

  input.classList.add(valueLength === length ? 'valid' : 'invalid');
  input.classList.remove(valueLength === length ? 'invalid' : 'valid');
});