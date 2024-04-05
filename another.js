
document.querySelectorAll('.cart-plus-minus').forEach(function(container) {
  var decButton = document.createElement('div');
  decButton.className = 'dec qtybutton';
  decButton.textContent = '-';
  container.insertBefore(decButton, container.firstChild);

  var incButton = document.createElement('div');
  incButton.className = 'inc qtybutton';
  incButton.textContent = '+';
  container.appendChild(incButton);

  container.querySelectorAll('.qtybutton').forEach(function(button) {
    button.addEventListener('click', function() {
      var input = this.parentNode.querySelector('input');
      var oldValue = parseFloat(input.value);
      var newVal = (this.textContent === '+') ? oldValue + 1 : (oldValue > 0) ? oldValue - 1 : 1;
      input.value = newVal;
    });
  });
});
