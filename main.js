img = ""
function preload() {

img = loadImage("dog_cat.jpg")

}
function setup() {

Canvas = createCanvas(600,400)
Canvas.center();

}
function draw() {

image(img,0,0,600,500)

}