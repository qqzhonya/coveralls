$(function() {

	//
	// Sidebar menu
	//

	$(document).ready(function() {
		$('.prev-slider').slick('refresh');

		if($('.wrapper').hasClass('main-page')) {
			$('.sidebar-menu-btn').addClass('active');
			$('.sidebar-menu-wrap').addClass('active');
			$('body').addClass("sidebarOpen");
		}

		if($('body').hasClass("sidebarOpen") && $(window).width() < 991) {
			$('.sidebar-menu-btn').removeClass('active');
			$('.sidebar-menu-wrap').removeClass('active');
			$('.sidebar-menu').css({
				'display': 'none'
			});
			$('body').removeClass("sidebarOpen");
			$('.content').css({
				'padding-left' : '15px'
			});
			$('.prev-slider').slick('refresh');
		}

		initScrollnotion();
	});

	$(window).resize(function() {
		if($(window).width() < 991 && $('body').hasClass("sidebarOpen")) {
			$('.sidebar-menu-btn').removeClass('active');
			$('.sidebar-menu-wrap').removeClass('active');
			$('.sidebar-menu').css({
				'display': 'none'
			});
			$('body').removeClass("sidebarOpen");
			$('.prev-slider').slick('refresh');
		}

		initScrollnotion();
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
			$('body').addClass("sidebarOpen");
		} else {
			$('.sidebar-menu-wrap').removeClass('active');
			$('body').removeClass("sidebarOpen");
		}
	});

	//
	// Sidebar menu end
	//

	//
	// Mobile menu
	//

	$('.top-line-menu-btn').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$('body').addClass('modal-active');
			$('.sidebar').fadeIn();
			$('.sidebar-menu').fadeIn();
			$('.sidebar-menu-wrap').addClass('active');
		} else {
			$('body').removeClass('modal-active');
			$('.sidebar').fadeOut();
			$('.sidebar-menu').fadeOut();
			$('.sidebar-menu-wrap').removeClass('active');
		}
	});

	//
	// Mobile menu end
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
		infinite: false,
		responsive: [
			{
				breakpoint: 1220,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 610,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 410,
				settings: {
					slidesToShow: 1,
				}
			}
		]
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
		responsive: [
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 3,
					vertical: false,
					verticalSwiping: false,
				}
			},
			{
				breakpoint: 380,
				settings: {
					slidesToShow: 2,
					vertical: false,
					verticalSwiping: false,
				}
			},
		],
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
		initScrollnotion();
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
		responsive: [
			{
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					vertical: false,
					verticalSwiping: false,
				}
			},
		],
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
	// Table heading dropdown
	//

	$('.table-elem-toggle').click(function() {
		$(this).toggleClass('active');

		if($(this).hasClass('active')) {
			$(this).parent().find('.table-heading-dropdown').show();
		} else {
			$(this).parent().find('.table-heading-dropdown').hide();
		}
	});

	//
	// Table heading dropdown end 
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
				weekday: 'short'
			},
			headerToolbar: {
				left: 'title',
				right: 'timeGridDay,timeGridWeek,dayGridMonth'
			},
			handleWindowResize: true,
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

	//
	// Arrow help 
	//

	function  initScrollnotion() {
		var element = $('.scroll-elem');

		element.each(function() {
			if($(this).prop('scrollWidth') > $(this).prop('clientWidth')) {
				$(this).find('.table-more-info-arrow').addClass('active');
				$(this).find('.top-line-card-more-info').addClass('active');
			} else {
				$(this).find('.table-more-info-arrow').removeClass('active');
				$(this).find('.top-line-card-more-info').removeClass('active');
			};

			element.scroll(function() {
				var scrollPosition = $(this).scrollLeft();
				var scrollBoxSize  = $(this).width() / 100;

				if(scrollPosition > scrollBoxSize) {
					$(this).find('.table-more-info-arrow').removeClass('active');
					$(this).find('.top-line-card-more-info').removeClass('active');
				} else {
					$(this).find('.table-more-info-arrow').addClass('active');
					$(this).find('.top-line-card-more-info').addClass('active');
				}
			});
		});
	}
	
	//
	// Arrow help end
	//

	//
	// Shipment application file
	//

	$('#shipment_file').on("change",  function() {
		var name = $(this)[0].files[0].name;

		if(name.length > 15) {
			$(this).parent().find(".shipment-form-doc-file-name").text(name.substring(0, 5) + '...' + name.slice(name.length - 6));
		} else {
			$(this).parent().find(".shipment-form-doc-file-name").text(name);
		}

		$('.shipment-form-doc-file').addClass('active');
	});

	$('.shipment-form-doc-file-delete').click(function() {
		$('#shipment_file').val();
		$("#shipment_file").parent().find(".shipment-form-doc-file-name").empty();
		$('.shipment-form-doc-file').removeClass('active');
	})

	//
	// Shipment application file end
	//

	//
	// Shipment date
	//

	$('.shipment-form-date-input').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		minDate: 0
	});

	//
	// Shipment date end 
	//

});
