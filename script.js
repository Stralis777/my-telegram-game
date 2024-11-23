let score = 0;
let boostActive = false;

const scoreDisplay = document.getElementById("score");
const tapButton = document.getElementById("tap-button");
const boostDisplay = document.getElementById("boost");

tapButton.addEventListener("click", () => {
    const points = boostActive ? 2 : 1; // x2 ����, ���� ������� ����
    score += points;
    scoreDisplay.textContent = `����: ${score}`;
});

function activateBoost() {
    boostActive = true;
    boostDisplay.textContent = "���� �������! x2 ����!";
    setTimeout(() => {
        boostActive = false;
        boostDisplay.textContent = "���� �������� ����� 24 ����!";
    }, 10000); // ���� ������� 10 ������ (����� ��������)
}

// ��������� ��������� ����� ��� � 24 ����
boostDisplay.textContent = "���� ��������!";
boostDisplay.addEventListener("click", () => {
    if (!boostActive) {
        activateBoost();
    }
});
