document.addEventListener("DOMContentLoaded", function() {
  var currentAjaxRequest = null;
  var searchForms = document.querySelectorAll('form[action="/search"]');
  searchForms.forEach(function(form) {
    form.style.position = 'relative';
    var input = form.querySelector('input[name="q"]');
    var offSet = input.offsetTop + input.offsetHeight;
    var resultsList = document.createElement('ul');
    resultsList.className = 'search-results home-two';
    resultsList.style.position = 'absolute';
    resultsList.style.left = '0px';
    resultsList.style.top = offSet + 'px';
    form.appendChild(resultsList);
    resultsList.style.display = 'none';
    input.setAttribute('autocomplete', 'off');
    input.addEventListener('input', function() {
      var term = this.value;
      var searchURL = '/search?type=product&q=' + term;
      if (term.length > 3 && term != this.dataset.oldTerm) {
        this.dataset.oldTerm = term;
        if (currentAjaxRequest != null) currentAjaxRequest.abort();
        currentAjaxRequest = fetch(searchURL + '&view=json')
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            resultsList.innerHTML = '';
            if (data.results_count == 0) {
              resultsList.innerHTML = '<li><span class="title">No results.</span></li>';
              resultsList.style.display = 'block';
              resultsList.style.display = 'none';
            } else {
              data.results.forEach(function(item) {
                var link = document.createElement('a');
                link.href = item.url;
                link.innerHTML = '<span class="thumbnail"><img src="' + item.thumbnail + '" /></span>' +
                                 '<span class="title">' + item.title + '</span>';
                var listItem = document.createElement('li');
                listItem.appendChild(link);
                resultsList.appendChild(listItem);
              });
              if (data.results_count > 10) {
                resultsList.innerHTML += '<li><span class="title"><a href="' + searchURL + '">See all results (' + data.results_count + ')</a></span></li>';
              }
              resultsList.style.display = 'block';
            }
          })
          .catch(function(error) {
            console.error('Error fetching search results:', error);
          });
      }
    });
  });
  document.body.addEventListener('click', function() {
    var searchResults = document.querySelectorAll('.search-results');
    searchResults.forEach(function(results) {
      results.style.display = 'none';
    });
  });
});
