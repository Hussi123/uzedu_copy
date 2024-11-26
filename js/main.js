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

// languages dropdown hide and show funcktion
langBtn.addEventListener('click', function () {
  content.style.display = content.style.display === 'block' ? 'none' : 'block';
  // console.log(content);
});

content.addEventListener("click", (e) => {

  content.querySelectorAll("a").forEach(e => e.classList.remove("active"))

  if (e.target.tagName === "A") {
    if (e.target.innerText == "O‘zbekcha"){
      langBtn.innerText="Uzb"
      e.target.classList.add("active")
    }else if (e.target.innerText == "Ўзбекча"){
      langBtn.innerText="Ўзб"
      e.target.classList.add("active")
    }else if(e.target.innerText == "Русский"){
      langBtn.innerText="Pu"
      e.target.classList.add("active")
    }
  }
})



