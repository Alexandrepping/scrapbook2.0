let titleInput = document.getElementById("messageTitle");
let editTitleInput = document.getElementById("editMessageTitle");
let messageInput = document.getElementById("messageBody");
let editMessageInput = document.getElementById("editMessageBody");
let addButton = document.getElementById("addButton");
let scrapsField = document.getElementById("scrapsField");
let btnSaveEdit = document.getElementById("saveEdit");
let btnExcluir = document.getElementById("btnDel");

let scraps = [];

function renderScraps() {
  scrapsField.innerHTML = "";

  for (const scrap of scraps) {
    let position = scraps.indexOf(scrap);
    scrapsField.innerHTML += createScrapCard(
      scrap.title,
      scrap.message,
      position
    );
  }
}

function addNewScrap() {
  let title = titleInput.value;
  let message = messageInput.value;

  if (!messageTitle.value || !messageBody.value) {
    return `todos os campo precisam estar preechidos`;
  }

  titleInput.value = "";
  messageInput.value = "";
  scraps.push({ title, message });

  renderScraps();
}

function createScrapCard(title, message, position) {
  return `
    <div class="message-cards card text-white bg-dark m-2">
              <div class="card-header font-weight-bold">${title}</div>
              <div class="card-body">
                <p class="card-text">
                  ${message}
                </p>
              </div>
              <div class="w100 d-flex justify-content-end pr-2 pb-2">
                <button id ="btnDel" onclick="deleteCard(${position})"class="btn btn-danger mr-1">Deletar</button>
                <button
                  class="btn btn-info"
                  onclick="openEditModal(${position})"
                >
                  Editar
                </button>
              </div>
            </div>
  `;
}

function openEditModal(position) {
  $("#editModal").modal("toggle");

  editTitleInput.value = scraps[position].title;
  editMessageInput.value = scraps[position].message;

  btnSaveEdit.setAttribute("onclick", `saveChanges(${position})`);
}

function saveChanges(position) {
  title = editTitleInput.value;
  message = editMessageInput.value;

  scraps[position].title = title;
  scraps[position].message = message;

  renderScraps(position);
}

function deleteCard(position) {
  scraps.splice(position, 1);
  renderScraps();
}

// function checkFields() {
//   if (titleInput == "") {
//     alert("Preencha o campo título");
//     document.getElementById("messageTitle").focus();
//     return false;
//   } else if (messageInput == "") {
//     alert("Preencha o campo mensagem");

//     document.getElementById("messageBody").focus();
//     return false;
//   } else {
//     addButton.onclick = addNewScrap;
//   }
// }
addButton.onclick = addNewScrap;
