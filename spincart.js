$('.ajax-spin-cart').on('click', function() {
    $(this).addClass('loading add-item');
    setTimeout(function () {
      $('.ajax-spin-cart').removeClass('loading');
    },1000);
    setTimeout(function () {
      $('.ajax-spin-cart').removeClass("add-item");
    },2000);

  });