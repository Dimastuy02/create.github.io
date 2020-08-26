
$('.sec_4-items').slick({
	prevArrow: '<i class="fa fa-arrow-left slick-btn" aria-hidden="true"></i>',
	nextArrow: '<i class="fa fa-arrow-right slick-btn" aria-hidden="true"></i>',
  slidesToShow: 1,
  slidesToScroll: 1, 
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 5000,
  adaptiveHeight: true
});

var modal = document.querySelector("#modal"),
	closeBtn = document.querySelector("#close"),
	openBtn = document.querySelector("#call"),
	openBtnMob = document.querySelector("#call-mob");

	function closePopup() {
		modal.style.display = "none";
	}

	function openPopup() {
		modal.style.display = "block";
	}

	openBtn.addEventListener("click", openPopup);
	openBtnMob.addEventListener("click", openPopup);
	closeBtn.addEventListener("click", closePopup);