// search form

searchForm = document.querySelector('.wrapper');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}

// log in Form

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

// Reg Form

let RegForm = document.querySelector('.reg-form-container');

document.querySelector('#reg-btn').onclick = () =>{
    RegForm.classList.toggle('active');
}

document.querySelector('#ex-login-btn').onclick = () => {
    RegForm.classList.toggle('active');
}


// Validation

function validate()
{
if(false == document.getElementById("agree").checked)
{
alert("If you agree with the terms, check the Agree check box");
}
}

// window scroll header-2 Nav

window.onscroll = () => {

    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active'); 
    }else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active'); 
    }else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}



// Window loader

var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
  loader.style.display = "none";
});

// Bok Slider

var swiper = new Swiper(".books-slider", {
  spaceBetween: 5,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  
var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });

  var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

  var swiper = new Swiper(".authors-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });


  

// Alert function

  function MyFunction() {
    alert('Thank you for signing up, enjoy shopping!')
  }


  function myFunction() {
    alert('You aready sign-in, enjoy shopping!')
  }


  function AlertFunction() {
    alert('Thank you for subscribing, shop our bestsellers!')
  }

// Add to Cart function

let count = 0;
let sum = 0;
let cart = {};

if (localStorage.getItem("count")) {
    count = parseInt(localStorage.getItem("count"));
}

if (localStorage.getItem("sum")) {
    sum = parseInt(localStorage.getItem("sum"));
}

if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
}

updateCart();

let btns = document.querySelectorAll(".featured .btn");

for (let i = 0; i < btns.length; i++) {
    let btn = btns[i];
    btn.addEventListener("click", add);

}

function add(event) {
    let image = event.target.dataset.image;
    let price = Number(event.target.dataset.price);
    let title = event.target.dataset.title;
    let id = event.target.dataset.id;

if (id in cart) {
    cart[id].qty++;
} else {
    let cartItem = {
        title: title,
        price: price,
        qty: 1,
        image: image,
    };
    cart[id] = cartItem
}

    count++;
    sum += price;

    console.log(cart);

  
  localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
}

function updateCart() {
    document.getElementById("sum").textContent = sum;
    document.getElementById("count").textContent = count;
    localStorage.setItem("sum", sum);
    localStorage.setItem("count", count);
}

// search bar
let suggestions = [
  "Michael Pace",
  "Donald Campbell", 
  "Shelle Rose Charvet",
  "Eugene Soltes", 
  "Ian Rowland",
  "Virgil Zeigler-Hill",
  "David Cropley",
  "Lillian Glass", 
  "Michael Stevens", 
  "Nichola Capaldi", 
  "Miles Smit", 
  "Subliminal Psychology 101", 
  "Art of Deception",
  "Art of Psychological Warfare",
  "Body Language of Liars",
  "Dark Side of Creativity",
  "Dark Side of Personality",
  "Full Facts Book of Cold Reading",
  "Why They Do It",
  "Words that Change the Minds",
  "Working in the Dark",
  "Controlling People",
  "Brandwashed",
  "Critical Thinking",
];

// getting all required elements 
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");

//if usr press any key and release
inputBox.onkeyup = (e)=>{
    let userData = e.target.value; //user entered data
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            //feltering array value and user char to lowercase and return only 
            // those words/search whcich are starts with user enetered word
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active"); // show autocomplete box
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            //adding onclick attribute in all li tag
            allList[i].setAttribute("onclick", "select(this)");
        }
    }else{
        searchWrapper.classList.remove("active"); //hide autocomplete box
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData; // passing the user selected list item in textfield
    searchWrapper.classList.remove("active"); //hide autocomplete box
}



function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}