const images = [
    'images/artur sorgus.jfif',
    'images/vilve kirs.webp',
    'images/tiit sakkos.webp',
    'images/tom leesnurm.webp',
    'images/ailar holzmann.webp',
    'images/valmar matso.webp',
    'images/annely oone.webp',
    'images/sergei jevstratenko.webp',
    'images/beatrice peetsalu.webp',
    'images/liis kapp.webp',
    'images/eveli erm.webp',
    'images/janar kärner.webp',
    'images/ingrid mets.webp',
    'images/tiit sakkos 2.JPG',
    'images/vilve kirs 2.JPG',
    'images/artur sorgus 2.jpg',
]

const play = document.createElement('span')
play.innerHTML = '⏵'
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
        this.cells = document.getElementById('cells')
        this.level = 0
        this.play = false
        this.nextLevel()
    }

    nextLevel() {
        this.play = false
        photo.src = images[this.level]
        this.level++
        this.updateControls()
        this.updateCells()
    }

    reveal() {
        this.cells.innerHTML = ''
    }

    changeState() {
        this.play = !this.play
        this.updateControls()
        if (this.play) {
            this.openTile()
        }
    }

    updateControls() {
        this.controls.innerHTML = ''
        const controlElements = this.play ? [pause] : [play, next, show]
        controlElements.forEach(element => {
            this.controls.appendChild(element)
        });
    }

    updateCells() {
        this.cells.innerHTML = ''
        for (let y = 0; y < 10; y++) {
            for (let x = 0; x < 10; x++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.style.left = `${x * 64}px`
                cell.style.top = `${y * 64}px`
                this.cells.appendChild(cell)
            }
        }
    }

    openTile() {
        if (this.play) {
            const index = Math.floor(1 + Math.random() * this.cells.childElementCount)
            const child = document.querySelector('#cells>:nth-child(' + index + ')');
            if (child) {
                child.remove();
            }
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