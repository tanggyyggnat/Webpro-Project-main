function fetchHtml(path) {
  let content = document.getElementById("content");
  fetch(`./${path}/index.html`)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      content.innerHTML = html;
    });
}

function toggleMenu(page) {
  document
    .querySelectorAll("li")
    .forEach((item) => item.classList.remove("bg-gray-800"));
  document.getElementById(`${page}`).classList.add("bg-gray-800");
  fetchHtml(page);
}

toggleMenu("getting-start");
fetchHtml("getting-start");
