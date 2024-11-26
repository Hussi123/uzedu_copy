const langBtn =  document.querySelector('.dropdown-btn')

langBtn.addEventListener('click', function () {
  const content = document.querySelector('.dropdown-content');
  content.style.display = content.style.display === 'block' ? 'none' : 'block';

  // .forEach(element => {
  //   if(element.textContent == "O‘zbekcha") {
  //     langBtn.textContent=="Uzb"
  //   }
  //   else if (element.textContent == "Ўзбекча"){
  //     langBtn.textContent=="Ўзб"
  //   }
  //   else if (element.textContent == "Русский"){
  //     langBtn.textContent=="Pu"
  //   }
  // });
  
});

const langBarBtn = document.querySelector("button")

console.log(langBarBtn.style);
