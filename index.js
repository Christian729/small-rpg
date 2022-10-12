const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')// this allows us to access a 2d animation API so we can
// do some cool 2d stuff


canvas.width = 1024 // this allows us to have a screen size that should 
//fit most screens with a good aspect ratio
canvas.height = 576

const collisionsMap = []
for (let i = 0; i < collisions.length; i +=70) {// this function allows us to see the collisions in a row of our game map
    collisionsMap.push(collisions.slice(i, 70 + i))

}

class Boundary {
    constructor({position}) {
        this.position = position
        this.width = 48
        this.height = 48
    }
    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width,this.height)
    }
}

const boundaries = []
collisionsMap.forEach((row, i) => {
    row.forEach((Symbol, j) => {
        boundaries.push(
            new Boundary({
                position: {
                    x: 0,
                    y: 0
        }
    }))
    })
})

const image = new Image()
image.src = './img/FirstPokemonIsland.png'

const playerImage = new Image() // this allows us to access our player
playerImage.src =  './img/playerDown.png'

//instead of making constant changes to our variables in a Let playerimage do so and so, we could just make a 
// class to make the whole process easier.
class Sprite {
    constructor({position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y)// this allows us to load our screen onto a specific location

    }
}

const background = new Sprite({
    position: {
        x: -400,
        y: -575
    },
    image: image // the second image is representing our initial const image
})


const keys = {
    w: {
        pressed: false// the pressed: false part makes sure we dont press a key by default
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}


// Our animation function allows us to render the page continuously until we tell it to stop
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    c.drawImage(
        playerImage, 
        0,
        0,
        playerImage.width / 4,// we divide the width by 4 since we want to only access the 1st image asset.
        playerImage.height,
        canvas.width / 2 - (playerImage.width/4)/2,// we are readjusting our player to fit the center.
        canvas.height /2 - playerImage.height/2,
        playerImage.width / 4,
        playerImage.height
        )// this allows us to load our player in the game AFTER the location
        if (keys.w.pressed && lastKey ==='w') background.position.y += 3// finally our player can move up
        else if (keys.a.pressed && lastKey ==='a') background.position.x += 3
        else if (keys.s.pressed && lastKey ==='s') background.position.y -= 3
        else if (keys.d.pressed && lastKey ==='d') background.position.x -= 3
}// the '&& lastKey' part helps us shift from moving one direction to another while holding both keys down
animate()



window.addEventListener('keydown', (e) =>{
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

let lastKey = ''
window.addEventListener('keyup', (e) =>{
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = false
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = false
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = false
            lastKey = 'd'
            break
    }
})
