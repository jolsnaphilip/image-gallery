const mainImage = document.querySelector(".displayed-img");
const gallery = document.querySelector(".thumb-bar");
const toggleBtn = document.querySelector(".dark");
const shade = document.querySelector(".overlay");

const photos = [
  "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=500&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=500&auto=format&fit=crop"
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
