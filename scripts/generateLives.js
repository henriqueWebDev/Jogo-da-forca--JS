export default function generateLives() {
    const amount = 5
    var listLifes = []
    while (amount != 0) {
        listLifes.push('<div id="life-1"><img src="heart-img.png" alt="life" class="life"></div>')
        amount -= 1
    }
    return listLifes
}