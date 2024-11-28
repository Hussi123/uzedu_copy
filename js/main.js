// search iconkasiga click bo'lganda search inputni ochish va close iconkasiga click bo'lganda input oynasini tozalash
const searchBtnId = document.querySelector("#searchBtnId")
const formId = document.querySelector("#formId")
const idFormCloseBtn = document.querySelector("#idFormCloseBtn")
searchBtnId.addEventListener("click", () => {
  formId.classList.add("active")
});
idFormCloseBtn.addEventListener("click", () => {
  formId.classList.remove("active")
})


// languades choose Uzb/Ўзб/Ru div
const langBtn = document.querySelector('.dropdown-btn')
const content = document.querySelector('.dropdown-content');
// content.style.display === 'none'
// languages dropdown hide and show funcktion
langBtn.addEventListener('click', function () {
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  // console.log(content);
});

content.addEventListener("click", (e) => {

  content.querySelectorAll("a").forEach(e => e.classList.remove("active"))

  if (e.target.tagName === "A") {
    if (e.target.innerText == "O‘zbekcha") {
      langBtn.innerText = "Uzb"
      e.target.classList.add("active")
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    } else if (e.target.innerText == "Ўзбекча") {
      langBtn.innerText = "Ўзб"
      e.target.classList.add("active")
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    } else if (e.target.innerText == "Русский") {
      langBtn.innerText = "Pu"
      e.target.classList.add("active")
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    }
  }
})




$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    dots:false,
    autoplay:true,
    autoplayTimeout:1500,
    loop: true,                // Karuselni aylantirishni davom ettiradi
    margin: 10,                // Elementlar orasidagi masofa
    nav: true,                 // "Oldinga" va "Orqaga" tugmalari
    responsive: {              // Har xil ekran o'lchamlariga moslashuvchanlik
      0: {
        items: 1               // Kichik ekranlarda 1 ta element
      },
      600: {
        items: 2               // O'rtacha ekranlarda 2 ta element
      },
      1000: {
        items: 3               // Katta ekranlarda 3 ta element
      }
    }
  });
});



$('.miniBanners').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  items: 1,
  autoplay: true
})


$('.usefulLinks').owlCarousel({
  loop: true,
  items: 6,
  dots: false,
  nav: true,
  autoplay: true,
  navText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
  responsive: {
    0: { items: 1 },
    576: { items: 2 },
    768: { items: 3 },
    992: { items: 5 },
    1600: { items: 6 }
  }
});





