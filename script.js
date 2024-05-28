document.addEventListener("DOMContentLoaded", () => {
    let xp = 0;
    const xpText = document.getElementById("xp-text");
    const character = document.getElementById("character");

    character.addEventListener("click", (event) => {
        xp += 1;
        updateXpWidget(xp);
        showXpPopup(event.clientX, event.clientY);
    });

    function updateXpWidget(xp) {
        xpText.textContent = xp;
    }

    function showXpPopup(x, y) {
        const xpPopup = document.createElement("div");
        xpPopup.textContent = "+1 XP";
        xpPopup.className = "xp-popup";
        xpPopup.style.left = `${x}px`;
        xpPopup.style.top = `${y}px`;
        document.body.appendChild(xpPopup);

        setTimeout(() => {
            xpPopup.remove();
        }, 1000);
    }
});
