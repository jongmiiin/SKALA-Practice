let count = 0;
const countEl = document.querySelector("#count");
const btn = document.querySelector("#likeBtn");

btn.addEventListener("click", function () {
    count = count + 1;
    countEl.textContent = count;
});