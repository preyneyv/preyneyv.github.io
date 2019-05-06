---
---
;{% include js/jquery.min.js %}

$("#article p img + em").each(function() {
  $(this).parent().addClass('image');
})