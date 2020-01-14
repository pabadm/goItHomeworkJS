"use strict";
import galleryItems from "./gallery-items.js";
// Создание и рендер разметки по массиву данных и предоставленному шаблону.
const galleryTag = document.querySelector(".js-gallery");

galleryItems.map(image => {
  galleryTag.insertAdjacentHTML("beforeend", "<a><img></a>");
  galleryTag.lastElementChild.classList.add(".gallery__link");
  galleryTag.lastElementChild.lastElementChild.classList.add(".gallery__image");
  galleryTag.lastElementChild.setAttribute(
    "href",
    `${galleryItems[galleryItems.indexOf(image)].original}`
  );
  galleryTag.lastElementChild.lastElementChild.setAttribute(
    "src",
    `${galleryItems[galleryItems.indexOf(image)].preview}`
  );
  galleryTag.lastElementChild.lastElementChild.setAttribute(
    "data-source",
    `${galleryItems[galleryItems.indexOf(image)].original}`
  );
  galleryTag.lastElementChild.lastElementChild.setAttribute(
    "alt",
    `${galleryItems[galleryItems.indexOf(image)].description}`
  );
});

//Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.




const imageClick = (newSrc) =>{
  newSrc.preventDefault();
  const target = newSrc.target;
  console.log("event target: ", target.dataset.source);
  newSrc.target.src = newSrc.target.dataset.source;
};

galleryTag.addEventListener("click", imageClick);


