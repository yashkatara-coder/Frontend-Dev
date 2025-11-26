$(".product").click(function () {
  $(this).toggleClass("selected");
  if ($(this).data("stock") == 0) alert("This product is out of stock.");
});

$(".product").hover(
  function () {
    $(this).append("<p class='info'>More details...</p>");
  },
  function () {
    $(this).find(".info").remove();
  }
);
