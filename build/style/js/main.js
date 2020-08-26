$(function() {

	//
	// Sidebar menu
	//

	$(document).ready(function() {
		if($('.wrapper').hasClass('main-page')) {
			$('.sidebar-menu-btn').addClass('active');
			$('.sidebar-menu-wrap').addClass('active');
			$('body').addClass("sidebarOpen");
		}
	});

	$('.sidebar-menu-btn').click(function() {
		$(this).toggleClass('active');

		$('.sidebar-menu').animate({width: 'toggle'});

		$('.prev-slider').slick('refresh');
		$('.order-product-prev-slider').slick('refresh');
		$('.product-slider').slick('refresh');
		$('.product-slider-nav').slick('refresh');

		if($(this).hasClass('active')) {
			setTimeout(function() {
				$('.sidebar-menu-wrap').addClass('active');
			}, 350);
			$('.content').css('padding-left','415px');
			$('body').addClass("sidebarOpen");
		} else {
			$('.sidebar-menu-wrap').removeClass('active');
			$('.content').css('padding-left','175px');
			if($(window).width() < 1280) {
				$('.content').css('padding-left','100px');
			}
			$('body').removeClass("sidebarOpen");
		}
	});

	//
	// Sidebar menu end
	//

	//
	// Adaptive view when sidebar open
	//
	
	// $(window).resize(function() {
	// 	if($('body').hasClass('sidebarOpen')) {
	// 		if($(window).width() < 1220) {
	// 			$('prev-slider').slick({
	// 				responsive: [
	// 					{
	// 						breakpoint: 1220,
	// 						settings: {
	// 							slidesToShow: 3,
	// 						}
	// 					}
	// 				]
	// 			});
	// 			$('.prev-slider').slick('refresh');
	// 			$('body').css({'background-color' : '#fff'})
	// 		}
			
	// 	};
	// });

	//
	// Adaptive view when sidebar open end 
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
	// Top line info close
	//

	$('.top-line-info-close').click(function() {
		$('.top-line-info').slideUp();
	});

	//
	// Top line info close end
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

	if($('.sidebar-menu-btn').hasClass('active')) {
		$('.product-slider-nav').slick({
			responsive: [
				{
					breakpoint: 1300,
					settings: {
						vertical: false,
						verticalSwiping: false,
					}
				},
			],
		});
	}

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

	//
	// Orders list 
	//

	$('.orders-list-title').click(function() {
		$(this).parent().toggleClass('active').siblings().removeClass('active');

		$('.orders-list-info').slideUp();

		if($(this).parent().hasClass('active')) {
			$(this).parent().find('.orders-list-info').slideDown();
		}
	})

	//
	// Orders list end
	//

	//
	// Orders list more
	//
	
	$('.orders-list-more').on('click', function (e) {
		e.stopPropagation();
	});

	$(window).click(function() {
		$('.orders-list-more').removeClass('active');
		$('.orders-list-more-dropdown').removeClass('active');
	});

	$('.orders-list-more').click(function() {
		$(this).toggleClass('active');

		var bottomSpace = $(this).offset().top + $(this).outerHeight();
		var dropdown = $(this).next('.orders-list-more-dropdown');
		$(dropdown).removeClass('active');

		if($(this).hasClass('active')) {
			$(dropdown).addClass('active');
			$(document).find('.orders-list-more').not($(this)).removeClass('active');
			$(document).find('.orders-list-more-dropdown').not($(this).next('.orders-list-more-dropdown')).removeClass('active');

			if ((bottomSpace + $(dropdown).outerHeight()) > $(".content").height()) {
				$(dropdown).css('top', $(dropdown).height() * (-1));
			}
		} 
		
	});

	//
	// Orders list more end 
	//

	//
	// Clear search 
	//

	$('.company-search-input-clear').click(function() {
		$(".company-search-input").val("");
		$(".company-search-input").focus();
	});

	//
	// Clear search end
	//

	//
	//  Calendar
	//

	function initCalendar() {
		var calendarEl = document.getElementById('calendar');
		var calendar = new FullCalendar.Calendar(calendarEl, {
			initialView: 'dayGridMonth',
			locale: 'ru',
			height: 936,
			dayHeaderFormat: {
				weekday: 'long'
			},
			headerToolbar: {
				left: 'title',
				right: 'timeGridDay,timeGridWeek,dayGridMonth'
			},
			handleWindowResize: true
		});

		calendar.render();

		if($('body').hasClass('sidebarOpen')) {
			calendar.updateSize();
		}
	}

	if($('#calendar').length) {
		initCalendar();
	} 

	//
	// Calendar end
	//

});
