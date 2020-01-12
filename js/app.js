var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


let bookingPrice = document.querySelectorAll(".n3ii .a");
let bookingLodgePreview = document.querySelector(".n3i img");

let bookingPics = ["assets/img/rectangle8Copy.png", "assets/img/rectangle9Copy2@3x.png", "assets/img/rectangle9Copy3@3x.png", "assets/img/rectangle4Copy72@3x.png", "assets/img/rectangle4Copy73@2x.png"]

for (let i = 0; i < bookingPrice.length; i++) {
  bookingPrice[i].addEventListener("click", ()=>{
    bookingLodgePreview.src = bookingPics[i];
  })
}
