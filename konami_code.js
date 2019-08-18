const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const haduken = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];
let index = 0; 
function onKeyDownHandler(e) {
  const key = e.key;
  if (key === haduken[index]) {
    index++;
    if (index === handuken.length) {
      alert("Hurray!");
      index = 0;
    }
  }
}
}
