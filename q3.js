function loadTasks(query = "") {
  $.ajax({
    url: `http://localhost:3003/tasks${query}`,
    method: "GET",
    success: function (data) {
      let html = "";
      data.forEach(t => {
        html += `
          <div>
            <input type="checkbox" class="toggle" data-id="${t.id}" ${t.completed ? "checked" : ""}>
            ${t.title} — ${t.priority}
          </div>`;
      });
      $("#tasks").html(html);
    }
  });
}

$("#filter").change(function () {
  const val = $(this).val();
  if (val === "Completed") return loadTasks("?completed=true");
  if (val) return loadTasks(`?priority=${val}`);
  loadTasks();
});

$(document).on("change", ".toggle", function () {
  const id = $(this).data("id");
  const status = this.checked;

  $.ajax({
    url: `http://localhost:3003/tasks/${id}`,
    method: "PATCH",
    contentType: "application/json",
    data: JSON.stringify({ completed: status })
  });
});

loadTasks();
