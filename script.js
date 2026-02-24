// Simple smooth scroll behavior
document.querySelector('.order-btn').addEventListener('click', () => {
    alert("Redirecting to food menu soon 🚀");
});

// Contact form
const contactForm = document.getElementById("contactForm");
if(contactForm){
    contactForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Thank you for contacting QuickBite! 🍔");
    });
}

// Login form
const loginForm = document.getElementById("loginForm");
if(loginForm){
    loginForm.addEventListener("submit", function(e){
        e.preventDefault();
        alert("Login Successful 🚀");
    });
}
const dealButtons = document.querySelectorAll(".deal-btn");

dealButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        btn.innerText = "Added to Cart 🛒";
        btn.style.background = "#1e1e2f";
    });
});

/* ================= MENU CART FUNCTION ================= */

const menuButtons = document.querySelectorAll(".order-menu-btn");
const cartCount = document.getElementById("cart-count");

let cart = 0;

menuButtons.forEach(button => {
    button.addEventListener("click", () => {

        cart++;
        cartCount.innerText = cart;

        button.innerText = "Added ✅";
        button.style.background = "#1e1e2f";

        setTimeout(() => {
            button.innerText = "Order Now";
            button.style.background = "#ff4d4d";
        }, 1500);
    });
});