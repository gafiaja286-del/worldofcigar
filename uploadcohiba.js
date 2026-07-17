import { db } from "./firebase.js";

import {
  collection,
  addDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const cohibaProducts = [
  {
name: "Cohiba Siglo II Paper Box 25",
  brand: "Cohiba",
  price: 17000000,
  image: "images/cohiba-siglo2-paper-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo II Tubos Box 15",
  brand: "Cohiba",
  price: 15000000,
  image: "images/cohiba-siglo2-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo III Box 25",
  brand: "Cohiba",
  price: 21000000,
  image: "images/cohiba-siglo3-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo IV Box 25",
  brand: "Cohiba",
  price: 23000000,
  image: "images/cohiba-siglo4-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo IV Tubos Box 15",
  brand: "Cohiba",
  price: 19000000,
  image: "images/cohiba-siglo4-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo V Box 25",
  brand: "Cohiba",
  price: 26000000,
  image: "images/cohiba-siglo5-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo VI Box 25",
  brand: "Cohiba",
  price: 28000000,
  image: "images/cohiba-siglo6-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo VI Box 10",
  brand: "Cohiba",
  price: 15000000,
  image: "images/cohiba-siglo6-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo VI Tubos Box 15",
  brand: "Cohiba",
  price: 23000000,
  image: "images/cohiba-siglo6-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Siglo VI Tubos Humidor Limited Box 15",
  brand: "Cohiba",
  price: 38000000,
  image: "images/cohiba-siglo6-tubos-humidor-limited-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Robustos Box 25",
  brand: "Cohiba",
  price: 28000000,
  image: "images/cohiba-robustos-box25.jpg",
  description: "Premium Cuban Cigar"
 },
 {
  name: "Cohiba Robustos Tubos Box 15",
  brand: "Cohiba",
  price: 17000000,
  image: "images/cohiba-robustos-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Medio Siglo Box 25",
  brand: "Cohiba",
  price: 15000000,
  image: "images/cohiba-medio-siglo-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Medio Siglo Tubos Box 15",
  brand: "Cohiba",
  price: 18000000,
  image: "images/cohiba-medio-siglo-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Maduro 5 Magicos Box 25",
  brand: "Cohiba",
  price: 23000000,
  image: "images/cohiba-maduro5-magicos-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Maduro 5 Genios Box 25",
  brand: "Cohiba",
  price: 26000000,
  image: "images/cohiba-maduro5-genios-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Maduro 5 Genios Box 10",
  brand: "Cohiba",
  price: 14000000,
  image: "images/cohiba-maduro5-genios-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Piramides Extra Box 10",
  brand: "Cohiba",
  price: 15000000,
  image: "images/cohiba-piramides-extra-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Piramides Extra Tubos Box 15",
  brand: "Cohiba",
  price: 22000000,
  image: "images/cohiba-piramides-extra-tubos-box15.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Esplendidos Box 25",
  brand: "Cohiba",
  price: 32000000,
  image: "images/cohiba-esplendidos-box25.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Talisman 2017 Edicion Limitada Box 10",
  brand: "Cohiba",
  price: 35000000,
  image: "images/cohiba-talisman-2017-limitada-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Robustos Supremos 2014 Edicion Limitada Box 10",
  brand: "Cohiba",
  price: 33000000,
  image: "images/cohiba-robustos-supremos-2014-limitada-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Behike 52 Box 10",
  brand: "Cohiba",
  price: 34000000,
  image: "images/cohiba-behike52-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Behike 54 Box 10",
  brand: "Cohiba",
  price: 37000000,
  image: "images/cohiba-behike54-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba Behike 56 Box 10",
  brand: "Cohiba",
  price: 40000000,
  image: "images/cohiba-behike56-box10.jpg",
  description: "Premium Cuban Cigar"
},
{
  name: "Cohiba 1966 Edicion Limitada",
  brand: "Cohiba",
  price: 55000000,
  image: "images/cohiba-1966-limitada.jpg",
  description: "Premium Cuban Cigar"
}
];

async function uploadProducts(){

for (const product of cohibaProducts){

await addDoc(  
  collection(db,"products"),  
  product  
);  

console.log("Upload:", product.name);

}

alert("Cohiba berhasil diupload");
}

uploadProducts();