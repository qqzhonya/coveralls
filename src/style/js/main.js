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
			width: 'resolve'
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
			$(this).parent().parent().find('.content-hide').slideUp();
			$(this).parent().addClass('hide');
			$(this).text("Показать +")
		} else {
			$(this).parent().parent().find('.content-hide').slideDown();
			$(this).parent().removeClass('hide');
			$(this).text("Скрыть —")
		}

		if($(this).hasClass('product-parcel-hide-btn')) {
			if($(this).hasClass('active')) {
				$('.product-parcel-elem').addClass('active');
			} else {
				$('.product-parcel-elem').removeClass('active');
			}
		} 

	});

	//
	// Block hide info
	//
	
	//
	// Product info tab
	// 

	$('ul.product-info-tab-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.product-info-tab').find('div.product-info-tab-elem').removeClass('active').eq($(this).index()).addClass('active');
  });

	//
	// Product info tab end
	//

	//
	// Order amount row
	//

	$('.order-amount-table-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$(this).parent().parent().addClass('active');
		} else {
			$(this).parent().parent().removeClass('active');
		}
	});

	//
	// Order amount row end
	//

	//
	// Order amount input
	//

	$('.order-amount-table-input-arrow').click(function() {
		if($(this).hasClass('minus')) {
			var $input = $(this).parent().find('input');
			var count = parseInt($input.val()) - 1;
			count = count < 1 ? 0 : count;
			$input.val(count);
			$input.change();
			return false;
		} else if($(this).hasClass('plus')) {
			var $input = $(this).parent().find('input');
			$input.val(parseInt($input.val()) + 1);
			$input.change();
			return false;
		}
	})

	//
	// Order amount input end
	//

	//
	// Order list 
	//

	$('.order-list-main-row').click(function() {
		$(this).parent().toggleClass('active').siblings().removeClass('active');

		$('.order-list-sublist').slideUp();

		if($(this).parent().hasClass('active')) {
			$(this).parent().find('.order-list-sublist').slideDown();
		}
	});

	//
	// Order list end
	//

	//
	// Order prev slider
	//

	$('.order-product-prev-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
	});

	//
	// Order prev slider end 
	//
});
