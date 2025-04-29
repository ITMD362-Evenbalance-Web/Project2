document.addEventListener("DOMContentLoaded", function () {
  const newsList = document.getElementById("newsList");
  if (newsList) {
    newsData.forEach((item) => {
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
});



