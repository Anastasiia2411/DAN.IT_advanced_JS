"use strict"

const books = [
    {
        author: "Люсі Фолі",
        name: "Список запрошених",
        price: 70
    },
    {
        author: "Сюзанна Кларк",
        name: "Джонатан Стрейндж і м-р Норрелл",
    },
    {
        name: "Дизайн. Книга для недизайнерів.",
        price: 70
    },
    {
        author: "Алан Мур",
        name: "Неономікон",
        price: 70
    },
    {
        author: "Террі Пратчетт",
        name: "Рухомі картинки",
        price: 40
    },
    {
        author: "Анґус Гайленд",
        name: "Коти в мистецтві",
    }
];


let ul = document.createElement("ul")
for (let book of books) {
    try {
        if (!book.hasOwnProperty("price")) {
            throw new Error(`price in book ${book.name}`);
        }
        if (!book.hasOwnProperty("author")) {
            throw new Error(`author in book ${book.name}`);
        }
        if (!book.hasOwnProperty("name")) {
            throw new Error("name");
        }
    let li = document.createElement("li")
    ul.append(li)
    for (let el in book) {
        let text = `${el}: ${book[el]}, `
        li.append(text)
    }
    document.body.append(ul)
}catch (error) {
        console.error(`Error! missing field ${error.message} `);
    }}

