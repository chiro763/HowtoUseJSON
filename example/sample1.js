function renderJsonToList(json) {
  const container = document.getElementById("jsonToList");
  if (!container) {
    console.error("jsonToList 要素が見つかりません");
    return;
  }

  const table = document.createElement("table");
  table.border = "1";
  table.style.borderCollapse = "collapse";

  const header = document.createElement("tr");
  header.innerHTML = "<th>Key</th><th>Value</th>";
  table.appendChild(header);

  Object.entries(json).forEach(([key, value]) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${key}</td><td>${value}</td>`;
    table.appendChild(row);
  });

  container.innerHTML = "";
  container.appendChild(table);
}

window.addEventListener("DOMContentLoaded", () => {
  fetch('./sample1.json', { cache: "no-store" })
    .then(response => {
      if (!response.ok) throw new Error("Fetch failed");
      return response.json();
    })
    .then(data => {
      console.log("読み込んだデータ:", data);
      renderJsonToList(data);
    })
    .catch(error => console.error("読み込みエラー:", error));
});
