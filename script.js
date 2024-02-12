const header = document.querySelector("header");
let slideIndex = 1;

window.onscroll = () => {
  if (window.pageYOffset > 50) {
    header.style.opacity = "0.7";
  } else {
    header.style.opacity = "1";
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    const answer = question.nextElementSibling;
    answer.style.display = "none";

    question.addEventListener("click", () => {
      answer.style.display = answer.style.display === "none" ? "block" : "none";
    });
  });
});

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slide-Item");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (let dot of dots) {
    dot.classList.remove("active");
  }

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].classList.add("active");
}

setInterval(() => {
  plusSlides(1);
}, 2500);

function openUrl(url) {
  window.open(url, '_blank');
}

document.getElementById('fb-Img').addEventListener('click', () => {
  openUrl('https://www.facebook.com/tbcbank/');
});

document.getElementById('yt-Img').addEventListener('click', () => {
  openUrl('https://www.youtube.com/channel/UCGk9R2LV2ywOL80r8Xc6xtQ');
});

const faqLink = document.getElementById('faqLink');

faqLink.addEventListener('click', () => {
  window.location.href = 'https://www.tbcacademy.ge/usaid-faq';
});

document.getElementById('burger-menu').addEventListener('click', function() {
  document.querySelector('nav').classList.toggle('show');
});