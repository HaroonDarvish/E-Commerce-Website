/* ===== PRODUCT DATA ========= */

const products = [
  {
    id: 1,
    name: "Studio Wireless Headphones",
    category: "Electronics",
    price: 129.99,
    rating: 4.9,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 2,
    name: "Minimal Smart Watch",
    category: "Electronics",
    price: 179.99,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 3,
    name: "Compact Bluetooth Speaker",
    category: "Electronics",
    price: 64.99,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 4,
    name: "Premium Camera",
    category: "Electronics",
    price: 549.99,
    rating: 4.9,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 5,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 94.99,
    rating: 4.6,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 6,
    name: "Portable Laptop Stand",
    category: "Electronics",
    price: 45.99,
    rating: 4.5,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=700&q=85",
  },

  /* Fashion */

  {
    id: 7,
    name: "Classic Oversized Jacket",
    category: "Fashion",
    price: 89.99,
    rating: 4.8,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 8,
    name: "Essential White Sneakers",
    category: "Fashion",
    price: 74.99,
    rating: 4.7,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 9,
    name: "Relaxed Cotton T-Shirt",
    category: "Fashion",
    price: 29.99,
    rating: 4.5,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 10,
    name: "Modern Denim Jacket",
    category: "Fashion",
    price: 69.99,
    rating: 4.6,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 11,
    name: "Premium Minimal Hoodie",
    category: "Fashion",
    price: 59.99,
    rating: 4.8,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 12,
    name: "Everyday Casual Shirt",
    category: "Fashion",
    price: 42.99,
    rating: 4.4,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?auto=format&fit=crop&w=700&q=85",
  },

  /* Home */

  {
    id: 13,
    name: "Modern Ceramic Vase",
    category: "Home",
    price: 34.99,
    rating: 4.7,
    badge: "New",
    image:
      "https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 14,
    name: "Minimal Table Lamp",
    category: "Home",
    price: 79.99,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 15,
    name: "Soft Linen Cushion",
    category: "Home",
    price: 24.99,
    rating: 4.5,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 16,
    name: "Natural Wooden Chair",
    category: "Home",
    price: 159.99,
    rating: 4.8,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 17,
    name: "Modern Coffee Table",
    category: "Home",
    price: 219.99,
    rating: 4.7,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 18,
    name: "Decorative Wall Mirror",
    category: "Home",
    price: 99.99,
    rating: 4.6,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=85",
  },

  /* Accessories */

  {
    id: 19,
    name: "Classic Leather Backpack",
    category: "Accessories",
    price: 84.99,
    rating: 4.8,
    badge: "Best Seller",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 20,
    name: "Minimal Leather Wallet",
    category: "Accessories",
    price: 39.99,
    rating: 4.6,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 21,
    name: "Classic Sunglasses",
    category: "Accessories",
    price: 54.99,
    rating: 4.7,
    badge: "Trending",
    image:
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 22,
    name: "Premium Analog Watch",
    category: "Accessories",
    price: 199.99,
    rating: 4.9,
    badge: "Premium",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 23,
    name: "Everyday Canvas Cap",
    category: "Accessories",
    price: 22.99,
    rating: 4.4,
    badge: "",
    image:
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?auto=format&fit=crop&w=700&q=85",
  },

  {
    id: 24,
    name: "Travel Leather Bag",
    category: "Accessories",
    price: 149.99,
    rating: 4.8,
    badge: "Popular",
    image:
      "https://images.unsplash.com/photo-1554342872-034a06541bad?auto=format&fit=crop&w=700&q=85",
  },
];

/* ========  DOM ELEMENTS ======= */

const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const mobileSearchInput = document.getElementById("mobileSearchInput");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");
const productCount = document.getElementById("productCount");
const emptyState = document.getElementById("emptyState");
const clearFilters = document.getElementById("clearFilters");
const emptyReset = document.getElementById("emptyReset");
const categoryCards = document.querySelectorAll(".category-card");

let cart = [];

/* ======== FORMAT PRICE  ====== */

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

/* ====== CREATE STARS ======== */

function createStars(rating) {
  let stars = "";
  const fullStars = Math.floor(rating);

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      stars += `<i class="bi bi-star-fill"></i>`;
    } else {
      stars += `<i class="bi bi-star"></i>`;
    }
  }
  return stars;
}

/* ======RENDER PRODUCTS  ============= */

