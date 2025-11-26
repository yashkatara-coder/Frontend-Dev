let index = 0;

$("#hide").click(() => $(".banner").hide());
$("#show").click(() => $(".banner").show());
$("#slide").click(() => $(".banner").slideToggle());
$("#fade").click(() => $(".banner").fadeToggle());

setInterval(() => {
  $(".banner").hide();
  $(".banner").eq(index).fadeIn();
  index = (index + 1) % $(".banner").length;
}, 5000);
