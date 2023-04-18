const buttons = document.querySelectorAll(".button");
let yourChoice = document.querySelector("#pickSide");
let result = document.querySelector("#result");
const twoBtns = Array.from(buttons, (button) => {
  button.addEventListener("click", flip);
});
console.log(twoBtns);
function flip(event) {
  fetch("/api")
    .then((res) => res.text())
    .then((data) => {
      console.log(data);
      yourChoice.innerText = event.target.innerText;
      console.log(event.target.innerText);
      if (data == event.target.innerText) {
        result.innerText = `yup u got that. computer flipped ${data} too thats crazy`;
      } else {
        result.innerText = `lol better luck next time. computer flipped ${data}`;
      }
    });
}
