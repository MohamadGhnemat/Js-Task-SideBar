let darkModeBtn = document.querySelector(".header-1 .start .actions button");
darkModeBtn.onclick = function(){
 
    document.querySelector(".header-1 .start .actions button .fa-sun").classList.toggle("sun")
    document.querySelector(".header-1 .start .actions button .fa-moon").classList.toggle("moon")
    document.querySelector(".header-1 .start .actions button").classList.toggle("sun-moon")
    document.querySelector("body").classList.toggle("dark")
    document.querySelector("header .header-2 .jawwal-img ").classList.toggle("border-none")
   let arr = document.querySelectorAll("header .header-1 .start .social i.fa-brands")
   arr.forEach(function (e) {   
    e.classList.toggle("color-gray") 
   })

}

document.querySelector(".burgerBtn").onclick = function(){
    document.querySelector(".transform").classList.toggle("translateX")

    document.querySelector(".overlay").classList.toggle("d-block") 
    document.querySelector(".burger-icon").classList.toggle("d-none") 
    
    // document.querySelector(".x-icon").classList.toggle("d-block") 
    this.style.transform = "rotate(-1turn)" 
  
    
}

document.querySelector(".overlay .data .top i.x-icon2").onclick = function(){
    document.querySelector(".overlay").classList.toggle("d-block") 
    // document.querySelector(".x-icon").classList.toggle("d-block") 
    document.querySelector(".burger-icon").classList.toggle("d-none") 
    // document.querySelector(".data").classList.toggle("width-370px")
    document.querySelector(".data").classList.toggle("translateX")



} 