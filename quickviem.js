
var mainImage = '';

$(function () {
  quiqview = function (product_handle) {
    getProduct(product_handle);
  }

  onProduct = function (product) {
    $('.viewfullinfo').attr('href', product.url);

    var _parent = '#quickViewModal';

    $(_parent + ' .product_title').text(product.title);
    $(_parent + ' .rating').empty().append("<span class=\"shopify-product-reviews-badge\" data-id=\"" + product.id + "\"></span>");

    var variant = product.variants.find(v => v.inventory_quantity > 0) || 
                  product.variants.find(v => v.inventory_policy === "continue") || 
                  product.variants[0];

    mainImage = product.featured_image;
    var shopifyimgurl = variant.featured_image ? variant.featured_image.src : product.featured_image;
    var imgurl = "<img class=\"full-width\" alt=\"\" src = \"" + shopifyimgurl + "\" >";
    $(_parent + ' .product-main-image__item .img_box_1, ' + _parent + ' .product-main-image__item .img_box_2').empty().append(imgurl);

    var desc = product.description;
    if (desc.includes("[short_description]")) {
      desc = desc.split("[short_description]");
      desc = desc[1].split("[/short_description]");
      $(_parent + ' .product-des').show().html(desc[0]);
    } else {
      $(_parent + ' .product-des').html(text_truncate(product.description, 250));
    }

    var inv_qua = variant.inventory_quantity;
    if (variant.price < variant.compare_at_price) {
      $('.price-part .main').addClass('amount');
      $('.price-part .price-box__new').show();
      changePriceValue('.price-part .main', variant.compare_at_price);
      changePriceValue('.price-part .price-box__new', variant.price);
    } else {
      $('.price-part .price-box__new').hide();
      $('.price-part .main').removeClass('amount');
      changePriceValue('.price-part .main', variant.price);
    }

    var select = product.variants.length > 1 ? generateVariantSelect(product.variants) : '<input type="hidden" name="id" value="' + variant.id + '" />';
    $('.variants').empty().html(select);

    setParametresText(_parent + ' .product-sku', variant.sku);

    if ($(_parent + ' .product-sku').length) {
      var $ava = $(_parent + " .product-info__availabilitu");
      if (variant.sku != "") {
        $ava.removeClass('pull-left');
      } else {
        $ava.addClass('pull-left');
      }
    }

    if (variant.inventory_management) {
      $(_parent + ' .product-availability').text(inv_qua > 0 ? inv_qua + " In Stock" : "In Stock");
    } else {
      $(_parent + ' .product-availability').text("Many in stock");
    }

    $('.product-available').toggle(!out_of_stock || variant.inventory_policy == "continue");
    $('.product-disable').toggle(out_of_stock);

    if (product.available && product.variants.length > 1) {
      new Shopify.OptionSelectors("product-select-qv", { 
        product: product, 
        onVariantSelected: selectCallbackQv, 
        enableHistoryState: true 
      });
    }

    $('.currency .active').trigger('click');
    $('.spr-badge').length > 0 && $.getScript("//productreviews.shopifycdn.com/assets/v4/spr.js");
    $(".selector-wrapper label").text(function (index, text) {
      return text + ":";
    });

    $(_parent).modal('show');
  }

  var selectCallbackQv = function (variant, selector) {
    var _parent = '#quickViewModal';
    var _parentprice = _parent + ' .price-part';

    if (!variant) {
      $(_parent + " .price-box, " + _parent + " .qwt, " + _parent + " .control-console").hide();
      $(_parent + ' .addtocartqv').prop('disabled', true).text('Unavailable');
      return false;
    }

    $(_parent + " .price-box, " + _parent + " .qwt, " + _parent + " .control-console").show();

    if (variant.price < variant.compare_at_price) {
      $(_parentprice + ' .main').addClass('price-box__old');
      $(_parentprice + ' .price-box__new').show();
      changePriceValue(_parentprice + ' .main', variant.compare_at_price);
      changePriceValue(_parentprice + ' .price-box__new', variant.price);
    } else {
      $(_parentprice + ' .price-box__new').hide();
      $(_parentprice + ' .main').removeClass('price-box__old');
      changePriceValue(_parentprice + ' .main', variant.price);
    }

    newVariantTextDataQv(_parent + ' .product-sku', variant.sku);

    if ($(_parent + ' .product-sku').length) {
      var $ava = $(_parent + " .product-info__availabilitu");
      $ava.toggleClass('pull-left', variant.sku != "");
    }

    $(_parent + ' .product-availability').text(variant.available ? 
      (variant.inventory_management == null ? "Many in stock" : "Many in stock") : 
      "Sold Out");

    var shopifyimgurl = variant.featured_image ? variant.featured_image.src : mainImage;
    var imgurl = "<img class=\"full-width\" alt=\"\" src = \"" + shopifyimgurl + "\" >";
    var $imgBox1 = $(_parent + ' .product-main-image__item .img_box_1');
    var $imgBox2 = $(_parent + ' .product-main-image__item .img_box_2');

    if ($imgBox1.children().length > 0) {
      var detach = $imgBox1.find('img').detach();
      $imgBox2.empty().append(detach);
    }
    $imgBox1.empty().append(imgurl);

    $(_parent + ' .addtocartqv').prop('disabled', !variant.available).html(variant.available ? 'Add to Cart' : 'Unavailable');
    $(_parent + " .control-console").toggle(variant.available);

    $('.currency .active').trigger('click');
  };

  function generateVariantSelect(variants) {
    var select = '<select id="product-select-qv" name="id">';
    var selected = 'selected';

    for (var i = 0; i < variants.length; i++) {
      var _var = variants[i];
      if (_var.available) {
        select += '<option value="' + _var.id + '"' + selected + '>' + _var.title + ' - ' + Shopify.formatMoney(_var.price, "<span class=money>${{amount}}</span>") + '</option>';
        selected = '';
      }
    }

    return select + '</select>';
  }

  function setParametresText(obj, value) {
    $(obj).parent().toggle(value != '').text(value);
  }

  function changePriceValue(cell, value) {
    $(cell).html(Shopify.formatMoney(value, "<span class=money>${{amount}}</span>"));
  }

  function newVariantTextDataQv(obj, value) {
    $(obj).parent().toggle(value != '').text(value);
  }
})