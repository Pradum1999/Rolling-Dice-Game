let y = 1
let z = 0
var audio = new Audio('music.mp3');
function roll_dice() {
    audio.play();
    let x = Number(Math.floor(Math.random(0, 1) * 6 + 1))
    document.getElementById('dice_value').innerHTML = x

    if (y % 2 === 0) {
        console.log('player2')
        let num2 = Number(document.getElementById('p2_score').innerHTML)
        num2 = num2 + x
        document.getElementById('p2_score').innerHTML = num2
        y =1
        if (num2 >= 50) {
            z = 1
        }

    }
    else {
        console.log('player1')
        let num1 = Number(document.getElementById('p1_score').innerHTML)
        num1 = num1 + x
        document.getElementById('p1_score').innerHTML = num1
        y = y + 1
        if (num1 >= 50) {
            z = 1
        }
    }
    if (z === 1) {
        let num1 = Number(document.getElementById('p1_score').innerHTML)
        let num2 = Number(document.getElementById('p2_score').innerHTML)
        if (num1 > num2) {
            document.getElementById('result').innerHTML = 'Captain America win this match'
            document.getElementById('result').className = 'alert alert-dark'
            document.getElementById('btn_roll').disabled = true
        }
        if (num1 < num2) {
            document.getElementById('result').innerHTML = 'Spiderman win this match'
            document.getElementById('result').className = 'alert alert-dark'
            document.getElementById('btn_roll').disabled = true
        }
    }

}