function renderProducts(productList) {
  productsGrid.innerHTML = "";

  productCount.textContent = productList.length;

  if (productList.length === 0) {
    emptyState.classList.add("show");

    return;
  }

  emptyState.classList.remove("show");

  productList.forEach((product) => {
    const card = document.createElement("article");

    card.className = "product-card";

    card.innerHTML = `

            <div class="product-image-wrapper">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    loading="lazy"
                >

                ${
                  product.badge
                    ? `<span class="product-badge">
                            ${product.badge}
                           </span>`
                    : ""
                }

                <button
                    class="favorite-btn"
                    aria-label="Add ${product.name} to favorites"
                >
                    <i class="bi bi-heart"></i>
                </button>

            </div>


            <div class="product-info">

                <span class="product-category">
                    ${product.category}
                </span>

                <h3 class="product-name">
                    ${product.name}
                </h3>


                <div class="product-rating">

                    <div class="stars">
                        ${createStars(product.rating)}
                    </div>

                    <span class="rating-number">
                        ${product.rating}
                    </span>

                </div>


                <div class="product-bottom">

                    <span class="product-price">
                        ${formatPrice(product.price)}
                    </span>

                    <button
                        class="add-cart-btn"
                        data-id="${product.id}"
                        aria-label="Add ${product.name} to cart"
                    >
                        <i class="bi bi-bag-plus"></i>
                    </button>

                </div>

            </div>

        `;

    productsGrid.appendChild(card);
  });

  addProductEvents();
}

/* ===== PRODUCT EVENTS============ */

function addProductEvents() {
  const addButtons = document.querySelectorAll(".add-cart-btn");

  const favoriteButtons = document.querySelectorAll(".favorite-btn");

  addButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.id);

      addToCart(productId);
    });
  });

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", () => {
      button.classList.toggle("active");

      const icon = button.querySelector("i");

      if (button.classList.contains("active")) {
        icon.className = "bi bi-heart-fill";

        showToast("Saved", "Product added to your favorites.");
      } else {
        icon.className = "bi bi-heart";
      }
    });
  });
}

/* ===== FILTER PRODUCTS ======== */

function filterProducts() {

  const searchValue = searchInput.value.toLowerCase().trim();
  const categoryValue = categoryFilter.value;
  const priceValue = priceFilter.value;
  const sortValue = sortFilter.value;

  let filteredProducts = products.filter((product) => {

    const matchesSearch = product.name.toLowerCase().includes(searchValue);
    const matchesCategory = categoryValue === "all" || product.category === categoryValue;

    let matchesPrice = true;

    if (priceValue === "0-50") {
      matchesPrice = product.price < 50;
    }

    if (priceValue === "50-100") {
      matchesPrice = product.price >= 50 && product.price <= 100;
    }

    if (priceValue === "100-200") {
      matchesPrice = product.price > 100 && product.price <= 200;
    }

    if (priceValue === "200+") {
      matchesPrice = product.price > 200;
    }

    return matchesSearch && matchesCategory && matchesPrice;
  });

  /* Sorting */

  if (sortValue === "price-low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }

  if (sortValue === "price-high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  if (sortValue === "rating-high") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (sortValue === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderProducts(filteredProducts);
}

/* ===== SEARCH ======== */

searchInput.addEventListener("input", filterProducts);
mobileSearchInput.addEventListener("input", () => {
  searchInput.value = mobileSearchInput.value;

  filterProducts();
});

/* ======= FILTER EVENTS ======== */

categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
sortFilter.addEventListener("change", filterProducts);

/* ==== CATEGORY CARDS =========== */

categoryCards.forEach((card) => {

  card.addEventListener("click", () => {

    const category = card.dataset.category;
    categoryFilter.value = category;
    filterProducts();
    document.getElementById("products").scrollIntoView({
      behavior: "smooth",
    });
  });
});

/* ===== CLEAR FILTERS ======== */

function resetFilters() {

  searchInput.value = "";
  mobileSearchInput.value = "";
  categoryFilter.value = "all";
  priceFilter.value = "all";
  sortFilter.value = "default";
  renderProducts(products);
}

clearFilters.addEventListener("click", resetFilters);
emptyReset.addEventListener("click", resetFilters);

/* ======= MOBILE NAVIGATION ======== */

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");

  const icon = menuButton.querySelector("i");

  if (nav.classList.contains("open")) {
    icon.className = "bi bi-x-lg";
  } else {
    icon.className = "bi bi-list";
  }
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");

    menuButton.querySelector("i").className = "bi bi-list";
  });
});

/* ===== SEARCH PANEL ======== */

const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const closeSearch = document.getElementById("closeSearch");

searchToggle.addEventListener("click", () => {
  searchPanel.classList.toggle("open");

  if (searchPanel.classList.contains("open")) {
    mobileSearchInput.focus();
  }
});

closeSearch.addEventListener("click", () => {
  searchPanel.classList.remove("open");
});

/* ======= CART FUNCTIONS ======== */

