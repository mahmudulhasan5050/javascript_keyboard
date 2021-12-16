var birds = ["Dove", "Peacock", "Duck", "Sparrow", "Crane", "Parrot", "Swan", "Hen", "Vulture", "Crow"];
var currentIndex = 0;
var currentBird = birds[currentIndex];

const printing = (currentBird) => {
  document.getElementById("print").innerHTML = currentBird;
}

const firstBird = () => {
  printing(currentBird.toUpperCase())
}

const getKeyValue = (e) => {
  currentBird = currentBird.toUpperCase().replaceAll((e.key).toUpperCase(), "");

  if (currentBird.length === 0) {
    currentIndex++;
    if (currentIndex >= birds.length) {
      currentIndex = 0;
      firstBird()
    }
    currentBird = birds[currentIndex].toUpperCase();
  }

  printing(currentBird)
}
document.addEventListener("keyup", getKeyValue);







