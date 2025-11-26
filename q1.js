$("#search").on("input", function () {
  const value = $(this).val().trim();
  $("#loading").show();

  $.ajax({
    url: `http://localhost:3001/products?q=${value}`,
    method: "GET",
    success: function (data) {
      $("#loading").hide();
      if (!data.length) return $("#results").html("No products found");

      let html = "";
      data.forEach(p => {
        html += `
          <div>
            <img src="${p.image}">
            <h4>${p.name}</h4>
            <p>₹${p.price}</p>
          </div>
        `;
      });
      $("#results").html(html);
    }
  });
});
