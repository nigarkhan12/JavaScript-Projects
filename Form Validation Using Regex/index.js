console.log('This is project 4');

const name = document.getElementById('name');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

let validUser = false;
let validEmail = false;
let validPhone = false;

$('#success').hide();
$('#failure').hide();

name.addEventListener('blur', () => {
  console.log("Name is blured");
  // Validate Name here
  let regex = /^[a-zA-Z]([0-9a-zA-Z]){2,10}$/;
  let str = name.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log('Your name is valid');
    name.classList.remove('is-invalid');
    validUser = true;
  }
  else {
    name.classList.add('is-invalid');
    console.log('Your name is invalid');
    validUser = false;
  }
});

email.addEventListener('blur', () => {
  console.log("Name is blured");
  // Validate Email here
  let regex = /^([_\-\.a-zA-Z0-9]+)@([_\-\.a-zA-Z0-9]+)\.([a-zA-Z]){2,7}$/;
  let str = email.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log('Your email is valid');
    email.classList.remove('is-invalid');
    validEmail = true;
  }
  else {
    email.classList.add('is-invalid');
    console.log('Your email is invalid');
    validEmail = false;
  }
});

phone.addEventListener('blur', () => {
  console.log("Name is blured");
  // Validate Phone here
  let regex = /^([0-9]){10}$/;
  let str = phone.value;
  console.log(regex, str);
  if (regex.test(str)) {
    console.log('Your phone is valid');
    phone.classList.remove('is-invalid');
    validPhone = true;
  }
  else {
    phone.classList.add('is-invalid');
    console.log('Your phone is invalid');
    validPhone = false;
  }
});


let submit = document.getElementById("submit");
submit.addEventListener('click', (e) => {
  e.preventDefault();
  console.log('You clicked on Submit');

  // Submit your form here
  if (validUser && validEmail && validPhone) {
    let failure = document.getElementById("failure");
    console.log('Valid');
    let success = document.getElementById("success");
    success.classList.add('show');
    // failure.classList.remove('show');
    // $('#failure').alert('close');
    $('#failure').hide();
    $('#success').show();
  }
  else {
    console.log('Invalid');
    let failure = document.getElementById("failure");
    failure.classList.add('show');
    // success.classList.remove('show');
    // $('#success').alert('close');
    $('#success').hide();
    $('#failure').show();
  }
})