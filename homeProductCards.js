// import { homeQuantityToggle } from "./homeQuantityToggle";
var products = [
  {
    "id": 1,
    "name": "Laptop",
    "category": "Computers",
    "brand": "ExampleBrand",
    "price": 999.99,
    "stock": 50,
    "description": "Powerful laptop with a quad-core i5 processor, 8GB RAM, 256GB SSD, and a 14-inch FHD display.",
    "image": "lapi.png"
  },
  {
    "id": 2,
    "name": "Smartphone",
    "category": "Mobiles",
    "brand": "TechGadget",
    "price": 499.99,
    "stock": 100,
    "image": "iphone.png",
    "description": "Feature-rich smartphone with a 6.2-inch screen, 12MP dual camera, 128GB storage, and a 4000mAh battery."
  },
  {
    "id": 3,
    "name": "Wireless Headphones",
    "category": "Audio",
    "brand": "SoundBeats",
    "price": 149.99,
    "stock": 30,
    "image": "headphone.png",
    "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color."
  },
  {
    "id": 4,
    "name": "Watches",
    "category": "Wearables",
    "brand": "FitTech",
    "price": 199.99,
    "stock": 20,
    "image": "watch.png",
    "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
  },
  {
    "id": 5,
    "name": "Speakers",
    "category": "Audio",
    "brand": "SoundBeats",
    "price": 149.99,
    "stock": 30,
    "image": "speakers.png",
    "description": "High-quality wireless headphones with over-ear design, 20 hours of battery life, and a sleek black color and it's volume quality are good."
  },
  {
    "id": 6,
    "name": "Television",
    "category": "Video",
    "brand": "Samsung",
    "price": 199.99,
    "stock": 20,
    "image": "tv.png",
    "description": "Smartwatch with a 1.3-inch AMOLED display, water-resistant design, fitness tracking features, and a stylish silver color."
  }
];
const productContainer = document.querySelector("#productContainer");
const productTemplate = document.querySelector("#productTemplate");

// export const showProductContainer = (products) => {
//   if (!products) {
//     return false;
//   }

  products.forEach((curProd) => {
    const { brand, category, description, id, image, name, price, stock } =
      curProd;

    const productClone = document.importNode(productTemplate.content, true);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);

    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productName").textContent = name;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productStock").textContent = stock;
    productClone.querySelector(".productDescription").textContent = description;
    productClone.querySelector(".productPrice").textContent = `₹${price}`;
    productClone.querySelector(".productActualPrice").textContent = `₹${
      price * 4
    }`;

    productClone
    .querySelector(".stockElement")
    .addEventListener("click", (event) => {
      homeQuantityToggle(event, id, stock);
    });

  productContainer.append(productClone);
 });


 const homeQuantityToggle = (event, id, stock) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  //   console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  //   console.log(productQuantity);

  let quantity = parseInt(productQuantity.getAttribute("data-quantity")) || 1;

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  //todo Don't Forget To LIKE SHARE & SUBSCRIBE TO THAPA TECHNCIAL YOUTUBE CHANNEL 👉 https://www.youtube.com/thapatechnical

  productQuantity.innerText = quantity;
  console.log(quantity);
  productQuantity.setAttribute("data-quantity", quantity.toString());
  return quantity;
};