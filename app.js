
/* categories swipper */
var swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 10,

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/* &&&&&&& menu-burger &&&&&&&&&&&&&&&& */

const navMenu = document.getElementById("nav-menu");
const navMenu1 = document.getElementById("nav-menu1");
const navClose1 = document.querySelector("#nav-closes1");
const navToggle = document.querySelector("#nav-toggles");
const navClose = document.querySelector("#nav-closes");
const heart = document.querySelector(".heart");

if (heart) {
  heart.addEventListener("click", () => {
    navMenu1.classList.add("show-menu1");
  });
}

if (navClose1) {
  navClose1.addEventListener("click", () => {
    navMenu1.classList.remove("show-menu1");
    location.reload();
  });
}

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/* ********* Categories ******************** */
let categories = [
  {
    id: 1,
    name: "T-Shirt",
    img: ".vscode/img/category-1.jpg",
  },
  {
    id: 2,
    name: "Bags",
    img: ".vscode/img/category-2.jpg",
  },
  {
    id: 3,
    name: "Sandal",
    img: ".vscode/img/category-3.jpg",
  },
  {
    id: 4,
    name: "Scarf Cap",
    img: ".vscode/img/category-4.jpg",
  },
  {
    id: 5,
    name: "Shoes",
    img: ".vscode/img/category-5.jpg",
  },
  {
    id: 6,
    name: "Pillowcase",
    img: ".vscode/img/category-6.jpg",
  },
  {
    id: 7,
    name: "Jumpsuit",
    img: ".vscode/img/category-7.jpg",
  },
  {
    id: 8,
    name: "Hats",
    img: ".vscode/img/category-8.jpg",
  },
];

const link_categories = document.querySelector("#link-categories");
const category_items = document.querySelectorAll("#category-items");

for (let i = 0; i < categories.length; i++) {
  category_items[
    i
  ].innerHTML = `<img src= ${categories[i].img} alt="" class="category-img">
    <h3 class="category-title">${categories[i].name}</h3>`;
  link_categories.appendChild(category_items[i]);
}

/* *********** protucts ****************** */

let products = [
  {
    id: 1,
    name: "Shirt",
    instock: 100,
    price: 29.99,
    img1: ".vscode/img/product-1-1.jpg",
    img2: ".vscode/img/product-1-2.jpg",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Shirt",
    instock: 100,
    price: 200.99,
    img1: ".vscode/img/product-2-1.jpg",
    img2: ".vscode/img/product-2-2.jpg",
    category: "Shirts",
  },
  {
    id: 3,
    name: "Shoes",
    instock: 100,
    price: 39.99,
    img1: ".vscode/img/product-3-1.jpg",
    img2: ".vscode/img/product-3-2.jpg",
    category: "Shoes",
  },
  {
    id: 4,
    name: "Jumpsuit",
    instock: 100,
    price: 49.99,
    img1: ".vscode/img/product-4-1.jpg",
    img2: ".vscode/img/product-4-2.jpg",
    category: "Jumpsuit",
  },
  {
    id: 5,
    name: "Jumpsuit",
    instock: 100,
    price: 19.99,
    img1: ".vscode/img/product-5-1.jpg",
    img2: ".vscode/img/product-5-2.jpg",
    category: "Jumpsuit",
  },
  {
    id: 6,
    name: "Shirt",
    instock: 100,
    price: 9.99,
    img1: ".vscode/img/product-6-1.jpg",
    img1: ".vscode/img/product-6-2.jpg",
    category: "Shirts",
  },
  {
    id: 7,
    name: "Suit",
    instock: 100,
    price: 2.99,
    img1: ".vscode/img/product-7-1.jpg",
    img2: ".vscode/img/product-7-2.jpg",
    category: "Shirts",
  },
  {
    id: 8,
    name: "Shirt",
    instock: 100,
    price: 9.99,
    img1: ".vscode/img/product-8-1.jpg",
    img2: ".vscode/img/product-8-2.jpg",
    category: "Shirts",
  },
  {
    id: 9,
    name: "Shirt",
    instock: 100,
    price: 9.99,
    img1: ".vscode/img/product-9-1.jpg",
    img2: ".vscode/img/product-9-2.jpg",
    category: "Shirts",
  },
  {
    id: 10,
    name: "Shoes",
    instock: 100,
    price: 290.99,
    img1: ".vscode/img/product-10-1.jpg",
    img2: ".vscode/img/product-10-2.jpg",
    category: "Shoes",
  },
  {
    id: 11,
    name: "Jumpsuit",
    instock: 100,
    price: 29.99,
    img1: ".vscode/img/product-11-1.jpg",
    img2: ".vscode/img/product-11-2.jpg",
    category: "Jumpsuits",
  },
  {
    id: 12,
    name: "Shirt",
    instock: 100,
    price: 29.99,
    img1: ".vscode/img/product-12-1.jpg",
    img2: ".vscode/img/product-12-2.jpg",
    category: "Shirts",
  },
  {
    id: 13,
    name: "Bag",
    instock: 100,
    price: 29.99,
    img1: ".vscode/img/product-13-1.jpg",
    img2: ".vscode/img/product-13-2.jpg",
    category: "Bags",
  },
];

let product_banner = document.querySelectorAll(".product-banner");
let productContainer = document.querySelector(".products-container");
const product_images = document.querySelectorAll(".product-images");


