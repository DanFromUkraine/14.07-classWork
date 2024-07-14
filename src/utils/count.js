import { get_ls_cart, ls_add } from "./addItem";

export function init_count() {
    const inc_btn = document.querySelectorAll(".add"),
     dec_btn = document.querySelectorAll(".reduce");

     inc_btn.forEach(btn => btn.addEventListener("click", inc_btn_onclick));
    dec_btn.forEach(btn => btn.addEventListener("click", dec_btn_onclick))

     function inc_btn_onclick(e) {
        const tr = e.target.parentNode.parentNode;
        let count_field = tr.querySelector(".count");
        let count_field_value = parseInt(count_field.textContent);
        count_field_value += 1;
        console.log(count_field_value);
        count_field.textContent = count_field_value;
        
        new Promise(res => {
            const id = tr.dataset.id;
            const cart = get_ls_cart();
            const rm_index = cart.findIndex(item => item.idDrink = id);
            cart[rm_index].count = count_field_value;
            ls_add(cart);

            res();
        });
    }

    function dec_btn_onclick(e) {
        const tr = e.target.parentNode.parentNode;
        let count_field = tr.querySelector(".count");
        let count_field_value = parseInt(count_field.textContent);

        if (count_field_value > 0) {
            count_field_value -= 1;
            console.log(count_field_value);
            count_field.textContent = count_field_value;
            
            new Promise(res => {
                const id = tr.dataset.id;
                const cart = get_ls_cart();
                const rm_index = cart.findIndex(item => item.idDrink = id);
                cart[rm_index].count = count_field_value;
                ls_add(cart);
    
                res();
            });
        }
        
    }
}