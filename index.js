const blueteam = document.getElementById("blueteam");
const redteam = document.getElementById("redteam");
const button = document.getElementById("submit-btn");
const pNames = document.getElementById("counter");

let names = [];

function addPlayer() {
  const input = document.getElementById("team-input");
  if (names.length < 10 && input.value !== "") {
    let name = input.value;
    input.value = "";
    console.log(names);

    for (let i = 0; i < 10; i++) {
      names.push(name);
      console.log(names);
      pNames.innerHTML = `Players ${names.length}: ${names.join(", ")} `;
      return false;
    }
  }
}

// Embaralhe os nomes
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // Enquanto ainda houver elementos para embaralhar
  while (0 !== currentIndex) {
    // Seleciona um elemento restante aleatoriamente
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // E troca pelo elemento atual
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function randomize() {
  if (names.length === 10) {
    // Embaralhe a lista de nomes
    shuffle(names);

    // Divida a lista de nomes em dois times
    blueteam.innerText = "Time Azul:" + names.slice(0, 5);
    redteam.innerText = "Time Vermelho:" + names.slice(5, 10);
  }
}
