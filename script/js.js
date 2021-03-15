$('#burger').click(function(){
	$('.header__top-nav').toggleClass('header__top-nav-active');
	$(this).toggleClass('burger__active');
})

$('.teams__arrow-right').click(function(){
	let sliderBox = document.getElementById('teams__slider');
	let lastBlock = sliderBox.lastElementChild;
	console.log();
	sliderBox.insertBefore(lastBlock,sliderBox.children[0]);
})

$('.teams__arrow-left').click(function(){
	let sliderBox = document.getElementById('teams__slider');
	let firstBlock = sliderBox.firstElementChild;
	console.log();
	sliderBox.appendChild(firstBlock);
})


$(document).ready(function(){
  $('.comments__slider').slick({
    dots: false,
  infinite: true,
  speed: 400,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: $('.comments__arrow-left'),
  nextArrow: $('.comments__arrow-right'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        
      }
    },
    {
      breakpoint: 480,
      settings: {
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
});


