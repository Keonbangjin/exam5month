$(document).on('shopify:section:load', function(e){ 
  $('#' + e.target.id).find('[data-section]').sectionJs();
}).ready(function() {
  $('[data-section]').each(function(){ $(this).sectionJs() });
});

$.fn.sectionJs = function(){
  var $this = this;
  if($this.data('section') == "SlideShow") {
    $this.find('.main-slider').SlideShow();
  }else if($this.data('section') == "TabProduct") {
    $this.find('.product-slider-init').TabProduct();
  }else if($this.data('section') == "FeatureCollection") {
    $this.find('.product-slider-init-2').FeatureCollection();
  }else if($this.data('section') == "LatestBlog") {
    $this.find('.blog-init').LatestBlog();
  }else if($this.data('section') == "BrandLogo") {
    $this.find('.brand-init').BrandLogo();
  }else if($this.data('section') == "CategoryProduct") {
    $this.find('.popular-slider-init').CategoryProduct();
  }else if($this.data('section') == "FeatureCollection_2") {
    $this.find('.featured-init').FeatureCollection_2();
  }else if($this.data('section') == "ListCollection") {
    $this.find('.product-slider-init-3').ListCollection();
  }else if($this.data('section') == "Instagram") {
    $this.InstagramSection();
  }else if($this.data('section') == "CustomCollection") {
    $this.find('.product-slider-init-4').CustomCollection();
  }else if($this.data('section') == "RelatedCollection") {
    $this.find('.product-slider-init-5').RelatedCollection();
  }else if($this.data('section') == "single_product") {
    $this.single_product();
  }else{}   
}


   

$.fn.SlideShow = function() {
  var $SlideShowVAR = this;
  $SlideShowVAR.slick({
  	speed: 800,dots: true,
    fade: true,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 767,
    }]
  }).slickAnimation();
  
};

   


$.fn.TabProduct = function() {
  var $TabProductVAR = this;
  $TabProductVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};


   


