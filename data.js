$('[data-countdown]').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('<div class="countdown-area"><div class="single-countdown"><div class="count-number">%D</div><div class="count-title">days</div></div><div class="single-countdown"><div class="count-number">%H</div><div class="count-title">Hour</div></div><div class="single-countdown"><div class="count-number">%M</div><div class="count-title">Mint</div></div><div class="single-countdown"><div class="count-number">%S</div><div class="count-title">Sec</div></div></div>'));
    });
  });