function card(products) {
  productContainer.innerHTML = "";
  for (let i = 0; i < products.length; i++) {
    let cardContent = `
     <div class="product-item">
      <div class="product-banner">
     <a href="details.html" class="product-images">
       <img class = "product-img default" src='${products[i].img1}'>  
       <img class = "product-img hover" src='${products[i].img2}'>  
     </a>
     <div class="product-actions">
         <a href="" class="action-btn" aria-label="Quick View">
             <i class="fi fi-rs-eye"></i>
         </a>
         <a href="" class="action-btn" aria-label="Add to wishlist">
             <i class="fi fi-rs-heart"></i>
         </a>
         <a href="" class="action-btn" aria-label="Compare">
             <i class="fi fi-rs-shuffle"></i>
         </a>
     </div>

     <div class="product-badge light-pink">
         Hot
     </div>
 </div>

 <div class="product-content">
     <span class="product-category">Clothing</span>
   
      <h3 class="product-title">${products[i].name}</h3>  
    
     <div class="product-rating">
         <i class="fi fi-rs-star star"></i>
         <i class="fi fi-rs-star star"></i>
         <i class="fi fi-rs-star star"></i>
         <i class="fi fi-rs-star star"></i>
         <i class="fi fi-rs-star star"></i>
     </div>
     <div class="product-price flex">
         <span class="new-price">$238.85</span>
         <span class="old-price">$238.8</span>
     </div>
     <div  class="action-btn cart-btn" aria-label="Add to card" onclick="addToCart(${products[i].id})">
         <i class="fi fi-rs-shopping-bag" id="default-btn"></i>
     </div>
 </div>
</div>
</div>`;
    productContainer.innerHTML += cardContent;
  }
}
card(products);

/* **********   product tabs ********* */

/* **********   filter color ********* */
//parameter passed from button (parameter sams as category)
function filterProduct(value) {
  // button class code
  let buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach((button) => {
    //chek if value equals innnerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

/* ******* filter ************ */
let filtreItem;
const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.innerText.trim() == "ALL") {
      filtreItem = products;
    } else {
      filtreItem = products.filter(
        (el) => el.category === btn.textContent.trim()
      );
    }
    card(filtreItem);
  });
});

/* ******* search bar **************** */
function searchProduct() {
  let elements = document.querySelectorAll(".product-title");
  let searchInput = document.querySelector(".form-input").value.toUpperCase();
  let cardContainer = document.querySelector(".products-container");
  console.log(cardContainer);
  let cards = cardContainer.getElementsByClassName("product-item");
  console.log(cards);
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector("h3.product-title");
    if (title.innerText.toUpperCase().indexOf(searchInput) > -1) {
      cards[i].style.display = "";
    } else {
      cards[i].style.display = "none";
    }
  }
}

/* star */
const star = document.querySelectorAll(".star");
// console.log(star);
star.forEach((element) => {
  element.addEventListener("click", (e) => {
    const parentStar = e.target.parentElement;
    console.log(parentStar);
    // console.log(e.target.parentElement);
    const stars = parentStar.querySelectorAll("i");
    let check = false;
    for (let i = 0; i < stars.length; i++) {
      if (!check) {
        stars[i].classList.remove("product-rating");
        stars[i].classList.add("product-ratings");
        if (stars[i] === e.target) check = true;
      } else {
        stars[i].classList.add("product-rating");
        stars[i].classList.remove("product-ratings");
      }
    }
  });
});



/* local Storage */
// get element with localStorage
const subtotalEl = document.querySelector(".subtotal");
const totalItemsInCartEl = document.querySelectorAll(".count");
console.log(totalItemsInCartEl);
const cartItemsEl = navMenu1.querySelector(".cart-items");


let cards = JSON.parse(localStorage.getItem("card")) || [];
updateCart(); 

// ADD TO CART
function addToCart(id) {
  // check if prodcut already exist in cart
  if (cards.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);

    cards.push({
      ...item,
      numberOfUnits: 1,
    });
  }

  updateCart();
}



// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();

  // save cart to local storage
  localStorage.setItem("card", JSON.stringify(cards));
}


// calculate Subtotal
function renderSubtotal(){
  let totalPrice = 0;
  let totalItems = 0;

  cards.forEach((item) =>{
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;

  })

  subtotalEl.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCartEl[1].innerHTML = totalItems;

}



console.log(cartItemsEl);

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cards.forEach((item) => {
    cartItemsEl.innerHTML += `
    
        <div class="cart-item">
            <div class="item-info" onclick="removeItemFromCart(${item.id})">
                <img src="${item.img1}" alt="${item.name}">
                <h4>${item.name}</h4>
            </div>
            <div class="unit-price">
                <small>$</small>${item.price}
            </div>
             <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div> 
                <div class="nav-close1"> <i class="fi fi-rs-cross-small"></i> </div>          
            </div> 
        </div>
      `;
  });
}

// remove item from cart
function removeItemFromCart(id) {
  cards = cards.filter((item) => item.id !== id);

  updateCart();
}

// change number of units for an item
function changeNumberOfUnits(action, id) {
  cards = cards.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}

const clear = document.querySelector("#clear");
if(clear){
  clear.addEventListener('click', ()=>{
    localStorage.clear();
    location.reload();
  })
}

const deleteRow = document.querySelector('.nav-close1')
console.log(deleteRow);
if(deleteRow){
  deleteRow.addEventListener('click', (e) =>{
    if(e.target.classList.contains('fi-rs-cross-small')){
      e.target.closest('.cart-item').remove();
    }
  })
}