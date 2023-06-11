
document.addEventListener("DOMContentLoaded", function() {

    var sliderImages = document.querySelectorAll(".slider img");
    var currentImage = 0;
  
    function showNextImage() {
      sliderImages[currentImage].style.display = "none";
      currentImage = (currentImage + 1) % sliderImages.length;
      sliderImages[currentImage].style.display = "block";
    }

    setInterval(showNextImage, 2000);
  });
  