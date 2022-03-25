const list = document.querySelector("h1");

function search() {
  list.style.display = 'hidden';
}

list.addEventListener("click", search);