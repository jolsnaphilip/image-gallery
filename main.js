const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "images/munnar.jpg",
  "images/allepey.jpg",
  "images/athirapally.jpg",
  "images/vagamon.jpg",
  "images/silent-valley.jpg",
  "images/wayanad.jpg"
];

photos.forEach((photo) => {
  const image = document.createElement("img");

  image.src = photo;
  image.classList.add("thumbnail");

  image.onclick = function () {
    mainImage.src = photo;
  };

  gallery.appendChild(image);
});

let darkMode = false;

toggleBtn.addEventListener("click", () => {
  darkMode = !darkMode;

  if (darkMode) {
    shade.style.background = "rgba(0,0,0,0.6)";
    toggleBtn.textContent = "Light Mode";
  } else {
    shade.style.background = "transparent";
    toggleBtn.textContent = "Dark Mode";
  }
});
