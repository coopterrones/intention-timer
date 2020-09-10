var buttonStudy = document.getElementById("study");
var iconStudy = document.querySelector("#study-icon");
var buttonMeditate = document.getElementById("meditate");
var iconMeditate = document.querySelector("#meditate-icon");
var buttonExercise = document.getElementById("exercise");
var iconExercise = document.querySelector("#exercise-icon");
var activityButton = document.getElementById("start-activity");
var minutesInput = document.querySelector("#minutes");
var secondsInput = document.querySelector("#seconds");
var accomplishInput = document.querySelector("#accomplish");
var checkActivity = document.querySelectorAll(".activity-check");
var buttonWrap = document.querySelector(".category-buttons");

buttonWrap.addEventListener("click", function(event) {
  if (event.target.className.includes("study-select")) {
    buttonStudy.classList.remove("white");
    buttonMeditate.classList.add("white");
    buttonExercise.classList.add("white");
    iconMeditate.src="./assets/meditate.svg";
    iconExercise.src="./assets/exercise.svg";
    buttonStudy.classList.add("study-color");
    iconStudy.src="./assets/study-active.svg";
  }
  else if (event.target.className.includes("meditate-select")) {
    buttonMeditate.classList.remove("white");
    buttonStudy.classList.add("white");
    buttonExercise.classList.add("white");
    iconStudy.src="./assets/study.svg";
    iconExercise.src="./assets/exercise.svg";
    buttonMeditate.classList.add("meditate-color");
    iconMeditate.src="./assets/meditate-active.svg";
  }
  else if (event.target.className.includes("exercise-select")) {
    buttonExercise.classList.remove("white");
    buttonExercise.classList.add("exercise-color");
    buttonMeditate.classList.add("white");
    buttonStudy.classList.add("white");
    iconStudy.src="./assets/study.svg";
    iconExercise.src="./assets/exercise-active.svg"
    iconMeditate.src="./assets/meditate.svg"
    console.log("hello");
  }
});


// buttonStudy.addEventListener("click", studySelector);
// buttonMeditate.addEventListener("click", meditateSelector);
// buttonExercise.addEventListener("click", exerciseSelector);
// activityButton.addEventListener("click", startActivity);
// buttonWrap.addEventListener('click', function(event) {
//   if (event.target.id === 'study') {
//     studySelector()
//   } else if
//     (event.target.id === 'meditate') {
//       meditateSelector()
//     } else if
//       (event.target.id === 'exercise') {
//     } exerciseSelector()
//   }
// );


// function studySelector() {
//   buttonStudy.classList.remove("white");
//   buttonMeditate.classList.add("white");
//   buttonExercise.classList.add("white");
//   iconMeditate.src="./assets/meditate.svg";
//   iconExercise.src="./assets/exercise.svg";
//   buttonStudy.classList.add("study-color");
//   iconStudy.src="./assets/study-active.svg"
// }
//
// function meditateSelector() {
//   buttonMeditate.classList.remove("white");
//   buttonStudy.classList.add("white");
//   buttonExercise.classList.add("white");
//   iconStudy.src="./assets/study.svg";
//   iconExercise.src="./assets/exercise.svg";
//   buttonMeditate.classList.add("meditate-color");
//   iconMeditate.src="./assets/meditate-active.svg"
// }
//
// function exerciseSelector() {
//   buttonExercise.classList.remove("white");
//   buttonMeditate.classList.add("white");
//   buttonStudy.classList.add("white");
//   iconMeditate.src="./assets/meditate.svg";
//   iconStudy.src="./assets/study.svg";
//   buttonExercise.classList.add("exercise-color");
//   iconExercise.src="./assets/exercise-active.svg"
// }
//

// function startActivity() {
//   console.log(checkActivity);
//
//   var activityOne = new Activity {
//     catageory: get
//   }
// }
//
// function timeValidation() {
//   var minutes = minutesInput.value;
//   if(minutes == e) {
//     minutes = 0;
//   }
// }
//
// function selectedCategory() {
//   var variableCategory =
// }
