$(document).ready(function () {
  $("#test-slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    nav: false,
    dots: true,
    loop: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
});
$(document).on("ready", function () {
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 500,
  });
});

$(document).ready(function () {
  $(".home-slides").owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    animateOut: 'fadeOut',
    autoplayTimeout: 1500,
    nav: false,
    dots: false,
    loop: true,
    responsiveClass: true,
  });
});

$(document).on("ready", function () {
  $(".lazy").slick({
    lazyLoad: "ondemand", // ondemand progressive anticipated
    infinite: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 500,
  });
});


$(document).ready(function(){
  $( "#registration").validate({
    rules: {
      fullname:{
        required: true,
      },
        
      email:{
          required: true,
      },
      date:{
        required: true,
    },
    time:{
      required: true,
  },
       phone: {
              required: true,
              digits: true,
              minlength: 10,
              maxlength: 10,
            },
             password: {
              required: true,
              minlength: 5,
            },
             address: {
              required: true,
            },
             check: {
              required: true,
            },   
    },
    messages:{
         fullname:{
           required: "Enter your fullname",
           },  
           date:{
            required: "Choose Your Correct Date",
            },  
           email:{
                 required: "Please enter email address",
                 email:"Please enter a valid email address"
                },
                phone: {
                 required: "Please enter phone number",
                 digits: "Please enter valid phone number",
                 minlength: "Phone number field accept only 10 digits",
                 maxlength: "Phone number field accept only 10 digits",
              }, 

           message:{
              required: "Write your message here",
              message: "Write your message here...."
           },
      },
  });
});


// scroll to section on nav menu click
$('#nav_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// scroll to section on offcanvas menu click
$('#offcanvas_ul').onePageNav({
	currentClass: 'active',
	changeHash: false,
	scrollSpeed: 25,
	scrollThreshold: 0.5,
	filter: '',
	easing: 'swing'
});

// offcanvas menu close and active on click

document.addEventListener("DOMContentLoaded", function(){
  var myOffcanvas = document.getElementById('offcanvasExample');
  var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
  document.getElementById("offcanvasbutton").addEventListener('click',function (e){
    e.preventDefault();
    e.stopPropagation();
    bsOffcanvas.toggle();
  });
});

// offcanvas menu close
$('.offcanvas-link').on( "click", function(){
  $('.close').click(); 
});

//   back to top

var btn = $('#backtotop');
$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});
btn.on('click', function scrollToTop(e){
    window.scrollTo(0, 0);
});