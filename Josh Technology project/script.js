let currentIndex = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

let interval = setInterval(nextSlide, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    clearInterval(interval);
    currentIndex = i;
    showSlide(currentIndex);
    interval = setInterval(nextSlide, 5000);
  });
});

showSlide(currentIndex);
  const video = document.getElementById("myVideo");
    const playIcon = document.getElementById("playIcon");


    playIcon.classList.remove('hidden');

    video.addEventListener("click", () => {
      if (video.paused) {
        video.play();
        playIcon.classList.add("hidden");
      } else {
        video.pause();
        playIcon.classList.remove("hidden");
      }
    });

 
    video.addEventListener("ended", () => {
      playIcon.classList.remove("hidden");
    });

