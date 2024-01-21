
// CRUD
// Create - If data doesn't exists
// Read  - If data already exists.
// Update - If data is possible to read, then you can update
// Delete -  If data is possible to read, then you can delete

// Grabbing Elements
const cards = document.querySelectorAll(".card");
const pageRightSide = document.querySelector(".page-right");
//console.log(cards);

//console.log(cards[0].childNodes[3].childNodes[5].childNodes[1]);

const cartState = { totalPrice : 0 };
// cartState
/*
{
  "Laptop 1": {
    price: 100.00,
    quantity: 3
  },
  "Laptop 2": {
    price: 109.00,
    quantity: 6
  }
}
*/


cards.forEach((singleCard, idx) => {
  //const price =cards[0].childNodes[3].childNodes[3] 

  // productName "Laptop 1"


  singleCard.addEventListener('click', () => {

  const _price = singleCard.querySelector("article strong").textContent;
  const price = Number(_price.split(" ")[1]);
  const productName = singleCard.querySelector("article h2").textContent;
  const productImage  = singleCard.querySelector("figure img").src;

  // Cart State Updating
  if(productName in cartState){
    cartState[productName].quantity++;
    cartState.totalPrice += price;
  }else{
    cartState[productName] = {};
    cartState[productName].price = price;
    cartState[productName].quantity = 1;
    cartState[productName].image = productImage
    cartState.totalPrice += price;
  }

  appendCartItems(cartState);

  })
})

function appendCartItems(currentCartState) {
  pageRightSide.innerHTML = "";

  pageRightSide.innerHTML += createGrandTotal(currentCartState.totalPrice);

  for(let productName in currentCartState){
    if(productName != 'totalPrice'){
      const quantity = currentCartState[productName].quantity;
      const price = currentCartState[productName].price;
      const img = currentCartState[productName].image;

      const cartItem = createCartItem(img, productName, price, quantity)
      pageRightSide.innerHTML += cartItem;
    }
  }

}

function createGrandTotal(grand_total){
  const grandTotalElement =`
          <section>
            <strong> Grand Total : ${grand_total.toFixed(2)} BDT (only)</strong>
          </section>
  `
  return grandTotalElement;
}

function createCartItem(img_url, title, unit_price, quantity) {
  const cartItem = `
          <section class="cart-item">
            <section class="flex flex-between pe-1">
              <figure class="cart-figure">
                <img class="cart-img" src="${img_url}" alt="${title}">
                <article>
                  <h3 class="pb-0 mb-0">${title}</h3>
                </article>
              </figure>
              <article class="flex w-50 flex-between">
                <div>
                  <p>Unit Price</p>
                  <p><strong>${unit_price}</strong></p>
                </div>
                <div>
                  <p>Quantity</p>
                  <p><strong>${quantity}</strong></p>
                </div>
              </article>
            </section>
            <article class="text-center cart-total-btn">
              <p class="p-0 m-0"><strong>Total: ${(unit_price*quantity).toFixed(2)} BDT</strong></p>
            </article>
          </section>
  `
  return cartItem
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
