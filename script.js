let rollCount = 0;
			let totalScoreDice1 = 0;
			let totalScoreDice2 = 0;

			function rollTheDice() {
				var dice1 = document.querySelector(".dice-1 .image");
				var dice2 = document.querySelector(".dice-2 .image");

				let randomizer1 = Math.floor(Math.random() * 6 + 1);
				let randomizer2 = Math.floor(Math.random() * 6 + 1);

				dice1.setAttribute("src", `./images/dice${randomizer1}.png`);
				dice2.setAttribute("src", `./images/dice${randomizer2}.png`);

				totalScoreDice1 += randomizer1;
				totalScoreDice2 += randomizer2;

                var score1 = document.querySelectorAll(".dice-1 p")[1];
                var score2 = document.querySelectorAll(".dice-2 p")[1];
                score1.textContent = `Score: ${totalScoreDice1}`;
                score2.textContent = `Score: ${totalScoreDice2}`;

				rollCount++;

				if (rollCount === 3) {
					winCheck();
				}
			}

			function winCheck() {
				if (totalScoreDice1 > totalScoreDice2) {
					// alert("Dice 1 wins with a total score of " + totalScoreDice1 + "!");
                    document.querySelector(".container h2").textContent = `Player 1 Win!`;
				} else if (totalScoreDice1 < totalScoreDice2) {
					// alert("Dice 2 wins with a total score of " + totalScoreDice2 + "!");
                    document.querySelector(".container h2").textContent = `Player 2 Win!`;
				} else {
					// alert("It's a tie with both dice scoring " + totalScoreDice1 + "!");
                    document.querySelector(".container h2").textContent = `Draw!`;
				}

				rollCount = 0;
				totalScoreDice1 = 0;
				totalScoreDice2 = 0;
			}