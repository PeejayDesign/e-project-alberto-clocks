///////// color change on scroll///////
function scrollValue() {
    var navbar = document.getElementById('navBar');
    var scroll = window.scrollY;
    if (scroll < 30) {
        navbar.classList.remove('navcolor2');
    } else {
        navbar.classList.add('navcolor2');
    }
}
window.addEventListener('scroll', scrollValue);

////////// section fade in//////
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var tags = $(".tag");
  
    for (var i = 0; i < tags.length; i++) {
      var tag = tags[i];
      if ($(tag).position().top < pageBottom) {
        $(tag).addClass("visible");
      } else {
        $(tag).removeClass("visible");
      }
    }
  });

  // Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/////////slider////
const slider = document.querySelector('.slider');
const innerSlider = document.querySelector('.inner-slider');
const prev = document.querySelector('.slider-prev');
const next = document.querySelector('.slider-next');

let dragged = false;
let startX;
let x;

// Desktop Version for slider

slider.addEventListener("mousedown", e => {
    dragged = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    slider.style.cursor = "grabbing";
});

slider.addEventListener("mouseenter", () => {
    slider.style.cursor = "grab";
});

slider.addEventListener("mouseup", () => {
    slider.style.cursor = "grab";
    dragged = false;
});

slider.addEventListener("mousemove", e => {
    if (!dragged) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

});

// Mobile Version for slider

slider.addEventListener('touchstart', e => {
    dragged = true;
    startX = e.targetTouches[0].clientX - innerSlider.offsetLeft;

    checkProbs();

}, {passive: true});

slider.addEventListener('touchmove', e => {
    if (!dragged) return;
    x = e.targetTouches[0].clientX;

    innerSlider.style.left = `${x - startX}px`;

    checkProbs();

}, {passive: true});

prev.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = parseInt(innerSliderLeft.replace('px', '')) + 265 + 'px';

    checkProbs();
});

next.addEventListener('click', () => {
    let innerSliderLeft = innerSlider.style.left;
    innerSlider.style.left = innerSliderLeft.replace('px', '') - 265 + 'px';

    checkProbs();
});

const checkProbs = () => {
    let outer = slider.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0)
        innerSlider.style.left = "-10px";

    if (inner.right < outer.right)
        innerSlider.style.left = `-${inner.width - outer.width - 10}px`;
}

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtnn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






///////////




