Currency.format = 'money_format';
var shopCurrency = 'USD';

Currency.moneyFormats[shopCurrency].money_with_currency_format = "${{amount}} USD";
Currency.moneyFormats[shopCurrency].money_format = "${{amount}}";

var cookieCurrency;
try {
  cookieCurrency = Currency.cookie.read();
} catch (err) {}

document.querySelectorAll('span.money span.money').forEach(function(element) {
  element.closest('span.money').classList.remove('money');
});

document.querySelectorAll('span.money').forEach(function(element) {
  element.dataset.currencyUSD = element.innerHTML;
});

var buttons = document.querySelectorAll('.currency li');

if (cookieCurrency == null || cookieCurrency === shopCurrency) {
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  document.querySelector('.currency li[data-currency="' + shopCurrency + '"]').classList.add('active');
  Currency.currentCurrency = shopCurrency;
  document.querySelector(".current-currency").textContent = shopCurrency;
} else {
  Currency.convertAll(shopCurrency, cookieCurrency);
  buttons.forEach(function(button) {
    button.classList.remove('active');
  });
  document.querySelector('.currency li[data-currency="' + cookieCurrency + '"]').classList.add('active');
  document.querySelector(".current-currency").textContent = cookieCurrency;
}

buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    var cur = this.getAttribute('data-currency');
    this.classList.add('active');

    var newCurrency = this.getAttribute('data-currency');
    var currentCurrency = Currency.currentCurrency;
    if (newCurrency != currentCurrency) {
      Currency.convertAll(currentCurrency, newCurrency);
    }

    document.querySelector(".current-currency").textContent = cur;
  });
});

var main_selectCallback = window.selectCallback;
var selectCallback = function(variant, selector) {
  main_selectCallback(variant, selector);
  Currency.convertAll(shopCurrency, document.querySelector(".currency .active").getAttribute('data-currency'));
};
