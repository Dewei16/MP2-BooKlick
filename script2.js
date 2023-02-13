
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

  // search form

searchForm = document.querySelector('.wrapper');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}