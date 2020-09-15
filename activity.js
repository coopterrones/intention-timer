class Activity {
  constructor(category, description, minutes, seconds, color, completed, id) {
    this.category = category;
    this.description = description;
    this.minutes = minutes;
    this.seconds = seconds;
    this.color = color;
    this.completed = false;
    this.id = id;
  }
  countdown() {}
  markComplete() {}
  saveToStorage() {}
}