function addToCart(productId) {

  const product = products.find((item) => item.id === productId);
  if (!product) return;

  const existingItem = cart.find((item) => item.id === productId);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  updateCart();
  showToast("Added to cart", `${product.name} was added successfully.`);
}

/* ===== UPDATE CART ========= */

function updateCart() {

  renderCart();
  updateCartCount();
}

/* ===== CART COUNT ========= */

function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  document.getElementById("cartCount").textContent = count;
}

/* ====== RENDER CART ========== */

function renderCart() {

  const cartItems = document.getElementById("cartItems");
  const cartTotal = document.getElementById("cartTotal");

  if (cart.length === 0) {
    cartItems.innerHTML = `

            <div class="cart-empty">

                <div class="cart-empty-icon">
                    <i class="bi bi-bag"></i>
                </div>

                <h3>Your cart is empty</h3>

                <p>
                    Add something you love.
                </p>

            </div>

        `;

    cartTotal.textContent = "$0.00";
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {

    total += item.price * item.quantity;
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    cartItem.innerHTML = `

            <div class="cart-item-image">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

            </div>

            <div class="cart-item-info">

                <h4>
                    ${item.name}
                </h4>

                <span>
                    ${item.category}
                </span>

                <div class="cart-item-price">
                    ${formatPrice(item.price)}
                </div>

            </div>

            <div class="cart-item-actions">

                <button
                    class="remove-cart-item"
                    data-id="${item.id}"
                    aria-label="Remove product"
                >
                    <i class="bi bi-trash3"></i>
                </button>

                <div class="quantity-controls">

                    <button
                        class="quantity-minus"
                        data-id="${item.id}"
                    >
                        <i class="bi bi-dash"></i>
                    </button>

                    <span>
                        ${item.quantity}
                    </span>

                    <button
                        class="quantity-plus"
                        data-id="${item.id}"
                    >
                        <i class="bi bi-plus"></i>
                    </button>

                </div>

            </div>

        `;

    cartItems.appendChild(cartItem);
  });

  cartTotal.textContent = formatPrice(total);
  addCartItemEvents();
}

/* ======= CART ITEM EVENTS ========= */

function addCartItemEvents() {
  document.querySelectorAll(".remove-cart-item").forEach((button) => {
    button.addEventListener("click", () => {

      const id = Number(button.dataset.id);
      cart = cart.filter((item) => item.id !== id);
      updateCart();
    });
  });

  document.querySelectorAll(".quantity-minus").forEach((button) => {
    button.addEventListener("click", () => {

      const id = Number(button.dataset.id);
      const item = cart.find((item) => item.id === id);

      if (!item) return;
      item.quantity--;

      if (item.quantity <= 0) {
        cart = cart.filter((item) => item.id !== id);
      }

      updateCart();
    });
  });

  document.querySelectorAll(".quantity-plus").forEach((button) => {

    button.addEventListener("click", () => {
      const id = Number(button.dataset.id);
      const item = cart.find((item) => item.id === id);

      if (!item) return;
      item.quantity++;
      updateCart();
    });
  });
}

/* ===== CART DRAWER ====== */

const cartButton = document.getElementById("cartButton");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

function openCart() {

  cartDrawer.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.classList.add("cart-open");
}

function closeCartDrawer() {

  cartDrawer.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.classList.remove("cart-open");
}

cartButton.addEventListener("click", openCart);
closeCart.addEventListener("click", closeCartDrawer);
cartOverlay.addEventListener("click", closeCartDrawer);

/* ====== TOAST ====== */

const toast = document.getElementById("toast");
const toastTitle = document.getElementById("toastTitle");
const toastMessage = document.getElementById("toastMessage");
const closeToast = document.getElementById("closeToast");

let toastTimer;

function showToast(title, message) {

  toastTitle.textContent = title;
  toastMessage.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimer);

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

closeToast.addEventListener("click", () => {
  toast.classList.remove("show");
});

/* ===== NEWSLETTER ======= */

const newsletterForm = document.getElementById("newsletterForm");

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.getElementById("emailInput").value.trim();

  if (!email) return;
  showToast("You're subscribed!", "Welcome to the YourMarket community.");
  newsletterForm.reset();
});

/* ===== CHECKOUT ======= */

const checkoutButton = document.getElementById("checkoutButton");

checkoutButton.addEventListener("click", () => {
  if (cart.length === 0) {
    showToast("Your cart is empty", "Add a product before checking out.");
    return;
  }

  showToast(
    "Checkout coming soon",
    "This portfolio project is ready for a payment system.",
  );
});

/* ===== INITIAL RENDER ======= */

renderProducts(products);
updateCart();
