// Load the content of the clicked link via AJAX and replace the existing content
function loadPage(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var content = document.getElementById("content");
        content.style.opacity = 0; // Fade out the existing content
  
        setTimeout(function () {
          content.innerHTML = xhr.responseText;
          content.style.opacity = 1; // Fade in the new content
        }, 500); // Delay to allow the fade out effect to complete
      }
    };
    xhr.send();
  }
  
  // Handle click events on the navigation links
  var links = document.querySelectorAll("nav a");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (event) {
      event.preventDefault();
      var url = this.getAttribute("href");
      loadPage(url);
      history.pushState(null, null, url); // Update the URL in the address bar
    });
  }
  
  // Handle back/forward button navigation
  window.addEventListener("popstate", function () {
    var url = location.pathname.substring(1); // Get the URL without the leading "/"
    loadPage(url);
  });
  