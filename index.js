const cards = ["Guadalupe", "Ollie", "Aki"]
const thankYou = [];

function writeCards(cards) {
    for (let i = 0; i < cards.length; i++) {
        cards[i] = (`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
        debugger;
    }
    return cards;
}
writeCards(cards);

function countDown() {
    let i = 10;
    while (i >= 0) {
        console.log(i--);
    }
}