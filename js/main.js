$(document).ready(function(){

    
$("#menu").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});

$("#menu2").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
        
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1000);
});



});


const items = document.querySelectorAll(".item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        item.classList.toggle("open");
    });
});

const items2 = document.querySelectorAll(".item2");

items2.forEach((item2) => {
    item2.addEventListener("click", () => {
        item2.classList.toggle("open");
    });
});

const burger = document.querySelector('.burger');
const navbar = document.querySelector('.mt-mobile');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    body.classList.toggle('body-open');
    burger.classList.toggle('burger-open');
    
});

   // // MODAL

const modal = document.querySelector(".modal");
const modalButton = document.querySelector(".modalButton");
const modalCloseButton = document.querySelector(".modalCloseButton");
const backdrop = document.querySelector('.backdrop');

const toggleModal = (id) => {
  if (id) {
    const modal = document.querySelector(id);
  }
  modal.classList.toggle("modalActive");
  backdrop.classList.toggle('backdropActive');
};

modalCloseButton.onclick = () => toggleModal();
backdrop.onclick = () => toggleModal();




  // // MODAL2

const modal2 = document.querySelector(".modal2");
const modalButton2 = document.querySelector(".modalButton2");
const modalCloseButton2 = document.querySelector(".modalCloseButton2");
const backdrop2 = document.querySelector('.backdrop2');

const toggleModal2 = (id) => {
  if (id) {
    const modal2 = document.querySelector(id);
  }
  modal2.classList.toggle("modalActive2");
  backdrop2.classList.toggle('backdropActive2');
};

modalCloseButton2.onclick = () => toggleModal2();
backdrop2.onclick = () => toggleModal2();


  // // MODAL3

const modal3 = document.querySelector(".modal3");
const modalButton3 = document.querySelector(".modalButton3");
const modalCloseButton3 = document.querySelector(".modalCloseButton3");
const backdrop3 = document.querySelector('.backdrop3');

const toggleModal3 = (id) => {
  if (id) {
    const modal3 = document.querySelector(id);
  }
  modal3.classList.toggle("modalActive3");
  backdrop3.classList.toggle('backdropActive3');
};

modalCloseButton3.onclick = () => toggleModal3();
backdrop3.onclick = () => toggleModal3();