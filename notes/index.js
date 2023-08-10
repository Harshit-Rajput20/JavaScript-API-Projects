const button1 = document.querySelector(".btn");
const input = document.querySelector(".text");
const parentDiv = document.querySelector(".parentDiv");

let notetxt = [];

class noteStructure {
  constructor(text, id) {
    this.text = text;
    this.id = id;
  }
  returndiv() {
    const newdiv = document.createElement("div");
    const navitem = document.createElement("div");
    const textdiv = document.createElement("div");
    newdiv.id = this.id + "note";
    navitem.innerHTML = `
        <ul class="nav">
        <button class ="mybtn" id="${this.id}button">Delete</button>
      </ul>
    `;

    newdiv.appendChild(navitem);
    newdiv.appendChild(textdiv);
    newdiv.className = "mynote custom-scrollbar";
    parentDiv.appendChild(newdiv);
    textdiv.innerText = this.text;
    input.value = "";

    const deletebtn = document.getElementById(`${this.id}button`);
    deletebtn.addEventListener("click", () => {
      notetxt.splice(this.id, 1);
      updateNotes();
    });
  }
}

function reId() {
  for (i = 0; i < notetxt.length; i++) {
    notetxt[i].id = i;
  }
}

function updateNotes() {
  reId();
  const tempnotes = document.getElementsByClassName("mynote custom-scrollbar");
  for (let i = tempnotes.length - 1; i >= 0; i--) {
    tempnotes[i].remove();
  }

  for (let i = 0; i < notetxt.length; i++) {
    notetxt[i].returndiv();
  }
  localStorage.setItem("notesData", JSON.stringify(notetxt));
  console.log(localStorage.getItem("notesData"));
}

let id = 0;

function addtext() {
  if (input.value != "") {
    id = id + 1;
    const newnote = new noteStructure(input.value, id);
    console.log(newnote.text + typeof newnote.text);
    notetxt.push(newnote);
    updateNotes();
  }
}

button1.addEventListener("click", addtext);
if (localStorage.getItem("notesData") != null) {
  temparr = JSON.parse(localStorage.getItem("notesData"));
  for(element in temparr){
    id = id + 1;
    const newnote = new noteStructure(element.text, element.id);
    console.log(newnote.text + typeof newnote.text);
    notetxt.push(newnote);
    updateNotes();
  }
}
