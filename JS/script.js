// <======== JS Program to Hide the Newsletter Container ========>
const newsletterContainer = document.querySelector("#newsletter-container");
const newsletterCloseBtn = document.querySelector("#newsletter-container .right-newsletter i");

newsletterCloseBtn.addEventListener("click", () => {
    newsletterContainer.classList.add("hide");
})


// <======== JS Function For Adding Footer-Alert ========>
const newsletterForm = document.querySelector("#newsletter-container .right-newsletter form");
const newsletterFormInput = document.querySelector("#newsletter-container .right-newsletter form input");
const newsletterAlert = document.querySelector("#newsletter-container-alert");
const newsletterAlertIcon = document.querySelector("#newsletter-container-alert .ri-close-line");

newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();
    newsletterFormInput.value = '';

    newsletterContainer.classList.add("hide");
    newsletterAlert.classList.add("show");
    newsletterAlertIcon.addEventListener("click", () => {
        newsletterAlert.classList.remove("show");
    })

    setTimeout(() => {
        newsletterAlert.classList.remove("show");
    }, 4000);
})


// <======== JS Program to Execute Owl-Carousel for Banner-Container ========>
$(function () {
    var owl = $("#banner-container .owl-carousel");
    owl.owlCarousel({
        margin: 0,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 8000,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
});


// <======== JS Program to Execute Owl-Carousel for Deals-Container ========>
$(function () {
    var owl = $("#deals-container .owl-carousel");
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            700: {
                items: 3
            },
            1000: {
                items: 4
            },
            1800: {
                items: 5
            }
        }
    });
});


// <======== JS Program to Execute Owl-Carousel for Product-Container ========>
$(function () {
    var owl = $("#products-container .owl-carousel");
    owl.owlCarousel({
        margin: 10,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        smartSpeed: 1500,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            700: {
                items: 4
            },
            1000: {
                items: 5
            },
            1800: {
                items: 6
            }
        }
    });
});