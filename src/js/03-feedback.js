import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.form-email');
const textarea = document.querySelector('.form-textarea');
const button = document.querySelector('.form-button');

if (localStorage.getItem('feedback-form-state') !== null) {
  const saveData = JSON.parse(localStorage.getItem('feedback-form-state'));
  email.value = saveData.email;
  textarea.value = saveData.message;
} else {
  email.value = '';
  textarea.value = '';
}

form.addEventListener('input', throttle(onFormInputEvents, 500));

function onFormInputEvents(event) {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({
      email: email.value,
      message: textarea.value,
    })
  );
}

form.addEventListener('submit', onClickButtonSubmit);

function onClickButtonSubmit(event) {
  event.preventDefault();

  email.value = '';
  textarea.value = '';

  console.log(
    localStorage.getItem(
      'feedback-form-state',
      JSON.stringify({
        email: email.value,
        message: textarea.value,
      })
    )
  );

  localStorage.clear();
}
