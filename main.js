var buttonStudy = document.getElementById("study-button");
var iconStudy = document.querySelector("#study");
var buttonMeditate = document.getElementById("meditate-button");
var iconMeditate = document.querySelector("#meditate");
var buttonExercise = document.getElementById("exercise-button");
var iconExercise = document.querySelector("#exercise");
var activityButton = document.querySelector(".start-activity");
var minutesInput = document.querySelector("#minutes");
var secondsInput = document.querySelector("#seconds");
var accomplishInput = document.querySelector("#accomplish");
var buttonWrap = document.querySelector(".category-buttons");

var savedActivities = [];
activityButton.addEventListener('click', newInstance);

var categorySelected


buttonWrap.addEventListener("click", function(event) {
  if (event.target.className.includes("study-select")) {
    buttonStudy.classList.remove("white");
    buttonMeditate.classList.add("white");
    buttonExercise.classList.add("white");
    iconMeditate.src="./assets/meditate.svg";
    iconExercise.src="./assets/exercise.svg";
    buttonStudy.classList.add("study-color");
    iconStudy.src="./assets/study-active.svg";
    categorySelected = event.target.value;
  }
  else if (event.target.className.includes("meditate-select")) {
    buttonMeditate.classList.remove("white");
    buttonStudy.classList.add("white");
    buttonExercise.classList.add("white");
    iconStudy.src="./assets/study.svg";
    iconExercise.src="./assets/exercise.svg";
    buttonMeditate.classList.add("meditate-color");
    iconMeditate.src="./assets/meditate-active.svg";
    categorySelected = event.target.value;
  }
  else if (event.target.className.includes("exercise-select")) {
    buttonExercise.classList.remove("white");
    buttonExercise.classList.add("exercise-color");
    buttonMeditate.classList.add("white");
    buttonStudy.classList.add("white");
    iconStudy.src="./assets/study.svg";
    iconExercise.src="./assets/exercise-active.svg"
    iconMeditate.src="./assets/meditate.svg"
    categorySelected = event.target.value;
  }
});

function newInstance() {
  var newActivity = new Activity (
    categorySelected,
    accomplishInput.value,
    minutesInput.value, 
    secondsInput.value,
  )
  savedActivities.push(newActivity)
}
