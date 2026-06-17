const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1780505551698-20e10667383c?q=80&w=870&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&auto=format&fit=crop"
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
