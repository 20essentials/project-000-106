const $input = document.querySelector("input");
const $parrafo = document.querySelector("p");

$input.addEventListener("input", (e) => {
  let regExp = new RegExp(`(${e.target.value})`, "gi");
  $parrafo.innerHTML = $parrafo.textContent.replace(regExp, `<mark>$1</mark>`);
});
