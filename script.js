let cart = [];

function addToCart(product, price) {

    cart.push({
        product: product,
        price: price
    });

    updateCart();

}


function updateCart() {

    let cartList = document.getElementById("cart-items");
    let totalText = document.getElementById("total");

    cartList.innerHTML = "";

    let total = 0;


    cart.forEach(function(item) {

        let li = document.createElement("li");

        li.textContent =
        item.product + " - Rp " + item.price.toLocaleString("id-ID");

        cartList.appendChild(li);

        total += item.price;

    });


    totalText.textContent =
    "Total: Rp " + total.toLocaleString("id-ID");

}


function checkout() {

    if (cart.length === 0) {

        alert("Keranjang masih kosong");

        return;

    }


    let message =
    "Halo World of Cigar, saya ingin memesan:%0A%0A";


    cart.forEach(function(item) {

        message +=
        "- " + item.product +
        " Rp " +
        item.price.toLocaleString("id-ID") +
        "%0A";

    });


    window.open(
        "https://wa.me/628388959306?text=" + message
    );

}