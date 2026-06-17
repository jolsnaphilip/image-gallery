const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=500&auto=format&fit=crop", // city skyline
  "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&auto=format&fit=crop", // night city
  "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=500&auto=format&fit=crop", // downtown
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&auto=format&fit=crop", // street
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=500&auto=format&fit=crop"  // aerial city
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
