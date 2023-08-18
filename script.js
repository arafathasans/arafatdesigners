$(document).ready(function() {
  // Add the "navbar-shrink" class to the navbar when the page is scrolled down
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#navbar").addClass("navbar-shrink");
    } else {
      $("#navbar").removeClass("navbar-shrink");
    }
  });

  // Toggle search bar visibility
  $("#searchBtn").click(function() {
    $(".form-inline").toggleClass("search-visible");
  });
});

  



  // Wait for the document to be fully loaded
  document.addEventListener("DOMContentLoaded", function() {
    // Set the time interval (in milliseconds) for slide change
    const interval = 5000; // Change slide every 5 seconds

    // Get all carousel items
    const carouselItems = document.querySelectorAll(".carousel-item");

    // Initialize the slide index and start the automatic slideshow
    let slideIndex = 0;
    showSlide(slideIndex);

    // Function to show the current slide and hide others
    function showSlide(index) {
      carouselItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    }

    // Function to move to the next slide
    function nextSlide() {
      slideIndex++;
      if (slideIndex >= carouselItems.length) {
        slideIndex = 0;
      }
      showSlide(slideIndex);
    }

    // Function to move to the previous slide
    function prevSlide() {
      slideIndex--;
      if (slideIndex < 0) {
        slideIndex = carouselItems.length - 1;
      }
      showSlide(slideIndex);
    }

    // Start the automatic slideshow
    let slideInterval = setInterval(nextSlide, interval);

    // Add event listeners to pause and resume the slideshow when hovering over the carousel
    const carousel = document.querySelector("#carouselExampleIndicators");
    carousel.addEventListener("mouseenter", () => {
      clearInterval(slideInterval);
    });

    carousel.addEventListener("mouseleave", () => {
      slideInterval = setInterval(nextSlide, interval);
    });

    // Add event listeners to control the slideshow with navigation buttons
    const prevButton = document.querySelector(".carousel-control-prev");
    const nextButton = document.querySelector(".carousel-control-next");

    prevButton.addEventListener("click", prevSlide);
    nextButton.addEventListener("click", nextSlide);
  });


  // Function to start the carousel and set the automatic slide change interval
  function startCarousel() {
    $('#header-carousel').carousel({
      interval: 5000 // Set the time interval (in milliseconds) for automatic slide change
    });
  }

  // Function to pause the carousel when the slide is hovered or touched
  function pauseCarousel() {
    $('#header-carousel').carousel('pause');
  }

  // Function to resume the carousel when the slide is no longer hovered or touched
  function resumeCarousel() {
    $('#header-carousel').carousel('cycle');
  }

  // Function to initialize the carousel and add event listeners
  function initCarousel() {
    startCarousel();

    // Pause carousel on slide hover
    $('.carousel-item').on('mouseenter touchstart', function() {
      pauseCarousel();
    });

    // Resume carousel on slide mouseout
    $('.carousel-item').on('mouseleave touchend', function() {
      resumeCarousel();
    });
  }

  // Wait for the document to be fully loaded before initializing the carousel
  $(document).ready(function() {
    initCarousel();
  });



// Wait for the document to be fully loaded
$(document).ready(function () {
  // Filter the projects when a filter option is clicked
  $('.portfolio-flters li').on('click', function () {
    $('.portfolio-flters li').removeClass('filter-active');
    $(this).addClass('filter-active');

    const filterValue = $(this).data('filter');
    $('.portfolio-item').hide();

    if (filterValue === '*') {
      $('.portfolio-item').show();
    } else {
      $(filterValue).show();
    }
  });

  // Initialize lightbox plugin for image previews
  $('.glightbox').each(function () {
    $(this).attr('data-gallery', $(this).data('gallery'));
  });
});


