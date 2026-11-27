
const hobbies = ["Rally", "Gaming", "Cars", "ATV", "Programming"];

const input = document.getElementById("newHobby");
const list = document.getElementById("list");
const message = document.getElementById("message");

console.log(hobbies.length);

for (let i = 0; i < hobbies.length; i++) {
    console.log(i, hobbies[i]);
}

function showHobbies() {
    list.innerHTML = "";

    for (let i = 0; i < hobbies.length; i++) {
        const li = document.createElement("li");
        li.textContent = hobbies[i];

        const button = document.createElement("button");
        button.textContent = "Dzēst";

        button.addEventListener("click", function() {
            hobbies.splice(i, 1);
            showHobbies();
        });

        li.appendChild(button);
        list.appendChild(li);
    }

    console.log(hobbies);
}

document.getElementById("add").addEventListener("click", function() {
    const text = input.value.trim();

    if (text === "") {
        message.textContent = "Ievadi hobiju!";
        return;
    }

    hobbies.push(text);
    input.value = "";
    message.textContent = "";
    showHobbies();
});

document.getElementById("shuffle").addEventListener("click", function() {
    for (let i = hobbies.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = hobbies[i];
        hobbies[i] = hobbies[j];
        hobbies[j] = temp;
    }

    showHobbies();
});

document.getElementById("sort").addEventListener("click", function() {
    hobbies.sort(function(a, b) {
        return a.localeCompare(b, "lv");
    });

    showHobbies();
});

document.getElementById("random").addEventListener("click", function() {
    if (hobbies.length === 0) {
        message.textContent = "Nav hobiju!";
        return;
    }

    const i = Math.floor(Math.random() * hobbies.length);
    message.textContent = hobbies[i];
});

document.getElementById("deleteAll").addEventListener("click", function() {
    hobbies.splice(0, hobbies.length);
    showHobbies();
});

showHobbies(); 
