console.log("JavaScript loaded and running!");

const newsData = [
  { dateTime: "Mon Dec 16 2019 0:30", message: "We have confirmed that Violation #74006 may be triggered by non-cheat software." },
  { dateTime: "Wed Jun 24 2015 14:15", message: "Version 2.352 of the PB Client for BF3 has been released..." },
  { dateTime: "Wed Jun 10 2015 11:00", message: "We have confirmed that long standing Violation #51048..." },
  { dateTime: "Tue Apr 14 2015 14:00", message: "We have confirmed that Violation #79623 may be triggered..." },
  { dateTime: "Tue Apr 14 2015 14:00", message: "We have confirmed that Violation #79623 may be triggered..." },
  { dateTime: "Tue Apr 14 2015 0:00", message: "" }
];

const newsList = document.getElementById("newsList");
if (newsList) {
  newsData.forEach(item => {
    const li = document.createElement("li");
    li.className = "news-item";
    li.innerHTML = `<strong>${item.dateTime}</strong><br>${item.message}`;
    newsList.appendChild(li);
  });
}

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
const totalSlides = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}

if (totalSlides > 0) {
  setInterval(nextSlide, 3000);
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thank You, Your PunkBuster License Inquiry has been submitted!");
  });
}

