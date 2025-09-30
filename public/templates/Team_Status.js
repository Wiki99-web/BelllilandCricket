document.querySelectorAll('.update-button').forEach(button => {
    button.addEventListener('click', () => {
        const row = button.parentElement.parentElement;
        
        let score = parseInt(prompt("Enter new score:"));
        let balls = parseInt(prompt("Enter balls played:"));
        let fours = parseInt(prompt("Enter fours:"));
        let sixes = parseInt(prompt("Enter sixes:"));

        if (!isNaN(score) && !isNaN(balls) && !isNaN(fours) && !isNaN(sixes)) {
            // Increment Matches
            row.children[1].textContent = parseInt(row.children[1].textContent) + 1;
            
            // Update Runs
            row.children[2].textContent = parseInt(row.children[2].textContent) + score;

            // Update Balls
            row.children[3].textContent = parseInt(row.children[3].textContent) + balls;

            // Update Sixes
            row.children[4].textContent = parseInt(row.children[4].textContent) + sixes;

            // Update Fours
            row.children[5].textContent = parseInt(row.children[5].textContent) + fours;

            // Update Strike Rate
            let runs = parseInt(row.children[2].textContent);
            let totalBalls = parseInt(row.children[3].textContent);
            row.children[6].textContent = ((runs / totalBalls) * 100).toFixed(2);

            // Update 50s
            if (score > 49 && score < 100 || score > 149 && score < 200 || score > 249 && score < 300) {
                row.children[7].textContent = parseInt(row.children[7].textContent) + 1;
            }

            // Update 100s
            if (score > 99 && score < 200) {
                row.children[8].textContent = parseInt(row.children[8].textContent) + 1;
            }

            // Update 200s
            if (score > 199 && score < 300) {
                row.children[9].textContent = parseInt(row.children[9].textContent) + 1;
            }
        } else {
            alert("Please enter valid numbers.");
        }
    });
});
 