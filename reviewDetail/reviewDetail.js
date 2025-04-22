// variable
const writeBtn = document.getElementById("write-btn");
const wrtieCancleBtn = document.getElementById("write-cancle");
const wrtieSubmitBtn = document.getElementById("write-submit");



// event
writeBtn.addEventListener("click", () => {
    document.getElementById("modal-wrap").style.display = "block";

});

wrtieCancleBtn.addEventListener("click", () => {
    document.getElementById("modal-wrap").style.display = "none";
});
