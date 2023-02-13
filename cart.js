let cart = {};
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

let tbody = document.getElementById("tbody");

let total_price = 0;
let total_qty = 0;

for (let id in cart) {
    let item = cart[id];

    let tr = document.createElement('tr')
    
    let image_td = document.createElement('td');
    let image = document.createElement('img');
    image.src = item.image;
    image.alt = item.title;
    image.style.height = '150px'
    image.style.width = '140px'
    image_td.appendChild(image);
    tr.appendChild(image_td);
    
    let title_td = document.createElement('td')
    title_td.textContent = item.title;
    tr.appendChild(title_td);


    let price_td = document.createElement("td");
    price_td.textContent = item.price;
    tr.appendChild(price_td);

    let qty_td = document.createElement("td");
    qty_td.textContent = item.qty;
    tr.appendChild(qty_td);

    tbody.appendChild(tr)

}


// Add to Cart function

let count = 0;
let sum = 0;
let cart1 = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart1 = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".featured .btn");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);

}

function updateCart() {
    document.getElementById("sum").textContent = sum;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}
