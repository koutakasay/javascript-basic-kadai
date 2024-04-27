const changeBtn = document.getElementById("btn");

changeBtn.addEventListener("click", () => {
    const changeText = document.getElementById("text");

    changeText.textContent = "ボタンをクリックしました";
});