'use strict';

const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

const countItems = arr => console.log( `в списке ${arr.length} категории`);

countItems(items);

const viewCategory = (index) => {
    console.log(`категория:${items[index-1].firstElementChild.textContent}
    кол-во элементов: ${items[index-1].firstElementChild.nextElementSibling.children.length}`);
}
viewCategory(2);