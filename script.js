console.log('Hello World!')

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// -- LIGHT-BOX JS > START --
let lightboxDiv = document.getElementById('lightbox-div')
let lightboxImage = document.getElementById('lightbox-image')
let lightboxIndex = 0
let lightboxImages = [
    './assets/pexels-elina-fairytale-1.jpg',
    './assets/pexels-elina-fairytale-2.jpg',
    './assets/pexels-elina-fairytale-3.jpg',
    './assets/pexels-elina-fairytale-4.jpg',
    './assets/pexels-elina-fairytale-5.jpg',
    './assets/pexels-elina-fairytale-6.jpg',
]
let lightboxFadeSpeed = 1.0 // How fast the fade happens in seconds.

function SetupLightbox() {
    let lightboxBroken = false

    // Get and set the elements to the variables.
    lightboxDiv = document.getElementById('lightbox-div')
    lightboxImage = document.getElementById('lightbox-image')

    // Check to make sure that none of them are broken. If so, report.
    if (lightboxDiv == null) {
        console.error('document.getElementById(\'lightbox-div\') could not be found!')
        lightboxBroken = true
    }
    if (lightboxImage == null) {
        console.error('document.getElementById(\'lightbox-image\') could not be found!')
        lightboxBroken = true
    }
    return !lightboxBroken
}


// Lightbox Functions
function ShowLightbox(index){ // On Image Clicked
    // Setup just in case it didn't find Lightbox.
    if (lightboxDiv == null || lightboxImage == null) {
        if (!SetupLightbox()) { // If the elements are broken...
            return;
        }
    }
    // Wrap Selection.
    if (index > 5) { index = 0; }
    else if (index < 0) { index = 5; }

    // Set the index and image.
    lightboxIndex = index
    lightboxImage.src = lightboxImages[index]

    // If the lightbox is hidden, show it.
    if (lightboxDiv.hidden) {
        $('#lightbox-div').fadeIn(1000)
    }
}
function PreviousLightbox() { // On Left Arrow Clicked
    ShowLightbox(lightboxIndex - 1)
}
function NextLightbox() { // On Right Arrow Clicked
    ShowLightbox(lightboxIndex + 1)
}
// -- LIGHT-BOX JS > END --