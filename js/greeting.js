(function(){

  let myName = document.getElementById("my-name"); 
  let userName = document.getElementById("user-name"); 
  let getName = document.getElementById("get-name");
  let userHeader = document.getElementById("my-header");

  function PerformGreeting(ev) {
    myName.innerHTML = userName.value;
	userHeader.innerHTML = userName.value;
	userHeader.classList.add =("header-background");
    ev.preventDefault();
  }

  getName.addEventListener("submit", PerformGreeting);
  
}());
