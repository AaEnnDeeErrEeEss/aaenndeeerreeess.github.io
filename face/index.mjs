const images = [
    'images/test.jpg',
]

const play = document.createElement('span')
play.innerHTML = '⏵'
play.addEventListener('onclick', () => console.log('test'))
const pause = document.createElement('span')
pause.innerHTML = '⏸'
const next = document.createElement('span')
next.innerHTML = '⏭'
const show = document.createElement('span')
show.innerHTML = '👁'

class Game {
    constructor() {
        this.photo = document.getElementById('photo')
        this.controls = document.getElementById('controls')
        this.level = 0
        this.play = false
        this.nextLevel()
        this.tiles = [...Array(100).keys()]
    }

    nextLevel() {
        this.play = false
        photo.src = images[this.level]
        this.level++
        this.updateControls()
    }

    reveal() {
        console.log('reveal')
    }

    changeState() {
        this.play = !this.play
        this.updateControls()
        if (this.play) {
            this.openTile()
        }
    }

    updateControls() {
        this.controls.innerHTML = ""
        const controlElements = this.play ? [pause] : [play, next, show]
        controlElements.forEach(element => {
            this.controls.appendChild(element)
        });
    }

    openTile() {
        if (this.play) {
            console.log(this.tiles)
            setTimeout(() => this.openTile(), 2048)
        } else { }
    }
}

window.onload = () => {
    const game = new Game(photo)
    play.addEventListener('click', () => game.changeState())
    pause.addEventListener('click', () => game.changeState())
    next.addEventListener('click', () => game.nextLevel())
    show.addEventListener('click', () => game.reveal())
}