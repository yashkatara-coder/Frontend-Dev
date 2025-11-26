document.getElementById("day").onchange = async function () {
  const day = this.value;
  if (!day) return (document.getElementById("data").textContent = "");

  const res = await fetch(`http://localhost:3005/timetable?day=${day}`);
  const data = await res.json();

  if (!data.length) {
    document.getElementById("data").textContent = "No classes today.";
    return;
  }

  let html = "";
  data.forEach(c => {
    html += `<p>${c.subject} — ${c.faculty} — ${c.time}</p>`;
  });

  document.getElementById("data").innerHTML = html;
};
