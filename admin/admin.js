import { db } from "../firebase.js";
import { cohibaProducts } from "../data/cohiba-data.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

alert("Admin JS Aktif");

console.log("admin.js berjalan");

// Tombol Simpan Produk
const button = document.getElementById("saveBtn");

button.addEventListener("click", async () => {

  const name = document.getElementById("name").value;
  const brand = document.getElementById("brand").value;
  const price = Number(document.getElementById("price").value);
  const image = document.getElementById("image").value;
  const description = document.getElementById("description").value;

  try {

    await addDoc(collection(db, "products"), {
      name,
      brand,
      price,
      image: "images/" + image,
      description,
      createdAt: new Date()
    });

    alert("Produk berhasil disimpan!");

    document.getElementById("name").value = "";
    document.getElementById("brand").value = "";
    document.getElementById("price").value = "";
    document.getElementById("image").value = "";
    document.getElementById("description").value = "";

  } catch (error) {

    alert("Error: " + error.message);
    console.log(error);

  }

});


// Tombol Import Semua Cohiba
const importBtn = document.getElementById("importCohibaBtn");

importBtn.addEventListener("click", async () => {

  try {

    for (const product of cohibaProducts) {

      await addDoc(collection(db, "products"), {
        ...product,
        createdAt: new Date()
      });

    }

    alert("Semua produk Cohiba berhasil diimport!");

  } catch (error) {

    alert("Import gagal: " + error.message);
    console.log(error);

  }

});