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

/* const offclick = document.getElementById("filter");
const offclick2 = document.getElementById("filters-container");
var currentColor = "black";
var currentIcon = "add";
offclick.onclick = function (event) {
  event.preventDefault();
  $("#filters-container").stop(true).fadeToggle("slow");
  offclick2.classList.toggle("filters-up");
  if (currentIcon == "add") {
    $(this).find("span").text("remove");
    currentIcon = "remove";
  } else {
    $(this).find("span").text("add");
    currentIcon = "add";
  }

  if (currentColor == "black") {
    offclick.style.color = "#a42121";
    currentColor = "red";
  } else {
    offclick.style.color = "black";
    currentColor = "black";
  }
  console.log("lol");
}; */

const offclick = document.getElementById("filter");
const offclick2 = document.getElementById("filters-container");
var currentColor = "black";
var currentIcon = "add";
$("#filter").click(function (event) {
  event.preventDefault();

  $("#filters-container").stop(true).fadeToggle("slow");
  console.log(currentIcon);
  console.log(currentColor);
  offclick2.classList.toggle("filters-up");
  if (currentIcon == "add") {
    $(this).find("span").text("remove");
    currentIcon = "remove";
    console.log(currentIcon);
  } else {
    $(this).find("span").text("add");
    currentIcon = "add";
    console.log(currentIcon);
  }
  if (currentColor == "black") {
    $("#filter").css("color", "#a42121");
    currentColor = "red";
    console.log(currentColor);
  } else {
    $("#filter").css("color", "black");
    currentColor = "black";
    console.log(currentColor);
  }
});
