var dvdImage
function preload(){
    dvdImage= loadImage("dvdlogo.jpg")
}

function setup(){
    createCanvas(800, 600)

}

var xPos = 50
var yPos = 50
var xSpeed = 5
var ySpeed = 5
var backgroundColor= "purple"

function draw(){
    background(backgroundColor)
    image(dvdImage, xPos, yPos, 100, 100)
    
    xPos = xPos + xSpeed
    yPos = yPos + ySpeed
    
    if (xPos > 700) {
      xSpeed = xSpeed * -1
      backgroundColor ="red"
    }
    
    if (xPos < 0) {
        xSpeed = xSpeed * -1
        backgroundColor="blue"
    }
    
    if (yPos > 500) {
        ySpeed = ySpeed * -1
    }
    
    if (yPos < 0) {
        ySpeed = ySpeed * -1
    }
}