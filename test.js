// This function will validate the email address entered by the user.
function validateEmail(email) {
  var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
  return re.test(email);
}

// This function will be called when the user submits the form.
function submitForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Validate the user input.
  if (name == "" || email == "" || message == "") {
    alert("Please fill out all of the fields.");
    return;
  }

  // If the input is valid, submit the form.
  document.getElementById("form").submit();
}
// This function will create a slideshow of the images in the `images` array.
function slideshow() {
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  // Set the first slide to be visible.
  slides[currentSlide].style.display = "block";

  // Create a timer that will advance the slideshow every 5 seconds.
  var timer = setInterval(function() {
    currentSlide++;
    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    // Hide the current slide and show the next slide.
    slides[currentSlide - 1].style.display = "none";
    slides[currentSlide].style.display = "block";
  }, 5000);
}

// Call the slideshow function when the page loads.
window.onload = slideshow;