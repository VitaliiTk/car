$(function () {

	$('.main__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		fade: true,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					dots: false
				}
			},
		]
	});

	$('.reviews__slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1141,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 846,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 585,
				settings: {
					slidesToShow: 1,
				}
			},
		]
	});

	$('.menu__btn').on('click', function () {
		$('.menu__list').toggleClass('menu__list--active')
	});

});

$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});