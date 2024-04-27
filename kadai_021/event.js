const changeBtn = document.getElementById("btn");

changeBtn.addEventListener("click", () => {
    const changeText = document.getElementById("text");

    setTimeout(() => {
        changeText.textContent = "ボタンをクリックしました";
    }, 2000);
});