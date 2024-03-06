function startGame() {
    var player1 = (Math.floor((Math.random() * 6) + 1));
    var player2 = (Math.floor((Math.random() * 6) + 1));

    console.log(player1)
    var player1Img = `./asset/dice${player1}.jpg`;
    var player2Img = `./asset/dice${player2}.jpg`;
    var result = document.getElementById("result")
    var elem = document.querySelectorAll('.dice');
    console.log(elem)
    elem[0].setAttribute('src', player1Img)
    elem[1].setAttribute('src', player2Img)

    if (player1 > player2) {
        result.innerHTML = `player 1 won the match`
    }

    else if (player2 > player1) {
        result.innerHTML = `player 2 won the match`

    } else {
        result.innerHTML = `Drow match`
    }
}