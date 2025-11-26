$(".a").hide();

$(".q").click(function () {
  $(this).next().toggle();
});

$(".q").hover(
  function () {
    $(this).css("color", "blue");
  },
  function () {
    $(this).css("color", "black");
  }
);

$(".q").dblclick(function () {
  $(".a").hide();
});

$("#ansInput").focus(function () {
  $(this).prev(".q").css("background", "lightyellow");
});

$("#ansInput").blur(function () {
  $(".q").css("background", "white");
});
