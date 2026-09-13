const imageData = [
  { name: "sun-rise", title: "Golden Horizon", keywords: "sunrise morning golden glow calm" },
  { name: "sun-rise", title: "Soft Morning Air", keywords: "sunrise morning mist peaceful glow" },
  { name: "sun-rise", title: "Orange Bloom", keywords: "sunrise orange warm floral" },
  { name: "sun-rise", title: "First Light", keywords: "sunrise first light meadow quiet" },
  { name: "sun-rise", title: "Dawn Drift", keywords: "sunrise dawn quiet lake water" },
  { name: "sun-rise", title: "Daybreak Path", keywords: "sunrise path light valley road" },
  { name: "sun-rise", title: "Hilltop Glow", keywords: "sunrise hilltop glow landscape morning" },
  { name: "sun-rise", title: "Winter Dawn", keywords: "sunrise winter dawn cold clear sky" },
  { name: "sun-rise", title: "Valley Mist", keywords: "sunrise mist valley forest tranquil" },
  { name: "sun-rise", title: "Pearl Morning", keywords: "sunrise pearl morning sky reflection" },
  { name: "sun-rise", title: "River Light", keywords: "sunrise river light water reflection" },
  { name: "sun-rise", title: "Sunrise Trail", keywords: "sunrise trail path woods morning" },
  { name: "sun-rise", title: "Distant Flame", keywords: "sunrise flame distant horizon warm" },
  { name: "sun-rise", title: "Blazing Calm", keywords: "sunrise calm blaze sky clear" },
  { name: "sun-rise", title: "Open Sky", keywords: "sunrise open sky horizon nature" },

  { name: "sun-set", title: "Amber Waves", keywords: "sunset amber waves evening glow" },
  { name: "sun-set", title: "Evening Fire", keywords: "sunset evening fire sky warm" },
  { name: "sun-set", title: "Velvet Sky", keywords: "sunset sky velvet color evening" },
  { name: "sun-set", title: "Last Light", keywords: "sunset last light evening calm shore" },
  { name: "sun-set", title: "Golden Return", keywords: "sunset golden return afterglow sky" },
  { name: "sun-set", title: "Sunset Drift", keywords: "sunset drift lake evening river" },
  { name: "sun-set", title: "Canyon Glow", keywords: "sunset canyon glow desert warm evening" },
  { name: "sun-set", title: "Sea Gold", keywords: "sunset sea gold ocean horizon warm" },
  { name: "sun-set", title: "Coastal Ember", keywords: "sunset coast ember sea horizon" },
  { name: "sun-set", title: "Desert Flame", keywords: "sunset desert flame sand dune" },
  { name: "sun-set", title: "Silk Horizon", keywords: "sunset silk horizon cloud orange" },
  { name: "sun-set", title: "Twilight Lake", keywords: "sunset twilight lake evening blue" },
  { name: "sun-set", title: "Golden Dunes", keywords: "sunset golden dunes desert evening" },
  { name: "sun-set", title: "Rose Horizon", keywords: "sunset rose horizon glow cloud" },
  { name: "sun-set", title: "Quiet Ember", keywords: "sunset quiet ember sky peaceful" },

  { name: "moon", title: "Silver Silence", keywords: "moon silver silence night calm" },
  { name: "moon", title: "Quiet Eclipse", keywords: "moon eclipse night quiet darkness" },
  { name: "moon", title: "Moonlit Tide", keywords: "moon tide night ocean blue" },
  { name: "moon", title: "Night Bloom", keywords: "moon bloom night dreamy garden" },
  { name: "moon", title: "Lunar Echo", keywords: "moon lunar echo night glow" },
  { name: "moon", title: "Night Lantern", keywords: "moon lantern night glow horizon" },
  { name: "moon", title: "Silver Lake", keywords: "moon lake silver reflections calm night" },
  { name: "moon", title: "Moonrise Ridge", keywords: "moon moonrise ridge hills night" },
  { name: "moon", title: "Nocturne Bay", keywords: "moon bay night water reflections" },
  { name: "moon", title: "Lunar Drift", keywords: "moon drift night sky misty" },
  { name: "moon", title: "Cloud Moon", keywords: "moon cloud night silhouette dreamy" },
  { name: "moon", title: "Night Harbor", keywords: "moon harbor bay sea night" },
  { name: "moon", title: "Shimmer Tide", keywords: "moon shimmer tide night ocean" },
  { name: "moon", title: "Midnight Field", keywords: "moon midnight field night grass" },

  { name: "star", title: "Starlit Field", keywords: "stars night sky field sparkle" },
  { name: "star", title: "Void Whisper", keywords: "stars dark sky whisper cosmic" },
  { name: "star", title: "Night Canvas", keywords: "stars canvas night sky blue" },
  { name: "star", title: "Celestial Bloom", keywords: "stars celestial bloom night sparkle" },
  { name: "star", title: "Astral Drift", keywords: "stars night sky drift cosmic galaxy" },
  { name: "star", title: "Cosmic Calm", keywords: "stars cosmic calm night sky glow deep" },
  { name: "star", title: "Nebula Glow", keywords: "stars nebula glow galaxy deep space" },
  { name: "star", title: "Night Fold", keywords: "stars fold night sky astronomy" },
  { name: "star", title: "Aurora Veil", keywords: "stars aurora veil night sky color" },
  { name: "star", title: "Polar Night", keywords: "stars polar night sky cold glow" },
  { name: "star", title: "Moonlit Stars", keywords: "stars moonlit night sky sparkle" },
  { name: "star", title: "Silver Constellation", keywords: "stars silver constellation night sky" },
  { name: "star", title: "Midnight Bloom", keywords: "stars midnight bloom dark sky" },
  { name: "star", title: "Dreaming Sky", keywords: "stars dreaming sky night sparkle" },
  { name: "star", title: "Deep Horizon", keywords: "stars deep horizon night sky glow" },
];

