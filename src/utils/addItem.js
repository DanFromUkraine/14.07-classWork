import { data } from "./getData";
import { init_rm_listener } from "./remItem";

setTimeout(() => {
  const cards = document.querySelectorAll(".order");
  cards.forEach(card => {
    card.addEventListener("click", (e) => {
      data.then(resolvedData => {
        add_to_ls_cart(
          resolvedData.drinks.find(drink => drink.idDrink === e.target.dataset.id)
        );
      });
    });
  })
}, 1000);

function add_to_ls_cart({strDrinkThumb ,strDrink, price, count = 1}) {
  const arg = arguments[0];

  console.log(arg)
  const cart = get_ls_cart();
  if (cart) {
    const new_cart = cart;
    new_cart.push(arg);

    ls_add(new_cart);
  } else {
    ls_add([arg]);
  }
}

export function ls_add(value) {
  localStorage.setItem("cart", JSON.stringify(value));
}


export function get_ls_cart() {
  return JSON.parse(localStorage.getItem("cart"));
}

