//start the game
function game() {
    const mainbtn = document.querySelector(".intro button");
    const scorescr = document.querySelector(".score");
    const matchscr = document.querySelector(".match");
    const introscr = document.querySelector(".intro");
    mainbtn.addEventListener("click", () => {
        introscr.style.display = "none";
        scorescr.style.display = "flex";
        matchscr.style.display = "flex";

    });
}
game();

var pscore = 0;
var cscore = 0;
//change image
function change() {

    var para = document.createElement("h1");
    var node = document.createTextNode("Let's start the Game !");
    para.appendChild(node);

    para.style.color ="orange";
    var element = document.querySelector(".match");
    var child = document.querySelector(".match .image");
    element.insertBefore(para, child);

    const gamebtn = document.querySelectorAll(".options button");
    const playerimg = document.querySelector(".image .playerimg");
    const computerimg = document.querySelector(".image .computerimg")
    gamebtn.forEach(option => {
        option.addEventListener("click", function () {
            let ptext = this.innerHTML;
            playerimg.src = `./assets/${ptext}.png`;

            const choice = ["rock", "paper", "scissor"];

            let value = (Math.floor(Math.random() * 10)) % 3;
            computerimg.src = `./assets/${choice[value]}.png`;

            let ctext = choice[value];

            let cvalue = document.querySelector(".computerscore p");
            let pvalue = document.querySelector(".playerscore p");



            if (ptext == ctext) {
                // console.log("Tie");
                para.innerHTML = "It's a Tie !";

            }
            else if (ptext == "rock") {
                if (ctext == "scissor") {
                    // console.log("player wins");
                    pscore++;
                    para.innerHTML = "Player Wins !";
                }
                else {
                    // console.log("computer wins");
                    cscore++;
                    para.innerHTML = "Computer Wins !";
                }
            }
            else if (ptext == "paper") {
                if (ctext == "rock") {
                    // console.log("player wins");
                    pscore++;
                    para.innerHTML = "Player Wins !";
                }
                else {
                   // console.log("computer wins");
                    cscore++;
                    para.innerHTML = "Computer Wins !";
                }
            }
            else {
                if (ctext == "paper") {
                    // console.log("player wins");
                    pscore++;
                    para.innerHTML = "Player Wins !";
                }
                else {
                    // console.log("computer wins");
                    cscore++;
                    para.innerHTML = "Computer Wins !";
                }
            }
            pvalue.innerHTML = `${pscore}`;
            cvalue.innerHTML = `${cscore}`;
        });
    });
}
change();


