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
var startTimer = document.querySelector("h2");
var countdownTime = document.querySelector(".time");
var logActivityButton = document.querySelector(".log-activity");
var cardDisplay = document.querySelector(".activity-cards");
var pastActivitiesPrompt = document.querySelector(".past-activities-prompt");
var createNewActivityButton = document.querySelector(".create-new-activity");
var inputs = document.querySelectorAll(".input");
var errorList = document.querySelectorAll(".error");
var indicatorColor;
var categorySelected = "";
var savedActivities = [];

window.onload = showCards;
activityButton.addEventListener('click', dataValidate);
activityButton.addEventListener("mouseover", timeLimits);
buttonWrap.addEventListener("click", buttonState);
buttonWrap.addEventListener("click", setCategory);
startButton.addEventListener("click", timerCountdown);
logActivityButton.addEventListener("click", saveActivity);
createNewActivityButton.addEventListener("click", displayForm);

function hideItem(toHide) {
  toHide.classList.add("hidden");
}
function showItem(toShow) {
  toShow.classList.remove("hidden");
}

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
    indicatorColor = "#B3FD78"
    categorySelected = "Study"
    startButton.classList.add("start-button-green")
  } else if (event.target.className.includes("meditate-select") || event.target.id === "meditate") {
    indicatorColor = "#C278FD"
    categorySelected = "Meditate"
    startButton.classList.add("start-button-purple")
  } else if (event.target.className.includes("exercise-select") || event.target.id === "exercise") {
    indicatorColor = "#FD8078"
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
    indicatorColor,
    false,
    savedActivities.length
  )
  savedActivities.push(newActivity);
}

function removeForm() {
  hideItem(hideForm);
  showItem(activityTimer);
  displayTime();
}

function dataValidate() {
  startButton.disabled = false;
  startButton.innerText = "START";
  createNewActivityButton.classList.add("hidden");
    showItem(startButton);
    showItem(startTimer);
    showItem(countdownTime);
  if (categorySelected && accomplishInput.value.length > 0 && minutesInput.value.length > 0 && secondsInput.value.length > 0) {
    removeForm();
    newInstance();
    startTimer.innerText = accomplishInput.value;
  } else {
    for( var i = 0; i < inputFields.length; i++) {
      if (inputFields[0].value.length === 0) {
        showItem(accomplishError);
      }
      if (inputFields[1].value.length === 0) {
        showItem(minutesError);
      }
      if(inputFields[2].value.length === 0) {
        showItem(secondsError);
      }
    }
    if(!categorySelected) {
      showItem(activityError);
    }
  }
}

function timeLimits() {
  if (minutesInput.value >= 90) {
    secondsInput.value = 0
    minutesInput.value = 90;
  }
  if (secondsInput.value >= 59) {
    secondsInput.value = 59;
  }
}

function displayTime() {
  showItem(activityTimer);
  if (minutesInput.value < 10) {minutesInput.value = `0${minutesInput.value}`};
  if (secondsInput.value < 10) {secondsInput.value = `0${secondsInput.value}`};
  countdownTime.innerText = `${minutesInput.value}:${secondsInput.value}`;
}

function timerCountdown() {
  startButton.disabled = true;
  var totalSeconds = Number((minutesInput.value) * 60) + Number(secondsInput.value);
  var interval = setInterval(countdown, 1000)
    function countdown() {
      if (totalSeconds <= -1) {
        clearInterval(interval);
        timerComplete();
      } else if (totalSeconds >= 0) {
      var minute = Math.floor(totalSeconds / 60);
      var second = totalSeconds % 60;
      if (minute < 10) {minute = `0${minute}`};
      if (second < 10) {second = `0${second}`};
      totalSeconds--;
      countdownTime.innerText = `${minute}:${second}`;
    }
  }
}

function timerComplete() {
  startButton.innerText="COMPLETE!";
  showItem(logActivityButton);
}

function saveActivity() {
  hideItem(startButton);
  hideItem(startTimer);
  hideItem(countdownTime);
  hideItem(logActivityButton);
  hideItem(pastActivitiesPrompt);
  showItem(createNewActivityButton);
  
  var activityCards = "";
  for (var i = 0; i < savedActivities.length; i++) {
    activityCards =
    `<div class="activity-card">
    <div class="card">
    <div>
    <h5 class="card-header">${savedActivities[i].category}</h5>
    <p class="card-time">${savedActivities[i].minutes} MIN ${savedActivities[i].seconds} SECONDS</p>
    <p class="card-description">${savedActivities[i].description}</p>
    </div>
    <div class="color-indicator" style= "background-color: ${savedActivities[i].color}">
    </div>
    </div>
     </div>
    `
  }
  cardDisplay.insertAdjacentHTML("afterend", activityCards);
  storePastActivities();
}

 function displayForm() {
   showItem(hideForm);
   hideItem(activityTimer);
   clearInputs();
   clearButtons();
   clearErrors();
 }
 
 function clearErrors() {
   for (var i = 0; i < errorList.length; i++) {
     hideItem(errorList[i]);
 }
}

 function clearInputs() {
   for (var i = 0; i < inputs.length; i++) {
    inputs[i].value = ""
   }
 }

 function clearButtons() {
   iconStudy.src="./assets/study.svg";
   iconMeditate.src="./assets/meditate.svg";
   iconExercise.src="./assets/exercise.svg";
   buttonStudy.classList.add("white");
   buttonMeditate.classList.add("white");
   buttonExercise.classList.add("white");
 }
 
 function storePastActivities() {
   var stringifiedActivities = JSON.stringify(savedActivities);
   var saveLocal = localStorage.setItem("cards", stringifiedActivities);
 }
 
 function showCards() {
   var getLocal = localStorage.getItem("cards");
   var parseIt = JSON.parse(getLocal);
   if (parseIt.length > 0) {
     hideItem(pastActivitiesPrompt);
   }
   var oldCards = '';
   var addOldCard;
   for (var i = 0; i < parseIt.length; i++) {
     addOldCard = 
     `<div class="activity-card">
     <div class="card">
     <div>
     <h5 class="card-header">${parseIt[i].category}</h5>
     <p class="card-time">${parseIt[i].minutes} MIN ${parseIt[i].seconds} SECONDS</p>
     <p class="card-description">${parseIt[i].description}</p>
     </div>
     <div class="color-indicator" style= "background-color: ${parseIt[i].color}">
     </div>
     </div>
      </div>
     `
     oldCards += addOldCard;

   }
   cardDisplay.insertAdjacentHTML("afterend", oldCards);
 }
 //ddisplay cards
 
 
 
 
 
 
 
