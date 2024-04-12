console.log("Hello World!");

window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});

// -- LIGHT-BOX JS > START --
let lightboxDiv = document.getElementById("lightbox-div");
let lightboxImage = document.getElementById("lightbox-image");
let lightboxIndex = 0;
let lightboxImages = [
  "./assets/pexels-elina-fairytale-1.jpg",
  "./assets/pexels-elina-fairytale-2.jpg",
  "./assets/pexels-elina-fairytale-3.jpg",
  "./assets/pexels-elina-fairytale-4.jpg",
  "./assets/pexels-elina-fairytale-5.jpg",
  "./assets/pexels-elina-fairytale-6.jpg",
];
let lightboxFadeSpeed = 1.0; // How fast the fade happens in seconds.

function SetupLightbox() {
  let lightboxBroken = false;

  // Get and set the elements to the variables.
  lightboxDiv = document.getElementById("lightbox-div");
  lightboxImage = document.getElementById("lightbox-image");

  // Check to make sure that none of them are broken. If so, report.
  if (lightboxDiv == null) {
    console.error(
      "document.getElementById('lightbox-div') could not be found!"
    );
    lightboxBroken = true;
  }
  if (lightboxImage == null) {
    console.error(
      "document.getElementById('lightbox-image') could not be found!"
    );
    lightboxBroken = true;
  }
  return !lightboxBroken;
}

// Lightbox Functions
function ShowLightbox(index) {
  // On Image Clicked
  // Setup just in case it didn't find Lightbox.
  if (lightboxDiv == null || lightboxImage == null) {
    if (!SetupLightbox()) {
      // If the elements are broken...
      return;
    }
  }
  // Wrap Selection.
  if (index > 5) {
    index = 0;
  } else if (index < 0) {
    index = 5;
  }

  // Set the index and image.
  lightboxIndex = index;
  lightboxImage.src = lightboxImages[index];

  // If the lightbox is hidden, show it.
  if (lightboxDiv.hidden) {
    $("#lightbox-div").fadeIn(1000);
  }
}
function PreviousLightbox() {
  // On Left Arrow Clicked
  ShowLightbox(lightboxIndex - 1);
}
function NextLightbox() {
  // On Right Arrow Clicked
  ShowLightbox(lightboxIndex + 1);
}
// -- LIGHT-BOX JS > END --

// -- LIGHT-BOX EXTRA JS
$(document).ready(function () {
  $(".lightbox-div").ready(function () {
    $(".lightbox-div").css("display", "flex").hide().fadeOut(0);
  });

  $(".portfolio-box").click(function () {
    $("#lightbox-div").fadeIn(lightboxFadeSpeed * 1000);
  });
  $("#lightbox-close").click(function () {
    $(".lightbox-div").fadeOut(lightboxFadeSpeed * 1000);
  });
});

// -- LIGHT-BOX EXTRA JS > END --

//Login Page
$(document).ready(function() {
    //Declare the values for username and password.
    let username = "username";
    let password = "password";

    //Call a function when the submit button is clicked.
    $('#loginButton').click( function(event) {
        event.preventDefault();
        //Display an error message as long as the username or password is incorrect.
        if($('#usernameField').val() != username || $('#passwordField').val() != password) {
            alert("Incorrect username or password. Please try again.");
        }
        //If username and password are correct, go to account page
        else {
          window.location.href="account.html";
        }
    })
});

// Define arrays of random values for profile information
const names = [
  "John Doe",
  "Jane Smith",
  "David Johnson",
  "Emily Brown",
  "Michael Wilson",
  "Sarah Davis",
  "Robert Miller",
  "Jessica Martinez"
];

const professions = [
  "Web Developer",
  "Graphic Designer",
  "Yoga Instructor",
  "Software Engineer",
  "Digital Marketer",
  "Fitness Trainer",
  "Photographer",
  "Musician"
];

const emails = [
  "john.doe@example.com",
  "jane.smith@example.com",
  "david.johnson@example.com",
  "emily.brown@example.com",
  "michael.wilson@example.com",
  "sarah.davis@example.com",
  "robert.miller@example.com",
  "jessica.martinez@example.com"
];

const phoneNumbers = [
  "123-456-7890",
  "987-654-3210",
  "555-123-4567",
  "777-888-9999",
  "444-555-6666",
  "111-222-3333",
  "999-888-7777",
  "666-777-8888"
];

// Function to randomly select an item from an array
function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Function to update profile information dynamically
function updateProfile() {
  const nameElement = document.querySelector('.profile-head h5');
  const professionElement = document.querySelector('.profile-head h6');
  const emailElement = document.querySelector('.col-md-6 p:nth-of-type(3)');
  const phoneElement = document.querySelector('.col-md-6 p:nth-of-type(4)');

  nameElement.textContent = getRandomItem(names);
  professionElement.textContent = getRandomItem(professions);
  emailElement.textContent = getRandomItem(emails);
  phoneElement.textContent = getRandomItem(phoneNumbers);
}

// Execute the updateProfile function when the page is loaded or refreshed
window.addEventListener('load', updateProfile);