
var myfruit0 = {
    name:"Apple",
    description:"A beautifully carved apple with a geometric design..",
    price:"$3.00",
    location:"URL(jbImg/product1.jpg)",
}

 var myfruit1 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product2.jpg)",
}

 var myfruit2 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product3.jpg)",
}

var myfruit3 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product4.jpg)",
}

var myfruit4 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product5.jpg)",
}

var myfruit5 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product6.jpg)",
}

var myfruit6 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product7.jpg)",
}

var myfruit7 = {
    name:"",
    description:"",
    price:"",
    location:"URL(jbImg/product8.jpg)",
}
var fruitArray = [myfruit0, myfruit1, myfruit2, myfruit3, myfruit4, myfruit5, myfruit6, myfruit7]



let htmlString = '';

for (let i = 0; i < fruitArray.length; i++) {
  htmlString += `<div class="card"<p>location: ${fruitArray[i].location}</p><p>Name: ${fruitArray[i].name}</p><p>Decription: ${fruitArray[i].description}</p><p>Price: ${fruitArray[i].price}</p></div>`;
}

document.querySelector('.card-container').innerHTML(htmlString);
