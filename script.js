document.addEventListener("DOMContentLoaded", () => {
    let xp = 0;
    const xpWidget = document.getElementById("xp-widget");
    const character = document.getElementById("character");

    character.addEventListener("click", () => {
        xp += 1;
        xpWidget.textContent = `XP: ${xp}`;
    });
});
