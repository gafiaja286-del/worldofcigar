import { db } from "./firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const productContainer = document.querySelector(".product-container");

async function loadProducts() {

  const querySnapshot = await getDocs(collection(db, "products"));

  productContainer.innerHTML = "";

  querySnapshot.forEach((doc) => {

    const product = doc.data();

    productContainer.innerHTML += `

      <div class="card">

        <img src="${product.image || 'images/logo.png.jfif'}">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p><strong>Rp ${product.price.toLocaleString("id-ID")}</strong></p>

        <button class="buy-btn"
        onclick="buyNow('${product.name}', ${product.price})">
        Buy Now
        </button>

      </div>

    `;

  });

}

loadProducts();

window.buyNow = function(productName, productPrice){

  const phone = "628388959306";

  const message = `Halo World of Cigar.

Saya ingin memesan:

Produk : ${productName}
Harga : Rp ${Number(productPrice).toLocaleString("id-ID")}

Pembayaran:

Bank BCA
No. Rekening : 3350016898
Atas Nama : NURHIDAYAH

Mohon konfirmasi stok dan pengiriman.

Terima kasih.`;

  window.open(
    https://wa.me/${phone}?text=${encodeURIComponent(message)},
    "_blank"
  );

};