let jsonData = null;

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

const select = document.getElementById("userId");
function setPulldown(data) {
    data.forEach(user => {
        const option = document.createElement("option");
        option.value = user.id;
        option.textContent = `ID: ${user.id}`;
        select.appendChild(option);
    });
}

userId.addEventListener("change", (event) => {
    userIdEvent(event.target.value);
});

function userIdEvent(e) {
    console.log(jsonData);
    const user = jsonData.find(user => user.id === Number(e));
    console.log("選択されたユーザー:", user);
    renderJsonToList(user);
}

function loadJson(jsonPath = './a.json') {
    return fetch(jsonPath, { cache: "no-store" })
        .then(response => {
            if (!response.ok) throw new Error("Fetch failed");
            return response.json();
        })
        .then(data => {
            jsonData = data;
            console.log("読み込んだデータ:", jsonData);
            return jsonData;
        });
}

window.addEventListener("DOMContentLoaded", () => {
    loadJson()
        .then(data => {
            setPulldown(data);
            userIdEvent(select.value);
        })
        .catch(error => console.error("読み込みエラー:", error));
});