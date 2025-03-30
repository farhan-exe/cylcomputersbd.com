document.getElementById('menuToggle').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  });
  
  document.getElementById('closeSidebar').addEventListener('click', () => {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.remove('active');
  });
  
  document.getElementById('searchToggle').addEventListener('click', () => {
    const searchBar = document.getElementById('searchBar');
    searchBar.style.display = searchBar.style.display === 'flex' ? 'none' : 'flex';
  });
  
  function searchResults() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const results = document.getElementById('results');
  
    const presetResults = [
      { name: "Gaming PC", link: "#", img: "images/53k.png" },
      { name: "Keyboard", link: "search.keyboard.html", img: "images/search.png" },
      { name: "Graphics Card", link: "search.graphics_card.html", img: "images/search.png" },
      { name: "AMD Ryzen 5 5600g", link: "#", img: "images/AMD 1.png" },
      { name: "Nvidia GeForce RTX 4060 Super", link: "#", img: "images/Nvidia_Geforce_rtx_4060_super.png" },
      { name: "GIGABYTE A520M K AM4 Micro ATX Motherboard", link: "#", img: "images/Gigabyte_a520.png" },
      { name: "AMD Athlon 3000G Processor with Radeon Graphics", link: "#", img: "images/AMD_athlon_3000g.png" },
      { name: "AMD Ryzen 5 5500 Processor", link: "#", img: "images/AMD_Ryzen_5_5500.png" },
      { name: "AMD Ryzen 5 2400G Desktop Processor with Radeon RX Vega 11 Graphics", link: "#", img: "images/AMD_Ryzen_5_2400g.png" },
      { name: "AMD Ryzen 5 3400G Desktop Processor with Radeon RX Vega 11 Graphics", link: "#", img: "images/AMD_Ryzen_5_3400g.png" },
      { name: "MSI GeForce RTX 3060 VENTUS 2X OC 12GB Graphics Card", link: "#", img: "images/GeForce_rtx_3060_v2x.png" },
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
        resultItem.onclick = () => window.location.href = result.link; // Navigate on click
        results.appendChild(resultItem);
      });
  }
  document.querySelector('.user-icon a').addEventListener('click', () => {
    window.location.href = 'add-account.html';
  });
  

const text = [
    "Welcome to CYL COMPUTERS BD",
    "Your trusted tech partner",
    "Best deals on computers",
    "Visit us today!",
    "Always here for you – 24/7 customer support, anytime, every time."
];

const scrollTextElement = document.querySelector('.scroll-text');
let textIndex = 0;

function updateText() {
    scrollTextElement.textContent = text[textIndex];
    textIndex = (textIndex + 1) % text.length;
}

setInterval(updateText, 5000);

updateText();

const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slides img').length;
const links = [
    "welcome_page.html",
    "",
    "contact.html"
];

let index = 0;

function changeSlide() {
    index = (index + 1) % totalSlides;
    slides.style.transform = `translateX(-${index * 100}%)`;
}

function openLink() {
    if (links[index]) {
        window.open(links[index], '_blank');
    }
}

slides.addEventListener('click', openLink);

setInterval(changeSlide, 5000);

AOS.init();

document.addEventListener("DOMContentLoaded", function() {
  const cookieBanner = document.querySelector(".cookies-card");
  const acceptButton = document.querySelector(".accept");
  const rejectButton = document.querySelector(".reject");
  const exitButton = document.querySelector(".exit-button");

  if (!localStorage.getItem("cookieAccepted") && !localStorage.getItem("cookieRejected")) {
    cookieBanner.style.display = "flex";
  }

  acceptButton.addEventListener("click", function() {
    localStorage.setItem("cookieAccepted", "true");
    cookieBanner.style.display = "none";
  });

  rejectButton.addEventListener("click", function() {
    localStorage.setItem("cookieRejected", "true");
    cookieBanner.style.display = "none";
  });

  exitButton.addEventListener("click", function() {
    cookieBanner.style.display = "none";
  });
});

