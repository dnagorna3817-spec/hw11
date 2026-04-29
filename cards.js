const cards = [

{
id:1,
title:"Paris",
description:"Beautiful city with famous architecture.",
imageUrl:"images/paris.JPG",
link:"https://en.wikipedia.org/wiki/Paris"
},

{
id:2,
title:"Rome",
description:"Historic city full of ancient landmarks.",
imageUrl:"images/rome.JPG",
link:"https://en.wikipedia.org/wiki/Rome"
},

{
id:3,
title:"Tokyo",
description:"Modern city with amazing culture.",
imageUrl:"images/tokyo.JPG",
link:"https://en.wikipedia.org/wiki/Tokyo"
}

];

console.log(cards);


// Dynamic cards
const container = document.getElementById("card-container");

cards.forEach(card => {

const cardDiv = document.createElement("div");
cardDiv.classList.add("card");

const img = document.createElement("img");
img.src = card.imageUrl;

const title = document.createElement("h3");
title.textContent = card.title;

const desc = document.createElement("p");
desc.textContent = card.description;

const button = document.createElement("button");
button.textContent = "Learn More";

button.addEventListener("click", () => {
window.open(card.link);
});

cardDiv.addEventListener("click", () => {
cardDiv.classList.toggle("highlight");
});

cardDiv.append(img,title,desc,button);

container.appendChild(cardDiv);

});


// Reduce
const totalCharacters = cards.reduce(
(sum,card) => sum + card.title.length,
0
);

console.log(totalCharacters);


// Filter
const filteredCards = cards.filter(
card => card.description.includes("city")
);

console.log(filteredCards);


// Map
const titles = cards.map(card => card.title);

console.log(titles);