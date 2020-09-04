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
$("#filter").click(function (event) {
  event.preventDefault();
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

/* CHANGEMENT DU MODE D'AFFICHAGE EN MODE LIST */
$("#filter-list").click(function (event) {
  event.preventDefault();
  console.log("je suis dans le filter list");

  $(".products").addClass("list-up");
  /*  var form = $("<form/>", { action: "{$urls.pages.cart}", method: "POST" });
  form.append(
    $("<input>", {
      type: "hidden",
      value: "{$product.id}",
      name: "id_product",
    })
  );

  form.append(
    $("<input>", {
      type: "button",
      class: "btn btn-primary",
      value: "Add to cart",
    })
  );

  $("[itemprop='itemListElement'").append(form); */
  /*   var r = $("<input/>").attr({
    type: "button",
    class: "btn btn-primary",
    value: "Add to cart",
  });
  $("[itemprop='itemListElement'").append(r); */
});

$("#filter-card").click(function (event) {
  event.preventDefault();
  console.log("je suis dans le filter card");
  $(".products").removeClass("list-up");
});
