//Nav Bar
const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => [
  btn.classList.toggle("open"),
  nav.classList.toggle("flex"),
  nav.classList.toggle("hidden"),
]);
//For The Top Section
var swiper1 = new Swiper(".mySwiper1", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
});

// For The Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("unhide");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hide");
hiddenElements.forEach((el) => observer.observe(el));

// For the Automatic typing happening on the Page.
var typed = new Typed(".auto-type", {
  strings: ["Secure,", "Strategise And,", "Maximise,"],
  smartBackspace: true,
  typeSpeed: 120,
  backSpeed: 140,
  loop: true,
  showCursor: true,
  cursorChar: "|",
  autoInsertCss: true,
});

//Testimonial Section
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});

calculate = () => {
  const basic = document.getElementById("basic");
  const standard = document.getElementById("standard");
  const essential = document.getElementById("essential");
  const premium = document.getElementById("premium");
  const investingAmount = document.getElementById("investingAmount");
  const display = document.getElementById("display");
  if (basic.checked === true) {
    if (investingAmount.value < 250) {
      display.innerText = "The Minimum You Can Invest is £250.";
    }
    if (investingAmount.value > 5000) {
      display.innerText = "The Maximum You Can Invest is £5,000.";
    }
    if (investingAmount.value >= 250 && investingAmount.value <= 5000) {
      display.innerText =
        "Contact The Admin For More Information About This Package.";
    }
  }
  if (standard.checked === true) {
    if (investingAmount.value < 100) {
      display.innerText = "The Minimum You Can Invest is £100.";
    }
    if (investingAmount.value > 10000) {
      display.innerText = "The Maximum You Can Invest is £10,000.";
    }
    if (investingAmount.value >= 100 && investingAmount.value <= 10000) {
      const gain = 0.12 * investingAmount.value;
      display.innerText = "You Will Make £" + gain + " After 24 Hours.";
    }
  }
  if (essential.checked === true) {
    if (investingAmount.value < 1000) {
      display.innerText = "The Minimum You Can Invest is £1,000.";
    }
    if (investingAmount.value > 50000) {
      display.innerText = "The Maximum You Can Invest is £50,000.";
    }
    if (investingAmount.value >= 1000 && investingAmount.value <= 50000) {
      const gain = 0.25 * investingAmount.value;
      display.innerText = "You Will Make £" + gain + " After 12 Days.";
    }
  }
  if (premium.checked === true) {
    if (investingAmount.value < 10000) {
      display.innerText = "The Minimum You Can Invest is £10,000.";
    }
    if (investingAmount.value > 500000) {
      display.innerText = "The Maximum You Can Invest is £500,000.";
    }
    if (investingAmount.value >= 10000 && investingAmount.value <= 500000) {
      const gain = 0.4 * investingAmount.value;
      display.innerText = "You Will Make £" + gain + " After 15 Days.";
    }
  }
};
