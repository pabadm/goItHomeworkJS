'use strict';

class Storage {
    constructor(items){
        this.items = [...items];
        this.getItems = function(){
            console.table(items);
        }
        this.addItem = function(item){
            return this.items.push(item);
        }
        this.removeItem = function(item){
            return this.items.splice(this.items.indexOf(item), 1);
        }
    }
} 
const storage = new Storage(
    ['Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',]);

    const items = storage.getItems();
    console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]
    
    storage.addItem('Дроид');
    console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ] // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]
    
    storage.removeItem('Пролонгер');
    console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]