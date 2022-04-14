(function ($) {
	"use strict";


	////////////////////////////////////////////////////
	// 02. Mobile Menu Js
	$('#mobile-menu').meanmenu({
		meanMenuContainer: '.mobile-menu',
		meanScreenWidth: "991",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	///////////////////////////////////////////////////
	// 02. Mobile Menu 2 Js
	$('#mobile-menu-2').meanmenu({
		meanMenuContainer: '.mobile-menu-2',
		meanScreenWidth: "1199",
		meanExpand: ['<i class="fal fa-plus"></i>'],
	});

	////////////////////////////////////////////////////
    // 03. Sidebar Js
	$(".sidebar-toggle-btn").on("click", function () {
		$(".sidebar__area").addClass("sidebar-opened");
		$(".body-overlay").addClass("opened");
	});
	$(".sidebar__close-btn").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

	////////////////////////////////////////////////////
	// 04. Body overlay Js
	$(".body-overlay").on("click", function () {
		$(".sidebar__area").removeClass("sidebar-opened");
		$(".body-overlay").removeClass("opened");
	});

    	////////////////////////////////////////////////////
	// 05. Search Js
	$(".search-toggle").on("click", function () {
		$(".search__area").addClass("opened");
	});
	$(".search-close-btn").on("click", function () {
		$(".search__area").removeClass("opened");
	});


    ////////////////////////////////////////////////////
	// 06. Sticky Header Js
	$(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 300) {
            $("#header-sticky").removeClass("sticky");
        } else {
            $("#header-sticky").addClass("sticky");
        }

    });


})(jQuery);