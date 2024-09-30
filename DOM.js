let olItem = document.createElement("li");

olItem.className = "a new another";
olItem.id = "new_element";

olItem.setAttribute("title", "A title to new Element");

olItem.appendChild(document.createTextNode("javaScript"));

document.querySelector("ol").appendChild(olItem);

console.log(olItem);

let ulItem = document.createElement("li");

let link = document.createElement("a");

link.appendChild(document.createTextNode("Instagram"));

link.setAttribute("href", "https://www.instagram.com");

ulItem.appendChild(link);

document.querySelector("ul").appendChild(ulItem);

console.log(ulItem);
// console.log(link);
