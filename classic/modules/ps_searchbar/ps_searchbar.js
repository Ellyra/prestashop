/* global $ */
$(document).ready(function () {
  var $searchWidget = $("#search_widget");
  var $searchBox = $searchWidget.find("input[type=text]");
  var searchURL = $searchWidget.attr("data-search-controller-url");

  $.widget("prestashop.psBlockSearchAutocomplete", $.ui.autocomplete, {
    _renderItem: function (ul, product) {
      return $("<li>")
        .append(
          $("<a>")
            .append(
              $("<span>").html(product.category_name).addClass("category")
            )
            .append($("<span>").html(" > ").addClass("separator"))
            .append($("<span>").html(product.name).addClass("product"))
        )
        .appendTo(ul);
    },
  });

  $searchBox.psBlockSearchAutocomplete({
    source: function (query, response) {
      $.post(
        searchURL,
        {
          s: query.term,
          resultsPerPage: 10,
        },
        null,
        "json"
      )
        .then(function (resp) {
          response(resp.products);
        })
        .fail(response);
    },
    select: function (event, ui) {
      var url = ui.item.url;
      window.location.href = url;
    },
  });
});
const searchInputRef = document.querySelector(
  ".header-top .search-widget form input[type=text]"
);
const showSearchInput = () => {
  searchInputRef.classList.toggle("d-none");
};

window.onscroll = function () {
  HeaderScroll();
};

// Get the navbar
var navbar = document.getElementById("header");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function HeaderScroll() {
  if (window.pageYOffset >= Math.abs(sticky + 120)) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

/* window.onscroll = function () {
  FooterScroll();
};

// Get the navbar
var footer = document.getElementById("footer");

// Get the offset position of the navbar
var sticky = footer.offsetHeight;
var test = document.getElementById("footer").offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function FooterScroll() {
  if (Math.abs(test - window.pageYOffset) <= 200) {
    footer.classList.add("sticky");
  } else {
    footer.classList.remove("sticky");
  }
} */
