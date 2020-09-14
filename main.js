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
var hideForm = document.querySelector(".new-activity");
var activityTimer = document.querySelector(".current-activity-box")
var startButton = document.querySelector(".start-button");
var inputFields = document.querySelectorAll("input");
var accomplishError = document.querySelector(".accomplish-input-error");
var minutesError = document.querySelector(".minutes-input-error");
var secondsError = document.querySelector(".seconds-input-error");
var activityError = document.querySelector(".activity-input-error");
var startTimer = document.querySelector("h2")
var countdownTime = document.querySelector(".time")
var categorySelected = ""
var savedActivities = [];


activityButton.addEventListener('click', dataValidate);
buttonWrap.addEventListener("click", buttonState);
buttonWrap.addEventListener("click", setCategory);
startButton.addEventListener("click",startCountdown);


  function buttonState(event) {
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
    iconExercise.src="./assets/exercise-active.svg";
    iconMeditate.src="./assets/meditate.svg";
  }
};

function setCategory(event) {
  if (event.target.className.includes("study-select") || event.target.id === "study") {
    categorySelected = "Study"
    startButton.classList.add("start-button-green")
  } else if (event.target.className.includes("meditate-select") || event.target.id === "meditate") {
    categorySelected = "Meditate"
    startButton.classList.add("start-button-purple")
  } else if (event.target.className.includes("exercise-select") || event.target.id === "exercise") {
    categorySelected = "Exercise"
    startButton.classList.add("start-button-red")
  }
}

function newInstance() {
  var newActivity = new Activity (
    categorySelected,
    accomplishInput.value,
    minutesInput.value,
    secondsInput.value,
    false,
    savedActivities.length
  )
  savedActivities.push(newActivity)
}

function removeForm() {
  hideForm.classList.add("hidden");
  activityTimer.classList.remove("hidden");
}

function dataValidate() {
  if (categorySelected && accomplishInput.value.length > 0 && minutesInput.value.length > 0 && secondsInput.value.length > 0) {
    removeForm();
    newInstance();
    startTimer.innerText = accomplishInput.value;
    displayNewTime();
  } else {
    for( var i = 0; i < inputFields.length; i++) {
      if (inputFields[0].value.length === 0) {
        accomplishError.classList.remove("hidden");
      }
      if (inputFields[1].value.length === 0) {
        minutesError.classList.remove("hidden");
      }
      if(inputFields[2].value.length === 0) {
        secondsError.classList.remove("hidden");
      }
    }
    if(!categorySelected) {
      activityError.classList.remove("hidden");
    }
  }
  // for( var i = 0; i < inputFields.length; i++) {
  //   if (inputFields[i].value.length == 0) {
  //     activityButton.disabled = true;
  //   } else if (inputFields[0].value.length > 0 && inputFields[1].value.length > 0 && inputFields[2].value.length > 0) {
  //     activityButton.disabled = false
}

function displayNewTime() {
  var collectTime = `${minutesInput.value} : ${secondsInput.value}`
    countdownTime.innerHTML = collectTime
}
 displayNewTime()

function startCountdown() {

}

// function startCountdown() {
//   var minutes = Math.floor(time / 60)
//   var seconds = time % 60
//   countdownTime.innerHTML = `${minutes} : ${seconds}`;
//   time --
// }


//
