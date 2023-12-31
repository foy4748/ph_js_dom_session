// Always remember

// C - Create || If data doesn't exist
// R - Read   || Existing Data
// U - Update || Data that can be read
// D - Delete || Delete data that can be read

const globalState = {};
/*
  {
    "product Name 1": {
      price: Number,
      quantity: Number
    },
    "product Name 2": {
      price: Number,
      quantity: Number
    },
  }
*/


// Grabbing Elements
const cards = document.querySelectorAll(".card");

//console.log(cards[0].childNodes[3].childNodes[5].childNodes[1]);

// Adding EventListeners to card
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

  const productImg = singleCard.childNodes[1].childNodes[1].src;

  addToCartButton.addEventListener('click', () => {
    //console.log(`Clicked ${idx} || Price ${price} || Product Name: ${productName}`)

    // Updating Global State
    if(productName in globalState){
      globalState[productName]['quantity']++;
    } else{
      globalState[productName] = {};
      globalState[productName]['price'] = price;
      globalState[productName]['quantity'] = 1;
    }
    console.log(globalState)
  })

})

function createCartItem(img_url, product_title, product_price, product_quantity) {
  const singleCartItemTemplate = `
            <section class="cart-item">
              <section class="flex flex-between pe-1">
                <figure class="cart-figure">
                  <img class="cart-img" src="${img_url}" alt="${product_title}">
                  <article>
                    <h3 class="pb-0 mb-0">${product_title}</h3>
                  </article>
                </figure>
                <article class="flex w-50 flex-between">
                  <div>
                    <p>Unit Price</p>
                    <p><strong>${product_price}</strong></p>
                  </div>
                  <div>
                    <p>Quantity</p>
                    <p><strong>${product_quantity}</strong></p>
                  </div>
                </article>
              </section>
              <article class="text-center cart-total-btn">
                <p class="p-0 m-0"><strong>Total: ${(product_price*product_quantity).toFixed(2)} BDT</strong></p>
              </article>
            </section>
  `
  return singleCartItemTemplate;
}

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
