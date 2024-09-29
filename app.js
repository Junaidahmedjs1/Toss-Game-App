var output = document.querySelector("h1");
var coin = document.querySelector("#coin")

function Toss(num) {
    let number = Math.ceil(Math.random() * 2);
   

    if ((num === '1' && number === 1) || (num === '2' && number === 2)) {
        output.innerHTML = "You Win The Toss";
        console.log("You Win Toss");
    } else {
        output.innerHTML = "You Lost The Toss.";
        console.log("You Lost Toss");
    }


if (num === '1') {
    coin.src = "head.png";
    coin.alt = 'Heads';
} else {
    coin.src = 'tails.png'; 
    coin.alt = 'Tails';
}
}



