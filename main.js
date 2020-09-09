var buttonStudy = document.querySelector(".study");
var iconStudy = document.querySelector("#study-icon");
var buttonMeditate = document.querySelector(".meditate");
var iconMeditate = document.querySelector("#meditate-icon");
var buttonExercise = document.querySelector(".exercise");
var iconExercise = document.querySelector("#exercise-icon");

buttonStudy.addEventListener("click", studySelector);
buttonMeditate.addEventListener("click", meditateSelector);
buttonExercise.addEventListener("click", exerciseSelector);

function studySelector() {
  buttonStudy.classList.add("study-color");
  iconStudy.src="./assets/study-active.svg"
}

function meditateSelector() {
  buttonMeditate.classList.add("meditate-color");
  iconMeditate.src="./assets/meditate-active.svg"
}

function exerciseSelector() {
  buttonExercise.classList.add("exercise-color");
  iconExercise.src="./assets/exercise-active.svg"
}
