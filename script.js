document.addEventListener("DOMContentLoaded", function() {
    var imageContainer1 = document.getElementById("image1");
    var image1 = imageContainer1.querySelector("img");
  
    var imageContainer2 = document.getElementById("image2");
    var image2 = imageContainer2.querySelector("img");

    var imageContainer3 = document.getElementById("image3");
    var image3 = imageContainer3.querySelector("img");
    
    var imageContainer4 = document.getElementById("image4");
    var image4 = imageContainer4.querySelector("img");
    
    var imageContainer5 = document.getElementById("image5");
    var image5 = imageContainer5.querySelector("img");

    var imageContainer6 = document.getElementById("image6");
    var image6 = imageContainer6.querySelector("img");

    var imageContainer7 = document.getElementById("image7");
    var image7 = imageContainer7.querySelector("img");

    var imageContainer8 = document.getElementById("image8");
    var image8 = imageContainer8.querySelector("img");

    var imageContainer9 = document.getElementById("image9");
    var image9 = imageContainer9.querySelector("img");



    image1.addEventListener("click", function() {
      imageContainer1.classList.toggle("enlarged");
    });
  
    image2.addEventListener("click", function() {
      imageContainer2.classList.toggle("enlarged");
    });

    image3.addEventListener("click", function() {
        imageContainer3.classList.toggle("enlarged");
      });

    image4.addEventListener("click", function() {
        imageContainer4.classList.toggle("enlarged");
      });

    image5.addEventListener("click", function() {
        imageContainer5.classList.toggle("enlarged");
      });

      image6.addEventListener("click", function() {
        imageContainer6.classList.toggle("enlarged");
      });

    image7.addEventListener("click", function() {
        imageContainer7.classList.toggle("enlarged");
      });

    image8.addEventListener("click", function() {
        imageContainer8.classList.toggle("enlarged");
      });
    
    image9.addEventListener("click", function() {
        imageContainer9.classList.toggle("enlarged");
      });
    
  });
  