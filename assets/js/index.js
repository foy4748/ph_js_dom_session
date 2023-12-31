// Always remember

// C - Create || If data doesn't exist
// R - Read   || Existing Data
// U - Update || Data that can be read
// D - Delete || Delete data that can be read

// Grabbing Elements
const cards = document.querySelectorAll(".card");

//console.log(cards[0].childNodes[3].childNodes[5].childNodes[1]);

cards.forEach((singleCard, idx) => {
  //console.log(singleCard.childNodes[3].childNodes[5].childNodes[1]);
  //console.log(singleCard.childNodes[3].childNodes[3].textContent.split(' ')[1])
  //console.log(singleCard.childNodes[3].childNodes[3].textContent.split(' ')[1])
  //console.log(article.childNodes[1].innerText);

  const article = singleCard.childNodes[3];
  const addToCartButton = article.childNodes[5].childNodes[1];
  const price = article.childNodes[3].textContent.split(' ')[1]
  const productName = article.childNodes[1].innerText
  
  //const price = addToCartButton.dataset.price;

  addToCartButton.addEventListener('click', () => {
    console.log(`Clicked ${idx} || Price ${price} || Product Name: ${productName}`)
  })

})

/*
const images = [
  {
    img: "https://m.media-amazon.com/images/I/71ctRE34RuL._AC_UY218_.jpg",
    price: "361.55",
  },
  {
    img: "https://m.media-amazon.com/images/I/71v0BQo8T8L._AC_UY218_.jpg",
    price: "241.83",
  },
  {
    img: "https://m.media-amazon.com/images/I/711r+iB8DZL._AC_UY218_.jpg",
    price: "174.94",
  },
  {
    img: "https://m.media-amazon.com/images/I/71jTFnk7XiL._AC_UY218_.jpg",
    price: "307.71",
  },
  {
    img: "https://m.media-amazon.com/images/I/81vnNsRDo6L._AC_UY218_.jpg",
    price: "488.28",
  },
  {
    img: "https://m.media-amazon.com/images/I/71ctRE34RuL._AC_UL320_.jpg",
    price: "455.51",
  },
];
*/
