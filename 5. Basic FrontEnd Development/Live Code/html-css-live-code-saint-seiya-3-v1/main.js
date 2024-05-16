const charList = [
    {
        name: "Seiya",
        occupation: "Saint",
        cloth: "Pegasus Cloth",
        constellation: "Pegasus",
    },
    {
        name: "Shiryū",
        occupation: "Saint",
        cloth: "Dragon God Cloth",
        constellation: "Dragon",
    },
    {
        name: "Hyōga",
        occupation: "Saint",
        cloth: "Cygnus God Cloth",
        constellation: "Cygnus",
    },
    {
        name: "Shun",
        occupation: "Saint",
        cloth: "Andromeda God Cloth",
        constellation: "Andromeda",
    },
    {
        name: "Ikki",
        occupation: "Saint",
        cloth: "Phoenix God Cloth",
        constellation: "Phoenix",
    },
    {
        name: "Saori Kido",
        occupation: "-",
        cloth: "Athena Kamui",
        constellation: "Reincarnation of Athena",
    },
];

const tableBody = document.getElementById("table-body");
getData();

function getData() {
    tableBody.innerHTML = "";

    charList.forEach((character) => {
        const row = document.createElement("tr");

        for (const key in character) {
            const cell = document.createElement("td");
            cell.innerText = character[key];
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
}
