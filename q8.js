$("#submit").click(function () {
  let name = $("#name").val().trim();
  let email = $("#email").val().trim();

  $("#nameErr").text(name ? "" : "Enter a name");
  $("#emailErr").text(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? "" : "Invalid email");

  if (name && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    alert("Form submitted");
});
