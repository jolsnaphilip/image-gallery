const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "https://upload.wikimedia.org/wikipedia/commons/0/0f/Munnar_hill_station.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/4/4d/Alappuzha_Backwaters.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/8/83/Thekkady_Kerala.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/57/Vagamon_Meadows.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2d/Athirappilly_Falls.jpg"
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
