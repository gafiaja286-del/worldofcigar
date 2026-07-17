import { db } from "../firebase.js";

import {
  collection,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const container = document.getElementById("cohibaProducts");

async function loadProducts() {

  container.innerHTML = "";

  try {

    const querySnapshot = await getDocs(collection(db, "products"));

    querySnapshot.forEach((doc) => {

      const product = doc.data();

      if (product.brand !== "Cohiba") return;

      container.innerHTML += `
        <div class="card">

          <img
            src="../images/${product.image.replace("images/", "")}"
            alt="${product.name}"
            onerror="this.src='../images/cohiba.jpg.jfif'"
          >

          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <p><b>Price :</b> Rp ${product.price.toLocaleString("id-ID")}</p>

          <a
            href="../payment.html?name=${encodeURIComponent(product.name)}&price=${product.price}"
            class="buy-btn">
            Buy Now
          </a>

        </div>
      `;

    });

  } catch (error) {

    console.error(error);

    container.innerHTML = "<h2>Gagal memuat produk.</h2>";

  }

}

loadProducts();