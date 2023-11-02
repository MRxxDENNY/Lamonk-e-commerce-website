console.log("Hello");

const btn = document.querySelector("#signup-btn");

const form = document.querySelector(".wrapper");

const closeBtn = document.querySelector(".close-wrapper");

// console.log(btn);

// function  abc(){
//     console.log("Hii");
// }

// const abc = ()=>{
//     console.log("Hii");
// }

// abc()

btn.addEventListener("click", () => {
  form.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  form.style.display = "none";
});

const namePattern = /^[a-zA-Z\s]{2,24}$/;

const contactPattern = /^\+91-[0-9]{10}$/;

const emailPattern = /^[a-z0-9\.]+@[a-z]+\.[a-z\.]{3,8}$/;

// const obj = {
//     username : "Dev1234",
//     age : 27,
//     email : "dev123@gmail.com"
//     getdata : ()=>{

//     }
// }

const patterns = {
  name: /^[a-zA-Z\s]{2,24}$/,
  email: /^[a-z0-9\.]+@[a-z]+\.[a-z]{3,8}$/i,
  contact: /^[0-9]{10}$/
};
const validationForm = (name, field) => {
  console.log(field, name, field.value);
  if (field.value) {
    if (patterns[name].test(field.value)) {
      console.log(patterns[name].test(field.value));
      field.classList.add("success");
      field.classList.remove("failure");
    }
    else {
      field.classList.add("failure");
      field.classList.remove("success");
    }
  }
  else {
    field.classList.remove("failure");
    field.classList.remove("success");

  }
}
const inputs = document.querySelectorAll('.wrapper input[type="text"]')
for (let i = 0; i < inputs.length; i++) {

  console.log(inputs[i]);
  inputs[i].addEventListener('keyup', (e) => {
    validationForm(e.target.name, e.target);
  })
}

function createCaptcha() {
  let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$";
  for (let i = 0; i < 5; i++) {

  }
}

let generatedCaptcha = '';

function createCaptcha() {
  let chars = "qwertyuiopasdfghjklzxcvbnm1234567890@#$";

  for (let i = 0; i < 5; i++) {
    let num = Math.round(Math.random() * chars.length - 1);
    generatedCaptcha += chars[num];
  }
  console.log(generatedCaptcha);
  document.querySelector(".captcha-text").innerText = generatedCaptcha;
}

document
  .querySelector(".captcha-reload-icon")
  .addEventListener("click", createCaptcha);
createCaptcha();

document.querySelector('.wrapper form').addEventListener('submit', (e) => {
  e.preventDefault()

  console.log(usercaptcha);
  if (userCaptcha == generatedCaptcha) {
    // alert("Form Submitted Successfully!!!")
    window.navigator.geolocation.getCurrentPosition(() => {
      console.log(pos.coords.latitude, pos.coords.longitude);
    }, () => {
      alert("Location Blocked")
    })
  }
  else {
    alert("Incorrect Captcha");
  }
})

