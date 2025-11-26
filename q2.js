function loadEmployees() {
  const req = new XMLHttpRequest();
  req.open("GET", "http://localhost:3002/employees");
  req.onload = function () {
    const data = JSON.parse(req.responseText);
    let html = "";
    data.forEach(emp => {
      html += `
        <div class="row" data-id="${emp.id}">
          <span>${emp.name}</span>
          <button class="toggle">${emp.status}</button>
        </div>`;
    });
    document.getElementById("employees").innerHTML = html;
    attachEvents();
  };
  req.send();
}

function attachEvents() {
  document.querySelectorAll(".toggle").forEach(btn => {
    btn.onclick = function () {
      const row = this.parentElement;
      const id = row.getAttribute("data-id");
      const newStatus = this.textContent === "active" ? "inactive" : "active";
      this.textContent = newStatus;

      const req = new XMLHttpRequest();
      req.open("PATCH", `http://localhost:3002/employees/${id}`);
      req.setRequestHeader("Content-Type", "application/json");
      req.onerror = () => location.reload();

      req.send(JSON.stringify({ status: newStatus }));
    };
  });
}

loadEmployees();