$.fn.FeatureCollection = function() {
  var $FeatureCollectionVAR = this;
  $FeatureCollectionVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

/*--------------------------
    Laest Blog
---------------------------- */

$.fn.LatestBlog = function() {
  var $LatestBlogVAR = this;
  $LatestBlogVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

   


$.fn.BrandLogo = function() {
  var $BrandLogoVAR = this;
  $BrandLogoVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};



$.fn.CategoryProduct = function() {
  var $CategoryProductVAR = this;
  $CategoryProductVAR.slick({
  	speed: 1000,dots: true,
    arrows: false,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

   


$.fn.FeatureCollection_2 = function() {
  var $FeatureCollection_2VAR = this;
  $FeatureCollection_2VAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

   


$.fn.ListCollection = function() {
  var $ListCollectionVAR = this;
  $ListCollectionVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

/*--------------------------
   Instgram active
---------------------------- */

$.fn.InstagramSection = function(){
  var activation = this.find('[data-username]'),
      activeId = activation.attr('id'),
      clientUsername = activation.attr('data-username'),
      instagramHastag = activation.attr('data-hashtag'),
      ItemsLimit = activation.attr('data-limit'),
      imageSize = activation.attr('data-size'),
      instaslider = ".instagram-carousel";

  $.instagramFeed({
    'tag': instagramHastag,
    'username': clientUsername,
    'container': "#"+activeId,
    'display_profile': false,
    'display_biography': false,
    'display_gallery': true,
    'styling': false,
    'items': ItemsLimit,
    'margin': 1,
    'image_size': imageSize
  });


};


/*--------------------------
    Custom Collection
---------------------------- */

$.fn.CustomCollection = function() {
  var $CustomCollectionVAR = this;
  $CustomCollectionVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};



/*--------------------------
    Related Collection
---------------------------- */

$.fn.RelatedCollection = function() {
  var $RelatedCollectionVAR = this;
  $RelatedCollectionVAR.slick({
  	speed: 1000,dots: false,
    arrows: true,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
};

// single Product Carousel
$.fn.single_product = function() {

  var $ProductSyncNav = $(".product-sync-nav");
  $ProductSyncNav.slick({
    dots: false,
    infinite: false,
    arrows: true,
    speed: 1000,
    prevArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',
    nextArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
  });
  
      // prodct details slider active
  var $ProductLargeSlider = $(".product-large-slider");
  $ProductLargeSlider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,prevArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    nextArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',asNavFor: '.pro-nav'
  });
  // product details slider nav active
  var $ProNav = $(".pro-nav");
  $ProNav.slick({
    slidesToShow: 4,
    asNavFor: '.product-large-slider',
    speed: 1000,
    centerPadding: 0,
    focusOnSelect: true,prevArrow: '<button class="slick-next"><i class="ion-chevron-right"></i></button>',
    nextArrow: '<button class="slick-prev"><i class="ion-chevron-left"></i></button>',responsive: [ {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 767,
      settings: {
        slidesToShow: 4,
      }
    }, {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
      }
    } , {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      }
    } 
    ]
  });
  $("img.lazyload").lazyload();
  
  //Single Product Dynamic Checkout Button
      $('#buy-now-check').on('click', function(){
        $(this).parent('.dynmiac_checkout--button').toggleClass('disabled');
      });
    
  
  };




(function($) {
  "use strict";

  jQuery(document).ready(function(){


 // All jQuery activation code paste here
    
  var searchToggle = $(".search-toggle"),
      closeA = $(".scale"),
      closeB = $(".searching button"),
      cBody = $("body"),
      closeScale = closeA.add(closeB);

  if (searchToggle.length > 0) {
    searchToggle.on("click", function () {
      cBody.toggleClass("open");
      return false;
    });
  }

  if (closeScale.length > 0) {
    closeScale.on("click", function () {
      cBody.removeClass("open");
      return false;
    });
  }

  $(".close").on("click", function () {
    $("body").removeClass("open");
  }); 

  var $window = $(window),
      $body = $("body");
  
  $($window).on("scroll", function () {
    var scroll = $($window).scrollTop();

    if (scroll < 150) {
      $("#sticky").removeClass("is-isticky");
    } else {
      $("#sticky").addClass("is-isticky");
    }
  });
 

  var $offCanvasToggle = $(".offcanvas-toggle"),
      $offCanvas = $(".offcanvas"),
      $offCanvasOverlay = $(".offcanvas-overlay"),
      $mobileMenuToggle = $(".mobile-menu-toggle");
  $offCanvasToggle.on("click", function (e) {
    e.preventDefault();
    var $this = $(this),
        $target = $this.attr("href");
    $body.addClass("offcanvas-open");
    $($target).addClass("offcanvas-open");
    $offCanvasOverlay.fadeIn();

    if ($this.parent().hasClass("mobile-menu-toggle")) {
      $this.addClass("close");
    }
  });
  $(".offcanvas-close, .offcanvas-overlay").on("click", function (e) {
    e.preventDefault();
    $body.removeClass("offcanvas-open");
    $offCanvas.removeClass("offcanvas-open");
    $offCanvasOverlay.fadeOut();
    $mobileMenuToggle.find("a").removeClass("close");
  });
 
  function mobileOffCanvasMenu() {
    var $offCanvasNav = $(".offcanvas-menu, .overlay-menu"),
        $offCanvasNavSubMenu = $offCanvasNav.find(".offcanvas-submenu");

    $offCanvasNavSubMenu.parent().prepend('<span class="menu-expand"></span>');

    $offCanvasNav.on("click", "li a, .menu-expand", function (e) {
      var $this = $(this);

      if ($this.attr("href") === "#" || $this.hasClass("menu-expand")) {
        e.preventDefault();

        if ($this.siblings("ul:visible").length) {
          $this.parent("li").removeClass("active");
          $this.siblings("ul").slideUp();
          $this.parent("li").find("li").removeClass("active");
          $this.parent("li").find("ul:visible").slideUp();
        } else {
          $this.parent("li").addClass("active");
          $this.closest("li").siblings("li").removeClass("active").find("li").removeClass("active");
          $this.closest("li").siblings("li").find("ul:visible").slideUp();
          $this.siblings("ul").slideDown();
        }
      }
    });
  }

  mobileOffCanvasMenu();
  var $offcanvasMenu2 = $("#offcanvas-menu2 li a");
  $offcanvasMenu2.on("click", function (e) {
    $(this).closest("li").toggleClass("active");
    $(this).closest("li").siblings().removeClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").slideUp();
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").toggleClass("active");
    $(this).closest("li").siblings().children(".category-sub-menu").children("li").removeClass("active");
    $(this).parent().children(".category-sub-menu").slideToggle();
  });

    

  
  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    e.target;
    e.relatedTarget;
    $(".slick-slider").slick("setPosition");
  });
 

  $(".modal").on("shown.bs.modal", function (e) {
    $(".slick-slider").slick("setPosition");
  });
  

  $("#write-comment").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $(".btn-dark ").offset().top + 750
    }, 500, "linear");
  });

    
  /*--------------------------
      SscrollUp
    ---------------------------- */

  $.scrollUp({
    scrollName: "scrollUp",
    // Element ID
    scrollDistance: 400,
    scrollFrom: "top",
    scrollSpeed: 800,
    easingType: "linear",
    animation: "fade",
    animationSpeed: 400,
    scrollTrigger: false,
    scrollTarget: false,
    scrollText: '<i class="fa fa-arrow-up"></i>',
    scrollTitle: false,
    scrollImg: false,
    activeOverlay: false,
    zIndex: 214 

  });
    
    
    
    $('.product-color li label').click(function(){
      var variantImage = jQuery(this).parent().find('.hidden a').attr('href');
      jQuery(this).parents('.product-wrapper').find('.popup_cart_image').attr({ src: variantImage }); 
      return false;
    });
    

  });
  
})(jQuery);
