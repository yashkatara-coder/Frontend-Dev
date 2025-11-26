$("#products").change(function () {
  const value = $(this).val();
  if (!value) return $("#info").text("");

  const [name, price] = value.split("|");
  $("#info").text(`${name} — ₹${price}`);
});
