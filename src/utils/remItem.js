import { ls_add, get_ls_cart } from "./addItem";

export function init_rm_listener() {
    const bin_icons = document.querySelectorAll(".bin");
    bin_icons.forEach(bin => bin.addEventListener("click", rm_item));

    const clear_cart_btn = document.querySelector(".clearCart");
    clear_cart_btn.addEventListener("click", rm_cart)
    
    function rm_item(e) {    
        const tr = e.target.parentNode.parentNode;
        new Promise(res => {
            const id = tr.dataset.id;
            const cart = get_ls_cart();
            const rm_index = cart.findIndex(item => item.idDrink = id);
            cart.splice(rm_index, 1);
            ls_add(cart);

            res();
        });

        tr.remove();
    }
    function rm_cart() {
        ls_add([]);
        document.querySelector("tbody").innerHTML = "";
    }

    
}