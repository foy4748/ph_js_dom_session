const cart = [];
let totalPrice = 0;

const cards = document.querySelectorAll(".card");
const rightSide = document.querySelector(".page-right");

cards.forEach(function (singleCard, index) {
  const cardBtn = singleCard.querySelector("button");
  const cost = singleCard.querySelector("strong").textContent.split(" ")[1];
  const title = singleCard.querySelector("h2").textContent;
  const img = singleCard.querySelector("img").src;

  cardBtn.addEventListener("click", () => {
    const item = {
      cost: parseFloat(cost),
      unit_price: parseFloat(cost),
      title,
      img,
      quantity: 1,
    };

    const isFoundIdx = cart.findIndex((itm) => {
      return itm.title == item.title;
    });

    if (isFoundIdx > -1) {
      console.log("YES FOUND");
      const currentItm = cart[isFoundIdx];
      currentItm.cost += parseFloat(cost);
      currentItm.quantity++;
    } else {
      console.log("NOT FOUND");
      cart.push(item);
    }
    totalPrice += parseFloat(cost);
    console.log(cart);
    populateCartWithData();
  });
});

function populateCartWithData() {
  //const cartItems = cart.map((itm) => JSON.stringify(itm)).join("\n");
  const cartItems = cart.map((singleCartItem) => {
    return `
          <section class="cart-item">
            <section class="flex flex-between pe-1">
              <figure class="cart-figure">
                <img class="cart-img" src="${singleCartItem.img}" alt="${
      singleCartItem.title
    }">
                <article>
                  <h3 class="pb-0 mb-0">${singleCartItem.title}</h3>
                </article>
              </figure>
              <article class="flex w-50 flex-between">
                <div>
                  <p>Unit Price</p>
                  <p><strong>${singleCartItem.unit_price}</p>
                </div>
                <div>
                  <p>Quantity</p>
                  <p><strong>${singleCartItem.quantity}</strong></p>
                </div>
              </article>
            </section>
            <article class="text-center cart-total-btn">
              <p class="p-0 m-0"><strong>Total: ${
                singleCartItem.unit_price * singleCartItem.quantity
              } BDT</strong></p>
            </article>

`;
  });

  rightSide.innerHTML = "";

  rightSide.innerHTML += `
          <section>
           <strong> Grand Total : ${totalPrice} BDT (only)</strong>
		  </section>
		${cartItems.join("\n")}
		`;
}
