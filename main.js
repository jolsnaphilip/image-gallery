const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "https://picsum.photos/id/10/800/500",
  "https://picsum.photos/id/28/800/500",
  "https://picsum.photos/id/29/800/500",
  "https://picsum.photos/id/42/800/500",
  "https://picsum.photos/id/58/800/500",
  "https://picsum.photos/id/1043/800/500"
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
