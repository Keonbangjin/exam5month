document.querySelectorAll('.addtocartqv').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    var productId = this.getAttribute('id');
    Shopify.addItemFromFormStart('add-item-qv', productId);
  });
});
