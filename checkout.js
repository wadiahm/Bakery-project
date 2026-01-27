// SIMPLE BAKERY CART SYSTEM

var myCart = JSON.parse(localStorage.getItem('bakeryCart')) || [];

// Add item to cart
function addToCart(itemName, itemPrice, event) {
    console.log("Adding: " + itemName + " - Rs " + itemPrice);
    
    myCart.push({
        name: itemName,
        price: itemPrice,
        id: Date.now()
    });
    
    localStorage.setItem('bakeryCart', JSON.stringify(myCart));
    updateCartNumber();
    
    alert("✅ " + itemName + " added!\nPrice: Rs " + itemPrice + "\nItems in cart: " + myCart.length);
    
    // Button feedback
    if (event && event.target) {
        var btn = event.target;
        var originalText = btn.textContent;
        btn.textContent = "Added!";       
        setTimeout(function() {
            btn.textContent = originalText;
            btn.style.backgroundColor = "";
        }, 1000);
    }
}

// Update cart counter
function updateCartNumber() {
    var cartElement = document.getElementById('cart-count');
    if (cartElement) {
        cartElement.textContent = myCart.length;
    }
}

// Clear cart
function clearCart() {
    if (myCart.length === 0) {
        alert("Cart is already empty!");
        return;
    }
    
    if (confirm("Clear " + myCart.length + " items from cart?")) {
        myCart = [];
        localStorage.setItem('bakeryCart', JSON.stringify(myCart));
        updateCartNumber();
        alert("Cart cleared!");
    }
}

// Contact form validation
function validateContactForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    
    if (!name || !email || !message) {
        alert("Please fill in all fields");
        return false;
    }
    
    alert("Thank you for your message! We'll contact you soon.");
    return false;
}

// Page initialization
window.onload = function() {
    console.log("Bakery website loaded!");
    updateCartNumber();

};
let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

