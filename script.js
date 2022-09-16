const formEmail = document.getElementById('formEmail');
const formCountry = document.getElementById('formCountry');
const formZip = document.getElementById('formZip');
const formPass = document.getElementById('formPass');
const formConPass = document.getElementById('formConPass');

formEmail.type = 'email';
formEmail.setAttribute('required', '');
formEmail.setAttribute('placeholder', '');
if (formEmail.innerText === '') {
  formEmail.setCustomValidity('');
}

formEmail.addEventListener('input', () => {
  formEmail.setCustomValidity('');
  if (!formEmail.checkValidity()) {
    formEmail.setCustomValidity('Enter an email address (example@example.com)');
  }
});

formCountry.type = 'text';
formCountry.setAttribute('required', '');
formCountry.setAttribute('placeholder', '');
formCountry.setAttribute('pattern', '[A-Za-z]*');

if (!formCountry.innerText === '') {
  formCountry.setCustomValidity('');
}

formCountry.addEventListener('input', () => {
  formCountry.setCustomValidity('');
  if (!formCountry.checkValidity()) {
    formCountry.setCustomValidity('Enter text characters only');
  }
});

formZip.type = 'text';
formZip.setAttribute('required', '');
formZip.setAttribute('placeholder', '');
formZip.setAttribute('pattern', '[0-9]{5}');
formZip.setAttribute('maxlength', 5);

formZip.addEventListener('input', () => {
  formZip.setCustomValidity('');
  if (!formZip.checkValidity()) {
    formZip.setCustomValidity('Enter zip in form 00000');
  }
});

formPass.type = 'password';
formPass.setAttribute('required', '');
formPass.setAttribute('minlength', 6);
formPass.setAttribute('maxlength', 10);
formPass.setAttribute('placeholder', '');
formConPass.type = 'password';
formConPass.setAttribute('required', '');
formConPass.setAttribute('minlength', 6);
formConPass.setAttribute('maxlength', 10);
formConPass.setAttribute('placeholder', '');

formPass.addEventListener('change', checkPassMatch);
formConPass.addEventListener('change', checkPassMatch);

function checkPassMatch() {
  if (form.formPass.value === '' || form.formConPass.value === '') {
    formPass.setCustomValidity('');
    formConPass.setCustomValidity('');
  } else if (form.formPass.value === form.formConPass.value) {
    formPass.setCustomValidity('');
    formConPass.setCustomValidity('');
  } else {
    formPass.setCustomValidity('Passwords do not match');
    formConPass.setCustomValidity('Passwords do not match');
  }
}

const submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function (e) {
  if (formEmail.innerText === '') {
    return false;
  }
});
