/* EFFET PARALLAXE CHANGEMENT OPACITY HOME */
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

/* OUVERTURE ET FERMETURE MENU FILTER LIST PRODUCT */
var currentColor = "black";
var currentIcon = "add";
window.onload = function () {
  $("#filter").click(function (event) {
    event.preventDefault();
    console.log("je passe dans la fonction");
    $("#filters-container")
      .stop(true)
      .fadeToggle("slow")
      .css("display", "inline-block");
    $("#filters-container").toggleClass("filters-up");
    if (currentIcon == "add") {
      $(this).find("span").text("remove");
      currentIcon = "remove";
    } else {
      $(this).find("span").text("add");
      currentIcon = "add";
    }
    if (currentColor == "black") {
      $("#filter").css("color", "#a42121");
      currentColor = "red";
    } else {
      $("#filter").css("color", "black");
      currentColor = "black";
    }
  });
};

/* CHANGEMENT DU MODE D'AFFICHAGE EN MODE LIST */
$("#filter-list").click(function (event) {
  event.preventDefault();
  console.log("je suis dans le filter list");
  $(".products").addClass("list-up");
});

$("#filter-card").click(function (event) {
  event.preventDefault();
  console.log("je suis dans le filter card");
  $(".products").removeClass("list-up");
});

// Show footer on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 300;
var navbarHeight = document.getElementById("footer").offsetHeight;
var wHeight = $(window).height();
var dHeight = $(document).height();

$(window).scroll(function (event) {
  didScroll = true;
});

setInterval(function () {
  if (didScroll) {
    hasScrolled();
    didScroll = false;
  }
}, 250);

function hasScrolled() {
  var st = $(this).scrollTop();

  // Make sure they scroll more than delta
  if (Math.abs(lastScrollTop - st) <= delta) return;

  // If they scrolled down and are past the navbar, add class .nav-up.
  // This is necessary so you never see what is "behind" the navbar.
  if (st > lastScrollTop && st > navbarHeight) {
    // Scroll Down
    $("footer").removeClass("nav-down").addClass("nav-up");
  } else {
    // Scroll Up
    if (st + wHeight < dHeight) {
      $("footer").removeClass("nav-up").addClass("nav-down");
    }
  }

  lastScrollTop = st;
}
