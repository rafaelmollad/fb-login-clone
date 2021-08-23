// Get reference to the password input
const passwordEl = document.querySelector(".form__input--password");

// Get reference to the container for the eye image
const eyeContainerEl = document.querySelector(".password-eye-container");

// Get reference for the eye image
const eyeImgEl = eyeContainerEl.getElementsByTagName("img")[0];

// This will show/hide the eye
passwordEl.addEventListener("keyup", (e) => {
  e.target.value.length
    ? eyeContainerEl.classList.remove("hidden")
    : eyeContainerEl.classList.add("hidden");
});

// This will switch from the eye to the eye off and viceversa
eyeContainerEl.addEventListener("click", () => {
  if (eyeImgEl.classList.contains("eye-off")) {
    eyeImgEl.src = "../images/eye.png";
    eyeImgEl.classList.remove("eye-off");
    passwordEl.type = "text";
  } else {
    eyeImgEl.src = "../images/eye-off.png";
    eyeImgEl.classList.add("eye-off");
    passwordEl.type = "password";
  }
});
