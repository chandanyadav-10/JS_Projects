/***********Input from user****************************/

let userNote = () => {
    let todoInput = document.getElementById("todoInput").value;

    if (todoInput === "") {
        return;
    }

    let noteStorage = JSON.parse(localStorage.getItem("note")) || [];

    noteStorage.push(todoInput);

    localStorage.setItem("note", JSON.stringify(noteStorage));

    document.getElementById("todoInput").value = "";

    displayNote();
};

let noteSaverBtn = document.getElementById("noteSaver");
noteSaverBtn.addEventListener("click", userNote);

/*******************Display note on screen************ */
let displayNote = () => {
    let noteDsiplay = document.getElementById("noteDisplay");
    noteDsiplay.innerHTML = "";

    let noteStorage = JSON.parse(localStorage.getItem("note")) || [];

    noteStorage.forEach((note, index) => {
        let p = document.createElement("p");
        p.classList.add("notePara");
        p.innerHTML = `${note}<button class="deleteBtn" onClick = "deleteBtn(${index})">x</button>`;

        noteDsiplay.appendChild(p);


    });
};

/**************************Delete note********************** */
let deleteBtn = (index) => {
    let noteStorage = JSON.parse(localStorage.getItem("note")) || [];
    noteStorage.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(noteStorage));
    displayNote()

};

window.onload = () => {
    displayNote();
};
