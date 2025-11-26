$(function () {
  const hour = new Date().getHours();
  let text = hour < 12 ? "Good Morning" : hour < 17 ? "Good Afternoon" : "Good Evening";
  $("#greeting").text(text);

  $("#change").click(() => $("#greeting").text("Believe in yourself."));
  $("#toggle").click(() => $("#welcome").toggle());
  $("#greeting").click(() => alert("You clicked the greeting."));
});
