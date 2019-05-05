;(() => {
  let count = $("#landing-slider div").length,
    i = 0;
  $("#landing-slider div").eq(i).css({ opacity: 1 })  

  function nextSlide() {
    $("#landing-slider div").eq(i).animate({ opacity: 0 })
    i++;
    if (i >= count)
      i = 0;
    $("#landing-slider div").eq(i).animate({ opacity: 1 })
  }
  setInterval(nextSlide, 3000);
})();