const imageUrls = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80"
];

const filterButtons = document.querySelectorAll(".filter-btn");
const galleryContainer = document.getElementById("gall-img");
const searchInput = document.getElementById("search-input");
const resultCount = document.getElementById("result-count");
const resetButton = document.getElementById("reset-button");
const themeToggle = document.getElementById("theme-toggle");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxClose = document.getElementById("lightbox-close");

const state = { filter: "all", query: "" };

function createGalleryCard(item, index) {
  const article = document.createElement("article");
  article.className = "gallery-item";
  article.dataset.name = item.name;
  article.dataset.title = item.title;
  article.dataset.keywords = item.keywords;

  article.innerHTML = `
    <div class="image-wrap">
      <img src="${imageUrls[index % imageUrls.length]}" alt="${item.title}" />
      <button class="like-btn" type="button" aria-label="Save photo">♡</button>
    </div>
    <div class="photo-info">
      <span class="tag">${item.name === "sun-rise" ? "Sunrise" : item.name === "sun-set" ? "Sunset" : item.name === "moon" ? "Moon" : "Stars"}</span>
      <h2>${item.title}</h2>
    </div>
  `;

  article.addEventListener("click", (event) => {
    if (event.target.closest(".like-btn")) return;
    openLightbox(article);
  });

  article.querySelector(".like-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    const isLiked = article.querySelector(".like-btn").classList.toggle("liked");
    article.querySelector(".like-btn").textContent = isLiked ? "♥" : "♡";
    article.querySelector(".like-btn").setAttribute("aria-label", isLiked ? "Remove saved photo" : "Save photo");
  });

  return article;
}

function buildGallery() {
  galleryContainer.innerHTML = "";

  imageData.forEach((item, index) => {
    galleryContainer.appendChild(createGalleryCard(item, index));
  });

  updateGallery();
}

function updateGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");
  let visibleCount = 0;

  galleryItems.forEach((item) => {
    const matchesFilter = state.filter === "all" || item.dataset.name === state.filter;
    const searchText = `${item.dataset.title} ${item.dataset.keywords}`.toLowerCase();
    const matchesSearch = searchText.includes(state.query);
    const shouldShow = matchesFilter && matchesSearch;

    item.classList.toggle("hidden", !shouldShow);
    if (shouldShow) visibleCount += 1;
  });

  resultCount.textContent = `${visibleCount} ${visibleCount === 1 ? "image" : "images"}`;
}

function setActiveFilter(button) {
  filterButtons.forEach((btn) => btn.classList.toggle("active", btn === button));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.filter = button.dataset.name;
    setActiveFilter(button);
    updateGallery();
  });
});

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  updateGallery();
});

resetButton.addEventListener("click", () => {
  state.filter = "all";
  state.query = "";
  searchInput.value = "";
  setActiveFilter(document.querySelector(".filter-btn[data-name='all']"));
  updateGallery();
});

function openLightbox(card) {
  const image = card.querySelector("img");
  const title = card.dataset.title;
  const category = card.dataset.name;

  lightboxImage.src = image.src;
  lightboxImage.alt = image.alt;
  lightboxTitle.textContent = title;
  lightboxCategory.textContent = category.replace("-", " ");
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("no-scroll");
}

function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("no-scroll");
}

lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox.classList.contains("open")) {
    closeLightbox();
  }
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");
  const isLight = document.body.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "Dark mode" : "Night mode";
});

document.getElementById("year").textContent = new Date().getFullYear();
buildGallery();
