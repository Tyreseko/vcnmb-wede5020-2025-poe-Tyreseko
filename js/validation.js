document.addEventListener('DOMContentLoaded', function () {
  const registrationForm = document.getElementById('registrationForm');
  const errorMessage = document.getElementById('validationError'); // matches HTML id

  registrationForm.addEventListener('submit', function (event) {
    event.preventDefault(); // fixed typo

    const username = document.getElementById('username');
    const fullname = document.getElementById('fullname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Reset styles and messages
    errorMessage.textContent = '';
    username.style.borderColor = '';
    fullname.style.borderColor = '';
    email.style.borderColor = '';
    password.style.borderColor = '';

    let valid = true;

    // Username validation
    if (username.value.trim() === '') {
      username.style.borderColor = 'red';
      errorMessage.textContent = 'Username is required';
      valid = false;
    } else {
      username.style.borderColor = 'green';
    }

    // Fullname validation
    if (fullname.value.trim() === '') {
      fullname.style.borderColor = 'red';
      errorMessage.textContent = 'Full name is required';
      valid = false;
    } else {
      fullname.style.borderColor = 'green';
    }

    // Email validation
    const enteredEmail = email.value.trim();
    const positionOfAt = enteredEmail.indexOf('@');
    const positionOfDot = enteredEmail.lastIndexOf('.');

    if (enteredEmail === '') {
      email.style.borderColor = 'red';
      errorMessage.textContent = 'Email address is required';
      valid = false;
    } else if (
      !enteredEmail.includes('@') ||
      !enteredEmail.includes('.') ||
      positionOfAt < 1 ||
      positionOfDot < positionOfAt + 2 ||
      positionOfDot >= enteredEmail.length - 1
    ) {
      email.style.borderColor = 'red';
      errorMessage.textContent = 'Email address is invalid';
      valid = false;
    } else {
      email.style.borderColor = 'green';
    }

    // Password validation
    if (password.value.trim() === '') {
      password.style.borderColor = 'red';
      errorMessage.textContent = 'Password is required';
      valid = false;
    } else if (password.value.length < 6) {
      password.style.borderColor = 'red';
      errorMessage.textContent = 'Password must be at least 6 characters';
      valid = false;
    } else {
      password.style.borderColor = 'green';
    }

    // If all valid
    if (valid) {
      errorMessage.style.color = 'green';
      errorMessage.textContent = 'Form submitted successfully!';

      registrationForm.reset();

      setTimeout(() => {
        username.style.borderColor = '';
        fullname.style.borderColor = '';
        email.style.borderColor = '';
        password.style.borderColor = '';
        errorMessage.style.color = 'red';
        errorMessage.textContent = '';
      }, 2000);
    }
  });
});