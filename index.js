const canvas = document.querySelector('canvas');

const c = canvas.getContext('2d')// this allows us to access a 2d animation API so we can
// do some cool 2d stuff

canvas.width = 1024 // this allows us to have a screen size that should 
//fit most screens with a good aspect ratio
canvas.height = 576

c.fillStyle= 'white'
c.fillRect(0, 0, canvas.width, canvas.height)// this allows us to display a canvas onto our screen

const image = new Image()
image.src = './img/FirstPokemonIsland.png'


image.onload = () => {
    c.drawImage(image, 0, 0)
}