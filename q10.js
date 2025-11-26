function updateTotal() {
  let sum = 0;
  $(".item").each(function () {
    let price = $(this).data("price");
    let qty = Number($(this).find(".qty").text());
    sum += price * qty;
  });
  $("#total").text(sum);
}

$(".plus").click(function () {
  let qty = $(this).prev(".qty");
  qty.text(Number(qty.text()) + 1);
  updateTotal();
});

$(".minus").click(function () {
  let qty = $(this).next(".qty");
  let newVal = Number(qty.text()) - 1;
  if (newVal >= 1) qty.text(newVal);
  updateTotal();
});

updateTotal();
