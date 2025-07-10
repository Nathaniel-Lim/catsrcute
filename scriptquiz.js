document.addEventListener("DOMContentLoaded", function () {
    let score = 0;
    let questionsAnswered = 0;
    const totalQuestions = 2;  // Update this if you add more questions

    const scoreDisplay = document.createElement("p");
    scoreDisplay.id = "final-score";
    scoreDisplay.style.fontWeight = "bold";
    scoreDisplay.style.marginTop = "20px";
    document.querySelector(".big-div").appendChild(scoreDisplay);

    function checkCompletion() {
        questionsAnswered++;
        if (questionsAnswered === totalQuestions) {
            scoreDisplay.textContent = `You scored ${score} out of ${totalQuestions}!`;
        }
    }

    // ===== Question 1 =====
    const q1Result = document.getElementById("q1-result");
    const q1Buttons = document.querySelectorAll(".q1-correct, .q1-wrong");

    q1Buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Disable all q1 buttons
            q1Buttons.forEach(btn => btn.disabled = true);

            if (button.classList.contains("q1-correct")) {
                q1Result.textContent = "Correct! 🎉 Yae Miko's birthday is 27 June.";
                q1Result.style.color = "#00cc00";
                button.style.backgroundColor = "#00cc00";
                score++;
            } else {
                q1Result.textContent = "Nope!";
                q1Result.style.color = "#ff0000";
                button.style.backgroundColor = "#ff0000";
            }

            checkCompletion();
        });
    });

    // ===== Question 2 =====
    const q2Result = document.getElementById("q2-result");
    const q2Buttons = document.querySelectorAll(".q2-correct, .q2-wrong");

    q2Buttons.forEach(button => {
        button.addEventListener("click", function () {
            // Disable all q2 buttons
            q2Buttons.forEach(btn => btn.disabled = true);

            if (button.classList.contains("q2-correct")) {
                q2Result.textContent = "Correct! She's over 500 years old 😳";
                q2Result.style.color = "#00cc00";
                button.style.backgroundColor = "#00cc00";
                score++;
            } else {
                q2Result.textContent = "Wrong 😢";
                q2Result.style.color = "#ff0000";
                button.style.backgroundColor = "#ff0000";
            }

            checkCompletion();
        });
    });
});
