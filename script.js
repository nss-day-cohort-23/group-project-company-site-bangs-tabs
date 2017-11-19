
var myfruit0 = {
    name:"Geometric Apple",
    description:"A beautifully carved apple with a geometric design.",
    price:"$3.00",
    location: "jbImg/product1.png",
}

 var myfruit1 = {
    name:"Floral Watermelon",
    description:"The perfect gift for that special someone.",
    price:"$12.99",
    location:"jbImg/product2.jpg",
}

 var myfruit2 = {
    name:"Portrait Watermelon",
    description:"The most unique way to memorialize your loved ones.",
    price:"$25.99",
    location:"jbImg/product3.jpg",
}

var myfruit3 = {
    name:"Apple of Love",
    description:"Also the perfect gift for that special someone.",
    price:"$3.50",
    location:"jbImg/product4.jpg",
}

var myfruit4 = {
    name:"Watermelon Bouquet",
    description:"Yet another perfect gift for that special someone.",
    price:"$34.99",
    location:"jbImg/product5.jpg",
}

var myfruit5 = {
    name:"Floral Cantaloupe",
    description:"Nothing more, nothing less.",
    price:"$6.75",
    location:"jbImg/product6.jpg",
}

var myfruit6 = {
    name:"Birthday Bundle",
    description:"Bow before the magnificence of the Birthday Bundle.",
    price:"92.35",
    location:"jbImg/product7.jpg",
}

var myfruit7 = {
    name:"Sliced Apple",
    description:"A sliced apple.",
    price:"$48.80",
    location:"jbImg/product8.jpg",
}
var fruitArray = [myfruit0, myfruit1, myfruit2, myfruit3, myfruit4, myfruit5, myfruit6, myfruit7]



let htmlString = '';

for (let i = 0; i < fruitArray.length; i++) {
  htmlString += `<div class="card"<p><img src=${fruitArray[i].location}></p>
  <p>Name: ${fruitArray[i].name}</p>
  <p>Decription: ${fruitArray[i].description}</p>
  <p>Price: ${fruitArray[i].price}</p></div>`;
}
var card = document.querySelector('.card-container')
card.innerHTML = htmlString;

