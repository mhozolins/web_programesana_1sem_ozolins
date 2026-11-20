
console.log("Skripts darbojas!");

const ievade = document.getElementById("jauns");
const poga = document.getElementById("pievienot");
const saraksts = document.getElementById("saraksts");
const zina = document.getElementById("zina");
const skaits = document.getElementById("skaits");
const dzestVisus = document.getElementById("dzestVisus");

function atjaunotSkaitu() {
    skaits.textContent = "Uzdevumi: " + saraksts.children.length;
}

function pievienotUzdevumu() {
    console.log(ievade.value);

    const teksts = ievade.value.trim();

    if (teksts === "") {
        zina.textContent = "Ieraksti uzdevumu!";
        return;
    }

    zina.textContent = "";

    const li = document.createElement("li");
    li.textContent = teksts;

    saraksts.appendChild(li);

    ievade.value = "";
    ievade.focus();

    li.addEventListener("click", () => {
        li.classList.toggle("izdarits");
    });

    const dzest = document.createElement("button");
    dzest.textContent = "Dzēst";
    dzest.classList.add("dzest");

    li.appendChild(dzest);

    dzest.addEventListener("click", (event) => {
        event.stopPropagation();
        li.remove();
        atjaunotSkaitu();
    });

    atjaunotSkaitu();
}

poga.addEventListener("click", pievienotUzdevumu);

ievade.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        poga.click();
    }
});

dzestVisus.addEventListener("click", () => {
    const izdaritie = document.querySelectorAll(".izdarits");

    izdaritie.forEach(li => li.remove());

    atjaunotSkaitu();
});
