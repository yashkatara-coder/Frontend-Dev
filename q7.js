$("#notify").click(function () {
  const note = $("<div class='note'>New Notification</div>");
  $("#area").append(note);
  note.fadeIn().delay(2000).fadeOut(500, () => note.remove());
});
