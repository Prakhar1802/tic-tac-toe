console.log("Welcome to tic tac toe");
let music = new Audio("Audio/music.mp3");
let audioturn = new Audio("Audio/Ding.mp3");
let gameover = new Audio("Audio/gameover.mp3");
let winner = new Audio("Audio/WinnerSong.mp3");
let isgameover = false;

let turn = "X"

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let wins = [
        [0, 1, 2, 1.2, 4,4, 0],
        [3, 4, 5, 1.2, 14.4, 0],
        [6, 7, 8, 1.2, 24.4, 0],
        [0, 3, 6, -8.6, 14.5, 90],
        [1, 4, 7, 1.4, 14.5, 90],
        [2, 5, 8, 11.5, 14.5, 90],
        [0, 4, 8, 2, 15, 45],
        [2, 4, 6, 1, 15, -45],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "200px"
            document.querySelector(".line").style.width = "27vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
            winner.play()
        }

    })

}

// Game Logic

let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let boxtexts = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (boxtexts.innerText === "") {
            boxtexts.innerText = turn
            turn = changeTurn()
            audioturn.play()
            checkWin()
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
            }
        }
        
    })

})

// Reset button

reset.addEventListener("click", ()=>{
    let boxtext = document.querySelectorAll(".boxtext");
    Array.from(boxtext).forEach(element=>{
        element.innerText = " "
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn of " + turn;
    document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0"
    document.querySelector(".line").style.width = "0";
    winner.pause()
 
})