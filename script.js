let score = 0;
let boostActive = false;

const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tap-button");
const boostDisplay = document.getElementById("boost");

tapButton.addEventListener("click", () => {
    const points = boostActive ? 2 : 1; // x2 очки, если активен буст
    score += points;
    scoreDisplay.textContent = `Очки: ${score}`;
});

function activateBoost() {
    boostActive = true;
    boostDisplay.textContent = "Буст активен! x2 очки!";
    setTimeout(() => {
        boostActive = false;
        boostDisplay.textContent = "Буст доступен через 24 часа!";
    }, 10000); // Буст активен 10 секунд (можно изменить)
}

// Имитируем активацию буста раз в 24 часа
boostDisplay.textContent = "Буст доступен!";
boostDisplay.addEventListener("click", () => {
    if (!boostActive) {
        activateBoost();
    }
});
