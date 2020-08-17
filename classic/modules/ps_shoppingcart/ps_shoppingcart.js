/* global $, prestashop */
$(document).ready(function () {
  prestashop.blockcart = prestashop.blockcart || {};

  var showModal =
    prestashop.blockcart.showModal ||
    function (modal) {
      var $body = $("body");
      $body.append(modal);
      $body.one("click", "#blockcart-modal", function (event) {
        if (event.target.id === "blockcart-modal") {
          $(event.target).remove();
        }
      });
    };

  prestashop.on("updateCart", function (event) {
    var refreshURL = $(".blockcart").data("refresh-url");
    var requestData = {};
    if (
      event &&
      event.reason &&
      typeof event.resp !== "undefined" &&
      !event.resp.hasError
    ) {
      requestData = {
        id_customization: event.reason.idCustomization,
        id_product_attribute: event.reason.idProductAttribute,
        id_product: event.reason.idProduct,
        action: event.reason.linkAction,
      };

      $.post(refreshURL, requestData)
        .then(function (resp) {
          $(".blockcart").replaceWith($(resp.preview).find(".blockcart"));
          if (resp.modal) {
            showModal(resp.modal);
          }
        })
        .fail(function (resp) {
          prestashop.emit("handleError", {
            eventType: "updateShoppingCart",
            resp: resp,
          });
        });
    }
    if (event && event.resp && event.resp.hasError) {
      prestashop.emit("showErrorNextToAddtoCartButton", {
        errorMessage: event.resp.errors.join("<br/>"),
      });
    }
  });
});
window.handleCloseModal = () => {
  const cartModal = document.getElementById("cartModalDetails");
  const offcanvas = document.getElementById("off-canvas");
  cartModal.classList.toggle("hidden-modal");
  offcanvas.style.display = "none";
};
window.handleOpenModal = () => {
  const cartModal = document.getElementById("cartModalDetails");
  const offcanvas = document.getElementById("off-canvas");
  cartModal.classList.toggle("hidden-modal");
  offcanvas.style.display = "block";
};
const offcanvas = document.getElementById("off-canvas");
offcanvas.onclick = function () {
  const cartModal = document.getElementById("cartModalDetails");
  offcanvas.style.display = "none";
  cartModal.classList.toggle("hidden-modal");
};

/* $("html").click(function () {
  const cartModal = document.getElementById("cartModalDetails");
  const desktopCart = document.getElementById("_desktop_cart");
  if (
    document.getElementsByClassName("modal-is-visible").length > 0 &&
    document.getElementsByClassName("hidden-modal").length == 0
  ) {
    console.log("it's working");
    cartModal.classList.toggle("hidden-modal");
    desktopCart.classList.toggle("modal-is-visible");
  }
});
 */
