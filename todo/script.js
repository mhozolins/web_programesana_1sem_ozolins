
console.log("JavaScript works!");

const input = document.getElementById("jauns");
const button = document.getElementById("pievienot");
const list = document.getElementById("saraksts");
const message = document.getElementById("zina");
const count = document.getElementById("skaits");

button.addEventListener("click", function() {
    console.log(input.value);

    const text = input.value.trim();

    if (text === "") {
        message.textContent = "Enter a task!";
        return;
    }

    message.textContent = "";

    const li = document.createElement("li");
    li.textContent = text;
    list.appendChild(li);

    input.value = "";
    input.focus();

    li.addEventListener("click", function() {
        li.classList.toggle("izdarits");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.appendChild(deleteButton);

    deleteButton.addEventListener("click", function(event) {
        event.stopPropagation();
        li.remove();
        count.textContent = "Tasks: " + list.children.length;
    });

    count.textContent = "Tasks: " + list.children.length;
});

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        button.click();
    }
});

document.getElementById("dzestVisus").addEventListener("click", function() {
    const completed = document.querySelectorAll(".izdarits");

    completed.forEach(function(li) {
        li.remove();
    });

    count.textContent = "Tasks: " + list.children.length;
});
