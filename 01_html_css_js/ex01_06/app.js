const input = document.querySelector("#todoInput");
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#todoList");

addBtn.addEventListener("click", function () {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const delBtn = document.createElement("button");
    delBtn.textContent = "삭제";
    delBtn.className = "del-btn";
    delBtn.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    input.value = "";
    input.focus();
});