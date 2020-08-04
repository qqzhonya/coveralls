$(function() {

	//
	// Sidebar menu
	//

	$(document).ready(function() {
		if($('.wrapper').hasClass('main-page')) {
			$('.sidebar-menu-btn').addClass('active');
			$('.sidebar-menu-wrap').addClass('active');
		}
	});

	$('.sidebar-menu-btn').click(function() {
		$(this).toggleClass('active');

		$('.sidebar-menu').animate({width: 'toggle'});

		if($(this).hasClass('active')) {
			setTimeout(function() {
				$('.sidebar-menu-wrap').addClass('active');
			}, 350);
			$('.content').css('padding-left','495px');
		} else {
			$('.sidebar-menu-wrap').removeClass('active');
			$('.content').css('padding-left','175px');

			$('.prev-slider').slick({
				slidesToShow: 5,
			});
		}
	});

	//
	// Sidebar menu end
	//

	//
	// Sidebar nav dropdown
	//

	$('.sidebar-nav-elem-wrap').click(function() {
		var sidebarElem = $(this).parent();

		sidebarElem.toggleClass('active').siblings().removeClass('active');
		
		$('.sidebar-nav-dropdown').slideUp();

		if(sidebarElem.hasClass('active')) {
			sidebarElem.children('.sidebar-nav-dropdown').slideDown();
		}
	});

	//
	// Sidebar nav dropdown end 
	//

	//
	// Custom scrollbar
	//

	$('.sidebar').mCustomScrollbar({
		axis: 'y',
	});

	$('.sidebar-menu').mCustomScrollbar({
		axis: 'y',
	});

	//
	// Custom scrollbar end
	//

	//
	// Main page preview slider
	//

	$('.prev-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: true,
		loop: false,
		nav: false,
		infinite: false
	});

	//
	// Main page preview slider end 
	//

	//
	// Custom select
	//

	$('.custom-select').each(function() {
		$('.custom-select').select2({
			minimumResultsForSearch: Infinity,
			width: 'resolve',
			closeOnSelect: false
		});
	});

	//
	// Custom select end 
	//
	
	//
	// Product slider
	//

	$('.product-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		fade: true,
		asNavFor: '.product-slider-nav'
	});

	$('.product-slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.product-slider',
		dots: false,
		arrows: false,
		centerMode: false,
		focusOnSelect: true,
		vertical: true,
		verticalSwiping: true,
	});

	//
	// Product slider nav
	//

	//
	// Block hide info
	//
	
	$('.content-hide-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$(this).parent().parent().find('.content-elem-bottom').slideUp();
		} else {
			$(this).parent().parent().find('.content-elem-bottom').slideDown();
		}
	});

	//
	// Block hide info
	// 
});
