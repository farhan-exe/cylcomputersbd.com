// Toggle Sidebar
document.getElementById('menuToggle').addEventListener('click', () => {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
});

document.getElementById('closeSidebar').addEventListener('click', () => {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.remove('active');
});

// Toggle Search Bar
document.getElementById('searchToggle').addEventListener('click', () => {
  const searchBar = document.getElementById('searchBar');
  searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
});

// Search Results
function searchResults() {
  const query = document.getElementById('searchInput').value.toLowerCase();
  const results = document.getElementById('results');

  const presetResults = [
    { name: "Gaming PC", link: "#", img: "images/53k.png" },
    { name: "Keyboard", link: "search.keyboard.html", img: "images/search.png" },
    { name: "Graphics Card", link: "search.graphics_card.html", img: "images/search.png" },
  ];

  results.innerHTML = '';

  presetResults
    .filter(item => item.name.toLowerCase().includes(query))
    .forEach(result => {
      const resultItem = document.createElement('div');
      resultItem.className = 'result-item';
      resultItem.innerHTML = `
        <img src="${result.img}" alt="${result.name}">
        <p>${result.name}</p>
      `;
      resultItem.onclick = () => window.location.href = result.link;
      results.appendChild(resultItem);
    });
}

function scrollToPosition(position) {
  window.scrollTo({
    top: position,
    behavior: "smooth"
  });
}

const scrollText = document.getElementById("scrollText");
let position = window.innerWidth / 2;

function scroll() {
    position--;
    if (position < -scrollText.offsetWidth) {
        position = window.innerWidth;
    }

    if (position < window.innerWidth / 2 && position > -scrollText.offsetWidth) {
        scrollText.style.transform = `translateX(${position}px)`;
    } else if (position < -scrollText.offsetWidth) {
        position = window.innerWidth;
    }

    requestAnimationFrame(scroll);
}

scroll();

const contextMenu = document.getElementById('contextMenu');
const homeOption = document.getElementById('homeOption');
const developerOption = document.getElementById('developerOption');

document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.display = 'block';
});

document.addEventListener('click', () => {
    contextMenu.style.display = 'none';
});

homeOption.addEventListener('click', () => {
    window.location.href = 'index.html';
});
