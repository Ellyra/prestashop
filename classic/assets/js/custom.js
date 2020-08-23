$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();

  $(".featured-img").css({
    opacity: function () {
      var elementHeight = $(this).height(),
        opacity = (elementHeight - scrollTop) / elementHeight;
      return opacity;
    },
  });
});
