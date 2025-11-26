$(".btn").click(function () {
  let val = Number($("#value").text());
  let amt = Number($(this).data("amt"));
  $("#value").text(val + amt);
});
